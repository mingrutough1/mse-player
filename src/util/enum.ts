export enum WEBSOCKET_CMD {
  CmdStartStream = "startvideo", // 开启视频流
  CmdTouch = "touch", // 点击画面
  CmdPressButton = "pressbutton", // 按钮
  CmdCapture = "capture", // 截图
  CmdHeart = "heart", // 心跳
  CmdCalcDelay = "calcdelay", // 计算延迟
  CmdStopStream = "stopvideo", // 结束视频流
  CmdKeyboardInput = "keyboard", // 键盘按键输入
  CmdBridgeCMD = "bridgecmd", // 发送adb命令给手机，当前仅支持安卓
  CmdSetClipBoard = "setclipboard", // 设置剪贴板
  CmdGetClipBoard = "getclipboard", // 获取剪贴板内容
  CmdUploadFile = "uploadfile", // 上传文件
}

export enum PRESS_BUTTON {
    home, // 返回主页
    recent,// 打开最近应用
    back, // 返回
}

export enum TOUCH {
  end, // touch end
  start, // touch start
  move = 3, //touch move
}


export enum WEBSOCKET_MSG {
  H264, // h264
  Rotate, // 旋转
  Screenshot, // 截图
  DelayData, // 延迟数据
  Clipboard, // 剪切板
  FileUploadVal, // 文件上传返回值
  ImageStream,// 图片流
  CMDResponse, // cmd 返回值
}
export enum ROTATE_MSG {
    '0degrees',
    '-90degrees',
    '-180degrees',
    '-270degrees',
}