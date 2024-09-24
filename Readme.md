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
interface IMsePlayerOption  {
    wsAddress: string;
    videoElement: MediaElementType;
    deviceId: string;
    testId: string;
    controlKey?: string;
    adminKey?: string;
    audioElement?: HTMLAudioElement;
    disableAutoRotate?: Boolean;
    mode: 'video' | 'image';
}
```
* 【必填】 wsAddress - 视频流websocket 服务地址。默认传： ```wss://api.cloudtest.qq.com/v1/websocket/video```
* 【必填】 videoElement - video 元素
* 【必填】 deviceId - 设备id
* 【必填】 testId - 远程调试id 。当传adminKey 时，也不能为空，给个默认值如 '0' 即可
* 【选填】 controlKey - 鉴权controlKey。当传adminKey时，可省略
* 【选填】 adminKey - 专有云特有，是一个无状态的管理员key
* 【选填】 audioElement - audio 元素。当设备支持音频输出时，传入audio 元素即可播放音频
* 【选填】 disableAutoRotate - 画面自动旋转开关。默认为false，安卓14 以上须传 true
* 【选填】 mode - 视频流or图片流。默认时视频流，当websocket 服务返回的是图片流时传入 'image'

上述鉴权相关参数：deviceId、testId、controlKey，可用两种方式获得：
1. [后端REST API](https://iwiki.woa.com/p/351783086)
2. 在终端云测官网上，进入真机调试页[内部用户](https://cloudtest.woa.com/)、 [外部用户](https://wetest.qq.com/)
![Image text](https://wdoc-76491.picgzc.qpic.cn/MTY4ODg1NjIzOTMyMzYxNQ_373570_crYkbr1GMkK8Vbrv_1727164403?imageMogr2/thumbnail/1600x%3E/ignore-error/1)

获取到相关参数后，填入[Demo页](https://mingrutough1.github.io/mse-player/example/index.html)，可快速预览

![Image text](https://wdoc-76491.picgzc.qpic.cn/MTY4ODg1NjIzOTMyMzYxNQ_273193_i7CK9F6D4Ts7CZt8_1727164845?imageMogr2/thumbnail/1600x%3E/ignore-error/1)