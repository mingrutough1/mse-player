export enum WEBSOCKETCMD {
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

export enum WEBSOCKETMSG {
  H264,
}
