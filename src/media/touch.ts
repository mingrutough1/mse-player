import { ITouchOptions } from "../util/type";
import { MediaElementType } from "../util/type";
import { TOUCH, ROTATE_MSG, WEBSOCKET_CMD } from "../util/enum";
import { PositonRatio } from '../util/const';
export default class Touch {
  node: MediaElementType;
  hasBind: Boolean = false;
  touchStart: Boolean = false;
  rotateValue: ROTATE_MSG = ROTATE_MSG["0degrees"];
  sendCommand: (object) => void;
  constructor(options: ITouchOptions) {
    const { node, rotateValue, sendCommand } = options;
    this.node = node;
    this.rotateValue = rotateValue;
    this.sendCommand = sendCommand;
    this.addListener();
  }

  addListener() {
    this.node.addEventListener("mousedown", this.handleMousedown);// mousedown 监听视频元素
    document.addEventListener("mousemove", this.handleMouseover); // mousemove、mouseup 需监听document ，否则鼠标移出画面将不能正常响应
    document.addEventListener("mouseup", this.handleMouseup);
    this.hasBind = true;
  }
  calcPos(e) {

    const rect = this.node.getBoundingClientRect();
    const width = this.node.offsetWidth;
    const height = this.node.offsetHeight;

    let x:number = e.clientX - rect.left;
    let y:number = e.clientY - rect.top;

    x = Math.floor(x / width * PositonRatio);
    y = Math.floor(y / height * PositonRatio);
    return {x, y};
  }

  handleMousedown = (e) => {
    this.touchStart = true;
    // todo 支持多指
    const obj = {
        cmd: WEBSOCKET_CMD.CmdTouch,
        ptype: TOUCH.start,
        ...this.calcPos(e)
    };
    this.sendCommand(obj);
  };

  handleMouseover = (e) => {
    if(!this.touchStart) return; 
    // todo 支持多指
    const obj = {
        cmd: WEBSOCKET_CMD.CmdTouch,
        ptype: TOUCH.move,
        ...this.calcPos(e)
    };
    this.sendCommand(obj);
  };

  handleMouseup = (e) => {
    if(!this.touchStart) return; 
    this.touchStart = false;
    // todo 支持多指
    const obj = {
        cmd: WEBSOCKET_CMD.CmdTouch,
        ptype: TOUCH.end,
        ...this.calcPos(e)
    };
    this.sendCommand(obj);
  };

  start() {
    if (this.hasBind) return;
    this.addListener();
  }

  pause() {
    this.node.removeEventListener("mousedown", this.handleMousedown);
    document.removeEventListener("mousemove", this.handleMouseover);
    document.removeEventListener("mouseup", this.handleMouseup);
    this.hasBind = false;
  }
}
