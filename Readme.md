## mse-realtime-player

基于 mse 的云真机投流组件库。

sdk 支持如下能力：

|                  | Android | iOS | HarmonyOSNext |
| ---------------- | :-----: | :-: | :-----------: |
| 视频流           |   ✅    | ✅  |      ✅       |
| 音频流           |   ✅    |     |
| 单指触控         |   ✅    | ✅  |      ✅       |
| 多指触控         |   ✅    |     |
| 键盘输入         |   ✅    | ✅  |      ✅       |
| 上传图片         |   ✅    |     |
| 截图             |   ✅    | ✅  |      ✅       |
| 延时数据         |   ✅    | ✅  |      ✅       |
| 打开网页         |   ✅    |     |
| 设置或获取剪切板 |   ✅    |     |
| 折叠屏展开、收起 |   ✅    |     |
| 执行 adb         |   ✅    |     |

## Live Demo

[体验 Demo](https://mingrutough1.github.io/mse-player/example/index.html)

## 如何接入

### script 标签引入

```html
<script type="text/javascript" src="dist/index.js"></script>
<script>
  const player = new MsePlayer(options);
</script>
```

### npm 引入

```javascript

$ npm install mse-realtime-player

import { MsePlayer } from 'mse-realtime-player';
  const player = new MsePlayer(options);

```

### options 参数说明

```typescript
interface IMsePlayerOption {
  wsAddress: string;
  videoElement: MediaElementType;
  deviceId: string;
  testId: string;
  controlKey?: string;
  adminKey?: string;
  audioElement?: HTMLAudioElement;
  disableAutoRotate?: Boolean;
  mode?: "video" | "image";
}
```

- 【必填】 wsAddress - 视频流 websocket 服务地址。默认传： `wss://api.cloudtest.qq.com/v1/websocket/video`
- 【必填】 videoElement - video 元素
- 【必填】 deviceId - 设备 id
- 【必填】 testId - 远程调试 id 。当传 adminKey 时，也不能为空，给个默认值如 '0' 即可
- 【选填】 controlKey - 鉴权 controlKey。当传 adminKey 时，可省略
- 【选填】 adminKey - 专有云特有，是一个无状态的管理员 key
- 【选填】 audioElement - audio 元素。当设备支持音频输出时，传入 audio 元素即可播放音频
- 【选填】 disableAutoRotate - 画面自动旋转开关。默认为 false，安卓 14 以上须传 true
- 【选填】 mode - 视频流 or 图片流。默认时视频流，当 websocket 服务返回的是图片流时传入 'image'

上述鉴权相关参数：deviceId、testId、controlKey，可用两种方式获得：

1. [后端 REST API](https://iwiki.woa.com/p/351783086)
2. 在终端云测官网上，进入真机调试页[内部用户](https://cloudtest.woa.com/)、 [外部用户](https://wetest.qq.com/)
   ![Image text](https://wdoc-76491.picgzc.qpic.cn/MTY4ODg1NjIzOTMyMzYxNQ_373570_crYkbr1GMkK8Vbrv_1727164403?imageMogr2/thumbnail/1600x%3E/ignore-error/1)

获取到相关参数后，填入[Demo 页](https://mingrutough1.github.io/mse-player/example/index.html)，可快速预览

![Image text](https://wdoc-76491.picgzc.qpic.cn/MTY4ODg1NjIzOTMyMzYxNQ_273193_i7CK9F6D4Ts7CZt8_1727164845?imageMogr2/thumbnail/1600x%3E/ignore-error/1)

### 指令

MsePlayer 支持如下指令：

```typescript
enum CMD {
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
  UploadFile = "uploadfile", // 上传图片
}
```

对于有数据返回的指令，MsePlayer 暴露了相关事件返回指令结果。示例如下:

```javascript
import { MsePlayer, Enum: { CMD, ADB }, } from "mse-realtime-player";

const player = new MsePlayer({
  videoElement: document.getElementById("video"),
  wsAddress: "wss://api.cloudtest.qq.com/v1/websocket/video",
  deviceId: "xx",
  controlKey: "xx",
  testId: "xx",
});
// 截图

player.sendCommand({
    cmd: CMD.Capture,
});
player.event.on(EEvent.ScreenShot, (data) => {
    console.log("截图时间", data.time);
    console.log("图片地址", data.url);
});


// 获取手机剪切板文本

player.sendCommand({
    cmd: CMD.GetClipBoard,
});
player.event.on(EEvent.Clipboard, (data) => {
    console.log("剪切板文本", data);
});
```

### 事件

MsePlayer 对外暴露出如下事件：

```typescript
enum EEvent {
  VideoReady = "videoready",
  SocketOpen = "socketopen",
  SocketMessage = "socketmessage",
  SocketError = "socketerror",
  SocketClose = "socketclose",
  Rotate = "rotate",
  ScreenShot = "screenshot",
  DelayData = "delaydata",
  Clipboard = "clipboard",
  FileUploadVal = "fileuploadval",
  BridgeCMD = "bridgecmd",
}
```

用户可监听需要的事件做业务逻辑处理。如：

```javascript
import { MsePlayer, Enum: { EEvent }, } from "mse-realtime-player";

const player = new MsePlayer({
  videoElement: document.getElementById("video"),
  wsAddress: "wss://api.cloudtest.qq.com/v1/websocket/video",
  deviceId: "xx",
  controlKey: "xx",
  testId: "xx",
});

player.event.on(EEvent.VideoReady, (e) => {
  console.log("on video ready", e);
  document.getElementById("videoLoading").style.display = "none"; // loading 结束
});

player.event.on(EEvent.SocketOpen, (e) => {
  console.log("on socket open", e);
});
player.event.on(EEvent.SocketClose, (e) => {
  console.log("on socket close", e);
  document.getElementById("videoLoading").innerText =
    "websocket 服务已断开\n请检查参数后重试"; //
});
```
