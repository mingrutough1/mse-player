import { ITouchOptions } from "../util/type";
import { MediaElementType } from "../util/type";
import { TOUCH, ROTATE_MSG, CMD, PcCustomEventType } from "../util/enum";
import { PositonRatio, MOUSE_BUTTON_LEFT, MOUSE_BUTTON_RIGHT, MODIFIER_SHIFT, MODIFIER_CTRL, MODIFIER_ALT, MODIFIER_META } from "../util/const";
import { createProtocolData, buildCustomEvent } from '../util/utils';
export default class Touch {
    node: MediaElementType;
    pointerLockElement: HTMLElement;
    hasBind: Boolean = false;
    touchStart: Boolean = false;
    isPc: Boolean = false;
    rotateValue: ROTATE_MSG = ROTATE_MSG["0degrees"];
    sendCommand: (object, boolean?) => void;

    _pcMouseSpeedFactor: number = 1.0;
    private exitPointerMethod: "esc" | "manual" = "esc";

    constructor(options: ITouchOptions) {
        const { node, rotateValue, sendCommand, isPc, mouseSensitivity } = options;
        this.node = node;
        this.rotateValue = rotateValue;
        this.isPc = isPc;
        this._pcMouseSpeedFactor = mouseSensitivity || 1.0;
        this.sendCommand = sendCommand;
        this.addListener();
        this.addStyle();
    }
    addStyle() {
        // 创建一个新的 <style> 标签
        const style = document.createElement('style');
        style.textContent = `
                video::-webkit-media-controls {
                    display: none !important;
                }
            `;
        // 将 <style> 标签添加到 <head> 中
        document.head.appendChild(style);
    }
    addListener() {
        this.node.addEventListener("mousedown", this.handleMousedown); // mousedown 监听视频元素
        document.addEventListener("mousemove", this.handleMouseover); // mousemove、mouseup 需监听document ，否则鼠标移出画面将不能正常响应
        document.addEventListener("mouseup", this.handleMouseup);
        this.hasBind = true;

        if (this.isPc) {
            console.log('bind pc event');
            this.pointerLockElement = this.node;
            this._removePointerLockEvent();
            this.pointerLockElement.addEventListener("click", this._requestPointerLock);
        }
    }
    private _requestPointerLock = async () => {
        if (document.pointerLockElement) {
            return;
        }
        await (this.pointerLockElement as HTMLElement)?.requestPointerLock();
        this._addPointerLockEvent();
        this.pointerLockElement.tabIndex = 1;
        // focus需要元素设置有tabindex大于等于0的值
        this.pointerLockElement?.focus();
    };
    private _watchLockChange = () => {
        if (!document.pointerLockElement) {
            // 1. 如果lock函数不存在，则不支持navigator.keyboard.lock, 无法支持Esc拦截，需要自主发送一个
            // 2. 即便lock函数存在，长按会导致pointerLock退出，无法再接收到keyUp时间也会异常，所以也需要再自助发送一个
            // 创建一个键盘事件对象
            if (this.exitPointerMethod === "esc" && !document.fullscreenElement) {
                // esc 退出补发事件，manual 退出不发事件。全屏状态下不发事件
                const escKeyEvent = new KeyboardEvent("keydown", {
                    key: "Escape",
                    keyCode: 27, // 旧的属性，为了兼容性
                    code: "Escape",
                    which: 27, // 旧的属性，为了兼容性
                    bubbles: true, // 事件是否冒泡
                    cancelable: true, // 事件是否可以取消
                });
                this._handlePointerLockKeyDown(escKeyEvent);
                this._handlePointerLockKeyUp(escKeyEvent);
            }
            this._removePointerLockEvent();
        }
    };
    private _addPointerLockEvent = () => {
        document.addEventListener("pointerlockchange", this._watchLockChange);
        // this.pointerLockElement.addEventListener(
        //     "click",
        //     this._requestPointerLock
        // );
        this.pointerLockElement.addEventListener(
            "mousedown",
            this._handleLockedMouseDown
        );
        this.pointerLockElement.addEventListener(
            "mouseup",
            this._handleLockedMouseUp
        );
        this.pointerLockElement.addEventListener(
            "mousemove",
            this._handlePointerLockMovement
        );
        this.pointerLockElement.addEventListener(
            "keydown",
            this._handlePointerLockKeyDown
        );
        this.pointerLockElement.addEventListener(
            "keyup",
            this._handlePointerLockKeyUp
        );
        this.pointerLockElement.addEventListener(
            "wheel",
            this._handlePointerLockMouseWheel,
            { passive: false }
        );
    };
    private _removePointerLockEvent = () => {
        document.removeEventListener("pointerlockchange", this._watchLockChange);
        this.pointerLockElement.removeEventListener(
            "mousedown",
            this._handleLockedMouseDown
        );
        this.pointerLockElement.removeEventListener(
            "mouseup",
            this._handleLockedMouseUp
        );
        this.pointerLockElement.removeEventListener(
            "mousemove",
            this._handlePointerLockMovement
        );
        this.pointerLockElement.removeEventListener(
            "keydown",
            this._handlePointerLockKeyDown
        );
        this.pointerLockElement.removeEventListener(
            "keyup",
            this._handlePointerLockKeyDown
        );
        this.pointerLockElement.removeEventListener(
            "wheel",
            this._handlePointerLockMouseWheel
        );
    }

    private _handleLockedMouseDown = (ev: MouseEvent, isUp?: boolean) => {
        const isLeft = ev.button === 0;
        const mouseBtnData = createProtocolData("mouseBtn", {
            isDown: !isUp,
            button: isLeft ? MOUSE_BUTTON_LEFT : MOUSE_BUTTON_RIGHT,
        });
        this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseBtnData), true);
    };
    private _handleLockedMouseUp = (ev: MouseEvent) => {
        this._handleLockedMouseDown(ev, true);
    };

    private _handlePointerLockMovement = (ev: MouseEvent) => {
        if (!document.pointerLockElement) {
            return;
        }
        const mouseMoveData = createProtocolData("mouseMove", {
            deltaX: ev.movementX * this._pcMouseSpeedFactor,
            deltaY: ev.movementY * this._pcMouseSpeedFactor,
        });
        this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseMoveData), true);
    };
    private _handlePointerLockKeyDown = (ev: KeyboardEvent, isUp?: boolean) => {
        console.log('keydown');
        if (
            ["Tab", "Meta", "Shift", "CapsLock"].includes(ev.key) ||
            ev.metaKey ||
            ev.shiftKey ||
            ev.altKey ||
            ev.ctrlKey
        ) {
            ev.preventDefault();
        }

        if (ev.code === "CapsLock" && ev.shiftKey && ev.ctrlKey) {
            // 组合键退出pointerlock
            console.log("退出鼠标锁定,全屏");
            document.fullscreenElement && document.exitFullscreen();
            document.pointerLockElement && document.exitPointerLock();
            this.exitPointerMethod = "manual";
            setTimeout(() => {
                this.exitPointerMethod = "esc";
            }, 1000);
        }
        const mouseMoveData = createProtocolData("keyboard", {
            isDown: !isUp,
            flags: 0,
            keyCode: ev.keyCode,
            modifiers: this._calculateLockModifierStae(ev),
        });
        this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseMoveData), true);
        return;
    };
    private _handlePointerLockKeyUp = (ev: KeyboardEvent) => {
        this._handlePointerLockKeyDown(ev, true);
    };
    private _handlePointerLockMouseWheel = (ev: WheelEvent) => {
        ev.preventDefault();
        const mouseWheelData = createProtocolData("scroll", {
            scrollAmt1: -parseInt(ev.deltaY.toString()),
        });
        this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseWheelData), true);
    };
    private _calculateLockModifierStae = (event: KeyboardEvent) => {
        let modifier = 0; // 初始化修饰键状态为0
        if (event.shiftKey) {
            modifier |= MODIFIER_SHIFT;
        }
        if (event.ctrlKey) {
            modifier |= MODIFIER_CTRL;
        }
        if (event.altKey) {
            modifier |= MODIFIER_ALT;
        }
        if (event.metaKey) {
            modifier |= MODIFIER_META;
        }
        return modifier;
    };
    public requestFullScreen = async () => {
        await (this.pointerLockElement as HTMLElement).requestFullscreen();
        await this._requestPointerLock();
        (navigator as any).keyboard && (navigator as any).keyboard.lock();
        this.node.controls = false
    }

    public setMouseSensitivity(value: number) {
        this._pcMouseSpeedFactor = value;
    }
    calcPos(e) {
        const rect = this.node.getBoundingClientRect();
        let width = this.node.offsetWidth;
        let height = this.node.offsetHeight;
        let x: number = e.clientX - rect.left;
        let y: number = e.clientY - rect.top;

        switch (this.rotateValue % 4) {
            case 1:
                let temp = y;
                y = x;
                x = width - temp;
                break;
            case 2:
                x = width - x;
                y = height - y;
                break;
            case 3:
                temp = x;
                x = y;
                y = height - temp;
                break;
        }

        x = Math.floor((x / width) * PositonRatio);
        y = Math.floor((y / height) * PositonRatio);
        return { x, y };
    }

    handleMousedown = (e) => {
        this.touchStart = true;
        if (this.isPc) {
            return;
        }
        // todo 支持多指
        const obj = {
            cmd: CMD.Touch,
            ptype: TOUCH.Start,
            ...this.calcPos(e),
        };
        this.sendCommand(obj);
    };

    handleMouseover = (e) => {
        if (!this.touchStart) return;
        // todo 支持多指
        const obj = {
            cmd: CMD.Touch,
            ptype: TOUCH.Move,
            ...this.calcPos(e),
        };
        this.sendCommand(obj);
    };

    handleMouseup = (e) => {
        if (!this.touchStart) return;
        this.touchStart = false;
        // todo 支持多指
        const obj = {
            cmd: CMD.Touch,
            ptype: TOUCH.End,
            ...this.calcPos(e),
        };
        this.sendCommand(obj);
    };

    start() {
        if (this.hasBind) return;
        this.addListener();
    }

    clean() {
        this.node.removeEventListener("mousedown", this.handleMousedown);
        document.removeEventListener("mousemove", this.handleMouseover);
        document.removeEventListener("mouseup", this.handleMouseup);
        this.isPc && this._removePointerLockEvent();
        this.hasBind = false;
    }
}
