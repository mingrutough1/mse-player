

export enum EEvent{
  Rotate = 'rotate',
  ScreenShot = 'screenshot',
  DelayData = 'delaydata'
}

export enum CMD {
  StartStream = "startvideo", // 开启视频流
  Touch = "touch", // 点击画面
  PressButton = "pressbutton", // 按钮
  Capture = "capture", // 截图
  Heart = "heart", // 心跳
  CalcDelay = "calcdelay", // 计算延迟
  StopStream = "stopvideo", // 结束视频流
  KeyboardInput = "keyboard", // 键盘按键输入
  BridgeCMD = "bridgecmd", // 发送adb命令给手机，当前仅支持安卓
  SetClipBoard = "setclipboard", // 设置剪贴板
  GetClipBoard = "getclipboard", // 获取剪贴板内容
  UploadFile = "uploadfile", // 上传文件
}

export enum ADB {
  DisableSetting = 'adb shell ct_cmd device_monitor start', // 禁用系统设置
  OpenUrl = 'adb shell am start -a android.intent.action.VIEW -d', // 打开网页
}

export enum PRESS_BUTTON {
    Home, // 主页
    Menu,// 
    Back, // 返回
}

export enum TOUCH {
  End, // touch end
  Start, // touch start
  Move = 3, //touch move
}


export enum MSG {
  H264, // h264
  Rotate, // 旋转
  Screenshot, // 截图
  DelayData, // 延迟数据
  Clipboard, // 剪切板
  FileUploadVal, // 文件上传返回值
  ImageStream,// 图片流
  CMDResponse, // cmd 返回值
  AAC = 255, // 音频
}
export enum ROTATE_MSG {
    '0degrees',
    '-90degrees',
    '-180degrees',
    '-270degrees',
}