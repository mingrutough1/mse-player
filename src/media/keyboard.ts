import { IKeyBoardOptions } from "../util/type";
import { CMD } from '../util/enum';
import { getEventTarget } from '../util/utils';
import { NoKeyPressEventCode } from '../util/const';

export default class KeyBoard {
  sendCommand: (object) => void;
  hasBind: Boolean = false;
  constructor(options: IKeyBoardOptions) {
    const { sendCommand } = options;
    this.sendCommand = sendCommand;
    this.addListener();
  }

  addListener() {
    window.addEventListener("keydown", this.handleKeydown);// 响应不会触发keypress 的修饰键 如Backspace、
    window.addEventListener("keypress", this.handleKeypress);// 响应正常的键盘输入
    // todo 监听剪切板事件并实现ctrl+v 输入
    this.hasBind = true;
  }

  send(e: KeyboardEvent) {
    const tagName = getEventTarget(e).tagName;
    if(tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') return; // 表单输入时，停止发送事件
    this.sendCommand({
        cmd: CMD.KeyboardInput,
        key_code: e.keyCode,
    })
  }

  handleKeydown = (e: KeyboardEvent) => {
    if(NoKeyPressEventCode.includes(e.keyCode)) {
        this.send(e);   
    }
  };

  handleKeypress = (e: KeyboardEvent) => {
    this.send(e);
  };

  start() {
    if (this.hasBind) return;
    this.addListener();
  }

  pause() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("keypress", this.handleKeypress);
    this.hasBind = false;
  }
}
