import require$$0 from 'stream';

var EEvent;
(function (EEvent) {
    EEvent["VideoReady"] = "videoready";
    EEvent["SocketOpen"] = "socketopen";
    EEvent["SocketMessage"] = "socketmessage";
    EEvent["SocketError"] = "socketerror";
    EEvent["SocketClose"] = "socketclose";
    EEvent["Rotate"] = "rotate";
    EEvent["Capture"] = "capture";
    EEvent["DelayData"] = "delaydata";
    EEvent["Clipboard"] = "clipboard";
    EEvent["FileUploadVal"] = "fileuploadval";
    EEvent["BridgeCMD"] = "bridgecmd";
    EEvent["VideoInfo"] = "videoinfo";
})(EEvent || (EEvent = {}));
var CMD;
(function (CMD) {
    CMD["StartStream"] = "startvideo";
    CMD["Touch"] = "touch";
    CMD["PressButton"] = "pressbutton";
    CMD["Capture"] = "capture";
    CMD["Heart"] = "heart";
    CMD["CalcDelay"] = "calcdelay";
    CMD["StopStream"] = "stopvideo";
    CMD["KeyboardInput"] = "keyboard";
    CMD["BridgeCMD"] = "bridgecmd";
    CMD["SetClipBoard"] = "setclipboard";
    CMD["GetClipBoard"] = "getclipboard";
    CMD["UploadFile"] = "uploadfile";
})(CMD || (CMD = {}));
var ADB;
(function (ADB) {
    ADB["DisableSetting"] = "adb shell ct_cmd device_monitor start";
    ADB["OpenUrl"] = "adb shell am start -a android.intent.action.VIEW -d";
    ADB["GetFoldState"] = "adb shell ct_cmd device_state print-state";
    ADB["FoldScreen"] = "adb shell ct_cmd device_state state fold";
    ADB["UnFoldScreen"] = "adb shell ct_cmd device_state state unfold"; // 展开
})(ADB || (ADB = {}));
var PRESS_BUTTON;
(function (PRESS_BUTTON) {
    PRESS_BUTTON[PRESS_BUTTON["Home"] = 0] = "Home";
    PRESS_BUTTON[PRESS_BUTTON["Menu"] = 1] = "Menu";
    PRESS_BUTTON[PRESS_BUTTON["Back"] = 2] = "Back";
})(PRESS_BUTTON || (PRESS_BUTTON = {}));
var TOUCH;
(function (TOUCH) {
    TOUCH[TOUCH["End"] = 0] = "End";
    TOUCH[TOUCH["Start"] = 1] = "Start";
    TOUCH[TOUCH["Move"] = 3] = "Move";
})(TOUCH || (TOUCH = {}));
var MSG;
(function (MSG) {
    MSG[MSG["H264"] = 0] = "H264";
    MSG[MSG["Rotate"] = 1] = "Rotate";
    MSG[MSG["Screenshot"] = 2] = "Screenshot";
    MSG[MSG["DelayData"] = 3] = "DelayData";
    MSG[MSG["Clipboard"] = 4] = "Clipboard";
    MSG[MSG["FileUploadVal"] = 5] = "FileUploadVal";
    MSG[MSG["ImageStream"] = 6] = "ImageStream";
    MSG[MSG["CMDResponse"] = 7] = "CMDResponse";
    MSG[MSG["AAC"] = 255] = "AAC";
})(MSG || (MSG = {}));
var ROTATE_MSG;
(function (ROTATE_MSG) {
    ROTATE_MSG[ROTATE_MSG["0degrees"] = 0] = "0degrees";
    ROTATE_MSG[ROTATE_MSG["-90degrees"] = 1] = "-90degrees";
    ROTATE_MSG[ROTATE_MSG["-180degrees"] = 2] = "-180degrees";
    ROTATE_MSG[ROTATE_MSG["-270degrees"] = 3] = "-270degrees";
})(ROTATE_MSG || (ROTATE_MSG = {}));
var PcCustomEventType;
(function (PcCustomEventType) {
    PcCustomEventType[PcCustomEventType["Event"] = 1] = "Event";
    PcCustomEventType[PcCustomEventType["Text"] = 2] = "Text";
})(PcCustomEventType || (PcCustomEventType = {}));

var _enum = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ADB () { return ADB; },
    get CMD () { return CMD; },
    get EEvent () { return EEvent; },
    get MSG () { return MSG; },
    get PRESS_BUTTON () { return PRESS_BUTTON; },
    get PcCustomEventType () { return PcCustomEventType; },
    get ROTATE_MSG () { return ROTATE_MSG; },
    get TOUCH () { return TOUCH; }
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var PositonRatio = 100000;
var cursorImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMDJUMTU6MzY6MTkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTAyVDE1OjM4OjU1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTAyVDE1OjM4OjU1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRvdCBHYWluIDE1JSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDY0YWNjZS01NDQ2LTRjNTYtOTYzYS1kNTczZmJlYmEyMTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZGU2NmYyMS00NTQwLTliNDktODYyNy1hMTk0NzdmOTFlNDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4Yjk2ZTBiMC02NDhkLTQ2NTAtYWNmOC1lMzEyMWM0MjI5YmMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhiOTZlMGIwLTY0OGQtNDY1MC1hY2Y4LWUzMTIxYzQyMjliYyIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0wMlQxNTozNjoxOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NjRhY2NlLTU0NDYtNGM1Ni05NjNhLWQ1NzNmYmViYTIxNiIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0wMlQxNTozODo1NSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5ucw2gAAAk1JREFUOMuVkz9MU1EUxg+lUFIKpUXaikBriKKQWJtQ0mIHhACaVowYhsYWN40GNwxBHViaLkw6lJWBhBgXU+KgI00IKyFxawkU6GYnKAx8fu/1b2iJ8f6ae0/P+c65J+/eK5D/o2q0SLB3bjYYCUY497bI1aNOmVwj3xPpI2whTraOj34kXCPlaJV8PnaSwwruoV7dXkNr5ST3PlYrhX8j33AGlyrVwUB055ITes6iX2vsMRsFYKa4g1wroNhCL8LRS9W7+7KA/0LQhU5yg3QW6KI3kEV3X3kXLgtr2GQtOxwqxdWBm8TOyObCWmVbrb+SeA09+nCrgtsl9Hj1MymtpZ6svvQhvKw0gH4yUIUd3vSh1VdqaDh0noST0vsqLpVKux/Os5QnlFfzNxQ+TcHNlKECblKcFZxwn6bc4VJC+9j+Mfys5FN5UFjLuBDYz7SPFRO0YttIYgl3MYqHFYwQZR3FHSxtpOQ6lep3ahJ5s45duscxUWKSTKiecX693bfreaUyGqXJOHwAfOTdmUKgwJPCOkXvhwMYhylvzCdoeKcb/F94NWbgwXMyrfJMtT30wv9ZGqjSFA9CJyZpexdnyjzPY5LiGTJNy0sP5uJipEJXvk0aaRaz2F6uZi6QwCe8wFMSYpObGcyuio3R5nJ9ZWh58BYx9YSXt3ey2MNvsrfzZ3m7J8zaFka1l5+Qlj3apEMcev/g4qPY49jgot4vDnpsjGhrPdJ6fgcTwzZWtBKLapvorb/6XStJBmljz2bOBlVcJ/8YSlqeGtK/waCRFVrpBogAAAAASUVORK5CYII=';
var NoKeyPressEventCode = [
    8, // Backspace
];
var MOUSE_BUTTON_DOWN_EVENT_MAGIC_GEN5 = 0x00000008;
var MOUSE_BUTTON_UP_EVENT_MAGIC_GEN5 = 0x00000009;
var MOUSE_MOVE_REL_MAGIC_GEN5 = 0x00000007;
var SCROLL_MAGIC_GEN5 = 0x0000000A;
var KEY_DOWN_EVENT_MAGIC = 0x00000003;
var KEY_UP_EVENT_MAGIC = 0x00000004;
var UTF8_TEXT_EVENT_MAGIC = 0x00000017;
var MOUSE_BUTTON_LEFT = 0x01;
var MOUSE_BUTTON_RIGHT = 0x03;
var MODIFIER_SHIFT = 0x01;
var MODIFIER_CTRL = 0x02;
var MODIFIER_ALT = 0x04;
var MODIFIER_META = 0x08;

var isSafari = function () {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
function createProtocolData(type, data) {
    var buffer = new ArrayBuffer(0);
    var view = new DataView(buffer);
    var offset = 0;
    function writeHeader(size, magicCode) {
        buffer = new ArrayBuffer(size);
        view = new DataView(buffer);
        view.setUint32(offset, size - 8, false); // size (Big Endian)
        offset += 4;
        view.setUint32(offset, magicCode, true); // magic_code (Little Endian)
        offset += 4;
        return view;
    }
    switch (type) {
        case 'mouseBtn':
            writeHeader(9, data.isDown ? MOUSE_BUTTON_DOWN_EVENT_MAGIC_GEN5 : MOUSE_BUTTON_UP_EVENT_MAGIC_GEN5);
            view.setUint8(offset, data.button);
            break;
        case 'mouseMove':
            writeHeader(12, MOUSE_MOVE_REL_MAGIC_GEN5);
            view.setInt16(offset, data.deltaX, false);
            offset += 2;
            view.setInt16(offset, data.deltaY, false);
            break;
        case 'scroll':
            writeHeader(10, SCROLL_MAGIC_GEN5);
            view.setInt16(offset, data.scrollAmt1, false);
            break;
        case 'keyboard':
            writeHeader(12, data.isDown ? KEY_DOWN_EVENT_MAGIC : KEY_UP_EVENT_MAGIC);
            view.setUint8(offset, data.flags);
            offset += 1;
            view.setInt16(offset, data.keyCode, true);
            offset += 2;
            view.setUint8(offset, data.modifiers);
            break;
        case 'text':
            writeHeader(4 + 4 + data.text.length, UTF8_TEXT_EVENT_MAGIC);
            for (var i = 0; i < data.text.length; i++) {
                view.setUint8(offset, data.text.charCodeAt(i));
                offset += 1;
            }
            break;
        default:
            throw new Error('Unknown protocol type');
    }
    return buffer;
}
function buildCustomEvent(type, data) {
    var payload = arrayBufferToStr(new Uint8Array(data));
    return {
        type: 221,
        customEvent: {
            type: type,
            payloadLen: data.byteLength,
            payload: payload
        }
    };
}
function arrayBufferToStr(uint8Array) {
    var binary = String.fromCharCode.apply(null, uint8Array);
    return window.btoa(binary);
}
/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
    // Fallback to nativeEvent.srcElement for IE9
    // https://github.com/facebook/react/issues/12506
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    // Normalize SVG <use> element events #4963
    if (target.correspondingUseElement) {
        target = target.correspondingUseElement;
    }
    // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
    // @see http://www.quirksmode.org/js/events_properties.html
    return target.nodeType === 3 ? target.parentNode : target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jmuxer_min = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t(require$$0);}(commonjsGlobal,(function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t);}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return f(this,n)}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,s=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(e){o=!0,i=e;}finally{try{a||null==n.return||n.return();}finally{if(o)throw i}}return s}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t){n&&(e=n);var r=0,i=function(){};return {s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return {s:function(){n=n.call(e);},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,s=e;},f:function(){try{a||null==n.return||n.return();}finally{if(o)throw s}}}}var v,m;function k(e){if(v){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];v.apply(void 0,[e].concat(n));}}function g(e){if(m){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];m.apply(void 0,[e].concat(n));}}var b=function(){function e(t){n(this,e),this.payload=t,this.nri=(96&this.payload[0])>>5,this.ntype=31&this.payload[0],this.isvcl=1==this.ntype||5==this.ntype,this.stype="",this.isfmb=!1;}return i(e,[{key:"toString",value:function(){return "".concat(e.type(this),": NRI: ").concat(this.getNri())}},{key:"getNri",value:function(){return this.nri}},{key:"type",value:function(){return this.ntype}},{key:"isKeyframe",value:function(){return this.ntype===e.IDR}},{key:"getPayload",value:function(){return this.payload}},{key:"getPayloadSize",value:function(){return this.payload.byteLength}},{key:"getSize",value:function(){return 4+this.getPayloadSize()}},{key:"getData",value:function(){var e=new Uint8Array(this.getSize());return new DataView(e.buffer).setUint32(0,this.getSize()-4),e.set(this.getPayload(),4),e}}],[{key:"NDR",get:function(){return 1}},{key:"IDR",get:function(){return 5}},{key:"SEI",get:function(){return 6}},{key:"SPS",get:function(){return 7}},{key:"PPS",get:function(){return 8}},{key:"AUD",get:function(){return 9}},{key:"TYPES",get:function(){var t;return s(t={},e.IDR,"IDR"),s(t,e.SEI,"SEI"),s(t,e.SPS,"SPS"),s(t,e.PPS,"PPS"),s(t,e.NDR,"NDR"),s(t,e.AUD,"AUD"),t}},{key:"type",value:function(t){return t.ntype in e.TYPES?e.TYPES[t.ntype]:"UNKNOWN"}}]),e}();function S(e,t){var n=new Uint8Array((0|e.byteLength)+(0|t.byteLength));return n.set(e,0),n.set(t,0|e.byteLength),n}var w=function(){function e(t){n(this,e),this.data=t,this.index=0,this.bitLength=8*t.byteLength;}return i(e,[{key:"setData",value:function(e){this.data=e,this.index=0,this.bitLength=8*e.byteLength;}},{key:"bitsAvailable",get:function(){return this.bitLength-this.index}},{key:"skipBits",value:function(e){if(this.bitsAvailable<e)return !1;this.index+=e;}},{key:"readBits",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.getBits(e,this.index,t);return n}},{key:"getBits",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.bitsAvailable<e)return 0;var r=t%8,i=this.data[t/8|0]&255>>>r,s=8-r;if(s>=e)return n&&(this.index+=e),i>>s-e;n&&(this.index+=s);var a=e-s;return i<<a|this.getBits(a,t+s,n)}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitLength-this.index;++e)if(0!==this.getBits(1,this.index+e,!1))return this.index+=e,e;return e}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ());}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ());}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.readBits(8*e)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}}]),e}(),x=function(){function e(t){n(this,e),this.remuxer=t,this.track=t.mp4track;}return i(e,[{key:"parseSPS",value:function(t){var n=e.readSPS(new Uint8Array(t));this.track.fps=n.fps,this.track.width=n.width,this.track.height=n.height,this.track.sps=[new Uint8Array(t)],this.track.codec="avc1.";for(var r=new DataView(t.buffer,t.byteOffset+1,4),i=0;i<3;++i){var s=r.getUint8(i).toString(16);s.length<2&&(s="0"+s),this.track.codec+=s;}}},{key:"parsePPS",value:function(e){this.track.pps=[new Uint8Array(e)];}},{key:"parseNAL",value:function(e){if(!e)return !1;var t=!1;switch(e.type()){case b.IDR:case b.NDR:t=!0;break;case b.PPS:this.track.pps||(this.parsePPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),t=!0;break;case b.SPS:this.track.sps||(this.parseSPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),t=!0;break;case b.AUD:k("AUD - ignoing");break;case b.SEI:k("SEI - ignoing");}return t}}],[{key:"extractNALu",value:function(e){for(var t,n,r=0,i=e.byteLength,s=0,a=[],o=0;r<i;)switch(t=e[r++],s){case 0:0===t&&(s=1);break;case 1:s=0===t?2:0;break;case 2:case 3:0===t?s=3:1===t&&r<i?(o!=r-s-1&&a.push(e.subarray(o,r-s-1)),o=r,s=0):s=0;}return o<i&&(n=e.subarray(o,i)),[a,n]}},{key:"skipScalingList",value:function(e,t){for(var n=8,r=8,i=0;i<t;i++)0!==r&&(r=(n+e.readEG()+256)%256),n=0===r?n:r;}},{key:"readSPS",value:function(t){var n,r,i,s,a,o,u=new w(t),c=0,f=0,l=0,h=0,d=1,y=0;u.readUByte();for(var p=[],v=t.byteLength,m=1;m<v;m++)m+2<v&&3===u.readBits(24,!1)?(p.push(u.readBits(8)),p.push(u.readBits(8)),m+=2,u.readBits(8)):p.push(u.readBits(8));if(u.setData(new Uint8Array(p)),n=u.readUByte(),u.readBits(5),u.skipBits(3),u.readUByte(),u.skipUEG(),100===n||110===n||122===n||244===n||44===n||83===n||86===n||118===n||128===n){var k=u.readUEG();if(3===k&&u.skipBits(1),u.skipUEG(),u.skipUEG(),u.skipBits(1),u.readBoolean()){o=3!==k?8:12;for(var g=0;g<o;++g)u.readBoolean()&&(g<6?e.skipScalingList(u,16):e.skipScalingList(u,64));}}u.skipUEG();var b=u.readUEG();if(0===b)u.readUEG();else if(1===b){u.skipBits(1),u.skipEG(),u.skipEG(),r=u.readUEG();for(var S=0;S<r;++S)u.skipEG();}if(u.skipUEG(),u.skipBits(1),i=u.readUEG(),s=u.readUEG(),0===(a=u.readBits(1))&&u.skipBits(1),u.skipBits(1),u.readBoolean()&&(c=u.readUEG(),f=u.readUEG(),l=u.readUEG(),h=u.readUEG()),u.readBoolean()){if(u.readBoolean()){var x;switch(u.readUByte()){case 1:x=[1,1];break;case 2:x=[12,11];break;case 3:x=[10,11];break;case 4:x=[16,11];break;case 5:x=[40,33];break;case 6:x=[24,11];break;case 7:x=[20,11];break;case 8:x=[32,11];break;case 9:x=[80,33];break;case 10:x=[18,11];break;case 11:x=[15,11];break;case 12:x=[64,33];break;case 13:x=[160,99];break;case 14:x=[4,3];break;case 15:x=[3,2];break;case 16:x=[2,1];break;case 255:x=[u.readUByte()<<8|u.readUByte(),u.readUByte()<<8|u.readUByte()];}x&&x[0]>0&&x[1]>0&&(d=x[0]/x[1]);}if(u.readBoolean()&&u.skipBits(1),u.readBoolean()&&(u.skipBits(4),u.readBoolean()&&u.skipBits(24)),u.readBoolean()&&(u.skipUEG(),u.skipUEG()),u.readBoolean()){var A=u.readUInt(),U=u.readUInt();u.readBoolean()&&(y=U/(2*A));}}return {fps:y>0?y:void 0,width:Math.ceil((16*(i+1)-2*c-2*f)*d),height:(2-a)*(s+1)*16-(a?2:4)*(l+h)}}},{key:"parseHeader",value:function(e){var t=new w(e.getPayload());t.readUByte(),e.isfmb=0===t.readUEG(),e.stype=t.readUEG();}}]),e}(),A=function(){function e(t){n(this,e),this.remuxer=t,this.track=t.mp4track;}return i(e,[{key:"extractAAC",value:function(t){var n,r,i=0,s=t.byteLength,a=[];if(!e.isAACPattern(t))return g("Invalid ADTS audio format"),a;for(n=e.getHeaderLength(t),this.aacHeader||(this.aacHeader=t.subarray(0,n));i<s;)r=e.getFrameLength(t),a.push(t.subarray(n,r)),t=t.slice(r),i+=r;return a}},{key:"setAACConfig",value:function(){var e,t,n,r=new Uint8Array(2),i=this.aacHeader;i&&(e=1+((192&i[2])>>>6),t=(60&i[2])>>>2,n=(1&i[2])<<2,n|=(192&i[3])>>>6,r[0]=e<<3,r[0]|=(14&t)>>1,r[1]|=(1&t)<<7,r[1]|=n<<3,this.track.codec="mp4a.40."+e,this.track.channelCount=n,this.track.config=r,this.remuxer.readyToDecode=!0);}}],[{key:"samplingRateMap",get:function(){return [96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350]}},{key:"getHeaderLength",value:function(e){return 1&e[1]?7:9}},{key:"getFrameLength",value:function(e){return (3&e[3])<<11|e[4]<<3|(224&e[5])>>>5}},{key:"isAACPattern",value:function(e){return 255===e[0]&&240==(240&e[1])&&0==(6&e[1])}}]),e}(),U=function(){function e(t){n(this,e),this.listener={},this.type=""|t;}return i(e,[{key:"on",value:function(e,t){return this.listener[e]||(this.listener[e]=[]),this.listener[e].push(t),!0}},{key:"off",value:function(e,t){if(this.listener[e]){var n=this.listener[e].indexOf(t);return n>-1&&this.listener[e].splice(n,1),!0}return !1}},{key:"offAll",value:function(){this.listener={};}},{key:"dispatch",value:function(e,t){return !!this.listener[e]&&(this.listener[e].map((function(e){e.apply(null,[t]);})),!0)}}]),e}(),B=function(){function e(){n(this,e);}return i(e,null,[{key:"init",value:function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var n=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:n,audio:r};var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=s,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var a=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),u=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,a,u,a,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,i));}},{key:"box",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i,s=8,a=n.length,o=a;a--;)s+=n[a].byteLength;for((i=new Uint8Array(s))[0]=s>>24&255,i[1]=s>>16&255,i[2]=s>>8&255,i[3]=255&s,i.set(e,4),a=0,s=8;a<o;++a)i.set(n[a],s),s+=n[a].byteLength;return i}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,n){return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return "audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))}},{key:"moof",value:function(t,n,r){return e.box(e.types.moof,e.mfhd(t),e.traf(r,n))}},{key:"moov",value:function(t,n,r){for(var i=t.length,s=[];i--;)s[i]=e.trak(t[i]);return e.box.apply(null,[e.types.moov,e.mvhd(r,n)].concat(s).concat(e.mvex(t)))}},{key:"mvex",value:function(t){for(var n=t.length,r=[];n--;)r[n]=e.trex(t[n]);return e.box.apply(null,[e.types.mvex].concat(r))}},{key:"mvhd",value:function(t,n){var r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,r)}},{key:"sdtp",value:function(t){var n,r,i=t.samples||[],s=new Uint8Array(4+i.length);for(r=0;r<i.length;r++)n=i[r].flags,s[r+4]=n.dependsOn<<4|n.isDependedOn<<2|n.hasRedundancy;return e.box(e.types.sdtp,s)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var n,r,i,s=[],a=[];for(n=0;n<t.sps.length;n++)i=(r=t.sps[n]).byteLength,s.push(i>>>8&255),s.push(255&i),s=s.concat(Array.prototype.slice.call(r));for(n=0;n<t.pps.length;n++)i=(r=t.pps[n]).byteLength,a.push(i>>>8&255),a.push(255&i),a=a.concat(Array.prototype.slice.call(r));var o=e.box(e.types.avcC,new Uint8Array([1,s[3],s[4],s[5],255,224|t.sps.length].concat(s).concat([t.pps.length]).concat(a))),u=t.width,c=t.height;return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,u>>8&255,255&u,c>>8&255,255&c,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,98,105,110,101,108,112,114,111,46,114,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(e){var t=e.config.byteLength,n=new Uint8Array(26+t+3);return n.set([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5,t]),n.set(e.config,26),n.set([6,1,2],26+t),n}},{key:"mp4a",value:function(t){var n=t.audiosamplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,n>>8&255,255&n,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"stsd",value:function(t){return "audio"===t.type?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var n=t.id,r=t.duration,i=t.width,s=t.height,a=t.volume;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>24&255,n>>16&255,n>>8&255,255&n,0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,0,0,0,0,0,0,0,0,0,a>>0&255,a%1*10>>0&255,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,255&i,0,0,s>>8&255,255&s,0,0]))}},{key:"traf",value:function(t,n){var r=e.sdtp(t),i=t.id;return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),e.box(e.types.tfdt,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),e.trun(t,r.length+16+16+8+16+8+8),r)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(t){var n=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(t,n){var r,i,s,a,o,u,c=t.samples||[],f=c.length,l=12+16*f,h=new Uint8Array(l);for(n+=8+l,h.set([0,0,15,1,f>>>24&255,f>>>16&255,f>>>8&255,255&f,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0),r=0;r<f;r++)s=(i=c[r]).duration,a=i.size,o=i.flags,u=i.cts,h.set([s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,u>>>24&255,u>>>16&255,u>>>8&255,255&u],12+16*r);return e.box(e.types.trun,h)}},{key:"initSegment",value:function(t,n,r){e.types||e.init();var i,s=e.moov(t,n,r);return (i=new Uint8Array(e.FTYP.byteLength+s.byteLength)).set(e.FTYP),i.set(s,e.FTYP.byteLength),i}}]),e}(),D=1,C=function(){function e(){n(this,e);}return i(e,[{key:"flush",value:function(){this.mp4track.len=0,this.mp4track.samples=[];}},{key:"isReady",value:function(){return !(!this.readyToDecode||!this.samples.length)||null}}],[{key:"getTrackID",value:function(){return D++}}]),e}(),E=function(e){a(r,e);var t=l(r);function r(e){var i;return n(this,r),(i=t.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:C.getTrackID(),type:"audio",channelCount:0,len:0,fragmented:!0,timescale:e,duration:e,samples:[],config:"",codec:""},i.samples=[],i.aac=new A(c(i)),i}return i(r,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.codec="",this.mp4track.channelCount="",this.mp4track.config="",this.mp4track.timescale=this.timescale,this.nextDts=0,this.dts=0;}},{key:"remux",value:function(e){if(e.length>0)for(var t=0;t<e.length;t++){var n=e[t],r=n.units,i=r.byteLength;this.samples.push({units:r,size:i,duration:n.duration}),this.mp4track.len+=i,this.readyToDecode||this.aac.setAACConfig();}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var e,t,n=new Uint8Array(this.mp4track.len),r=0,i=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var s=this.samples.shift();s.units,(t=s.duration)<=0?(k("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(t)),this.mp4track.len-=s.size):(this.nextDts+=t,e={size:s.size,duration:t,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},n.set(s.units,r),r+=s.size,i.push(e));}return i.length?new Uint8Array(n.buffer,0,this.mp4track.len):null}},{key:"getAacParser",value:function(){return this.aac}}]),r}(C),T=function(e){a(r,e);var t=l(r);function r(e){var i;return n(this,r),(i=t.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:C.getTrackID(),type:"video",len:0,fragmented:!0,sps:"",pps:"",fps:30,width:0,height:0,timescale:e,duration:e,samples:[]},i.samples=[],i.h264=new x(c(i)),i}return i(r,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.sps="",this.mp4track.pps="",this.nextDts=0,this.dts=0;}},{key:"remux",value:function(e){var t,n=p(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,s=[],a=0,o=p(i.units);try{for(o.s();!(r=o.n()).done;){var u=r.value;this.h264.parseNAL(u)&&(s.push(u),a+=u.getSize());}}catch(e){o.e(e);}finally{o.f();}s.length>0&&this.readyToDecode&&(this.mp4track.len+=a,this.samples.push({units:s,size:a,keyFrame:i.keyFrame,duration:i.duration,compositionTimeOffset:i.compositionTimeOffset}));}}catch(e){n.e(e);}finally{n.f();}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var e,t,n=new Uint8Array(this.mp4track.len),r=0,i=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var s=this.samples.shift(),a=s.units;if((t=s.duration)<=0)k("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(t)),this.mp4track.len-=s.size;else {this.nextDts+=t,e={size:s.size,duration:t,cts:s.compositionTimeOffset||0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,isNonSync:s.keyFrame?0:1,dependsOn:s.keyFrame?2:1}};var o,u=p(a);try{for(u.s();!(o=u.n()).done;){var c=o.value;n.set(c.getData(),r),r+=c.getSize();}}catch(e){u.e(e);}finally{u.f();}i.push(e);}}return i.length?new Uint8Array(n.buffer,0,this.mp4track.len):null}}]),r}(C),P=function(e){a(r,e);var t=l(r);function r(e){var i;return n(this,r),(i=t.call(this,"remuxer")).initialized=!1,i.trackTypes=[],i.tracks={},i.seq=1,i.env=e,i.timescale=1e3,i.mediaDuration=0,i.aacParser=null,i}return i(r,[{key:"addTrack",value:function(e){if("video"!==e&&"both"!==e||(this.tracks.video=new T(this.timescale),this.trackTypes.push("video")),"audio"===e||"both"===e){var t=new E(this.timescale);this.aacParser=t.getAacParser(),this.tracks.audio=t,this.trackTypes.push("audio");}}},{key:"reset",value:function(){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.tracks[n].resetTrack();}}catch(e){t.e(e);}finally{t.f();}this.initialized=!1;}},{key:"destroy",value:function(){this.tracks={},this.offAll();}},{key:"flush",value:function(){if(this.initialized){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=this.tracks[n],i=r.getPayload();if(i&&i.byteLength){var s={type:n,payload:S(B.moof(this.seq,r.dts,r.mp4track),B.mdat(i)),dts:r.dts};"video"===n&&(s.fps=r.mp4track.fps),this.dispatch("buffer",s);var a=(o=r.dts/this.timescale,u=void 0,c=void 0,f=void 0,l=void 0,l="",u=Math.floor(o),(c=parseInt(u/3600,10)%24)>0&&(l+=(c<10?"0"+c:c)+":"),l+=((f=parseInt(u/60,10)%60)<10?"0"+f:f)+":"+((u=u<0?0:u%60)<10?"0"+u:u));k("put segment (".concat(n,"): dts: ").concat(r.dts," frames: ").concat(r.mp4track.samples.length," second: ").concat(a)),r.flush(),this.seq++;}}}catch(e){t.e(e);}finally{t.f();}}else this.isReady()&&(this.dispatch("ready"),this.initSegment(),this.initialized=!0,this.flush());var o,u,c,f,l;}},{key:"initSegment",value:function(){var e,t=[],n=p(this.trackTypes);try{for(n.s();!(e=n.n()).done;){var r=e.value,i=this.tracks[r];if("browser"==this.env){var s={type:r,payload:B.initSegment([i.mp4track],this.mediaDuration,this.timescale)};this.dispatch("buffer",s);}else t.push(i.mp4track);}}catch(e){n.e(e);}finally{n.f();}if("node"==this.env){var a={type:"all",payload:B.initSegment(t,this.mediaDuration,this.timescale)};this.dispatch("buffer",a);}k("Initial segment generated.");}},{key:"isReady",value:function(){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(!this.tracks[n].readyToDecode||!this.tracks[n].samples.length)return !1}}catch(e){t.e(e);}finally{t.f();}return !0}},{key:"remux",value:function(e){var t,n=p(this.trackTypes);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=e[r];"audio"===r&&this.tracks.video&&!this.tracks.video.readyToDecode||i.length>0&&this.tracks[r].remux(i);}}catch(e){n.e(e);}finally{n.f();}this.flush();}}]),r}(U),L=function(e){a(r,e);var t=l(r);function r(e,i){var s;return n(this,r),(s=t.call(this,"buffer")).type=i,s.queue=new Uint8Array,s.cleaning=!1,s.pendingCleaning=0,s.cleanOffset=30,s.cleanRanges=[],s.sourceBuffer=e,s.sourceBuffer.addEventListener("updateend",(function(){s.pendingCleaning>0&&(s.initCleanup(s.pendingCleaning),s.pendingCleaning=0),s.cleaning=!1,s.cleanRanges.length&&s.doCleanup();})),s.sourceBuffer.addEventListener("error",(function(){s.dispatch("error",{type:s.type,name:"buffer",error:"buffer error"});})),s}return i(r,[{key:"destroy",value:function(){this.queue=null,this.sourceBuffer=null,this.offAll();}},{key:"doCleanup",value:function(){if(this.cleanRanges.length){var e=this.cleanRanges.shift();k("".concat(this.type," remove range [").concat(e[0]," - ").concat(e[1],")")),this.cleaning=!0,this.sourceBuffer.remove(e[0],e[1]);}else this.cleaning=!1;}},{key:"initCleanup",value:function(e){try{if(this.sourceBuffer.updating)return void(this.pendingCleaning=e);if(this.sourceBuffer.buffered&&this.sourceBuffer.buffered.length&&!this.cleaning){for(var t=0;t<this.sourceBuffer.buffered.length;++t){var n=this.sourceBuffer.buffered.start(t),r=this.sourceBuffer.buffered.end(t);e-n>this.cleanOffset&&n<(r=e-this.cleanOffset)&&this.cleanRanges.push([n,r]);}this.doCleanup();}}catch(e){g("Error occured while cleaning ".concat(this.type," buffer - ").concat(e.name,": ").concat(e.message));}}},{key:"doAppend",value:function(){if(this.queue.length&&this.sourceBuffer&&!this.sourceBuffer.updating)try{this.sourceBuffer.appendBuffer(this.queue),this.queue=new Uint8Array;}catch(t){var e="unexpectedError";"QuotaExceededError"===t.name?(k("".concat(this.type," buffer quota full")),e="QuotaExceeded"):(g("Error occured while appending ".concat(this.type," buffer - ").concat(t.name,": ").concat(t.message)),e="InvalidStateError"),this.dispatch("error",{type:this.type,name:e,error:"buffer error"});}}},{key:"feed",value:function(e){this.queue=S(this.queue,e);}}]),r}(U);return function(r){a(o,r);var s=l(o);function o(e){var r;n(this,o),(r=s.call(this,"jmuxer")).isReset=!1;return r.options=Object.assign({},{node:"",mode:"both",flushingTime:500,maxDelay:500,clearBuffer:!0,fps:30,readFpsFromTrack:!1,debug:!1,onReady:function(){},onError:function(){},onMissingVideoFrames:function(){},onMissingAudioFrames:function(){}},e),r.env="object"===("undefined"==typeof process?"undefined":t(process))&&"undefined"==typeof window?"node":"browser",r.options.debug&&(v=console.log,m=console.error),r.options.fps||(r.options.fps=30),r.frameDuration=1e3/r.options.fps|0,r.remuxController=new P(r.env),r.remuxController.addTrack(r.options.mode),r.initData(),r.remuxController.on("buffer",r.onBuffer.bind(c(r))),"browser"==r.env&&(r.remuxController.on("ready",r.createBuffer.bind(c(r))),r.initBrowser()),r}return i(o,[{key:"initData",value:function(){this.lastCleaningTime=Date.now(),this.kfPosition=[],this.kfCounter=0,this.pendingUnits={},this.remainingData=new Uint8Array,this.startInterval();}},{key:"initBrowser",value:function(){"string"==typeof this.options.node&&""==this.options.node&&g("no video element were found to render, provide a valid video element"),this.node="string"==typeof this.options.node?document.getElementById(this.options.node):this.options.node,this.mseReady=!1,this.setupMSE();}},{key:"createStream",value:function(){var t=this.feed.bind(this),n=this.destroy.bind(this);return this.stream=new e.Duplex({writableObjectMode:!0,read:function(e){},write:function(e,n,r){t(e),r();},final:function(e){n(),e();}}),this.stream}},{key:"setupMSE",value:function(){if(window.MediaSource=window.MediaSource||window.WebKitMediaSource,!window.MediaSource)throw "Oops! Browser does not support media source extension.";this.isMSESupported=!!window.MediaSource,this.mediaSource=new MediaSource,this.url=URL.createObjectURL(this.mediaSource),this.node.src=this.url,this.mseEnded=!1,this.mediaSource.addEventListener("sourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("sourceclose",this.onMSEClose.bind(this)),this.mediaSource.addEventListener("webkitsourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("webkitsourceclose",this.onMSEClose.bind(this));}},{key:"endMSE",value:function(){if(!this.mseEnded)try{this.mseEnded=!0,this.mediaSource.endOfStream();}catch(e){g("mediasource is not available to end");}}},{key:"feed",value:function(e){var t,n,r,i=!1,s={video:[],audio:[]};if(e&&this.remuxController){if(r=e.duration?parseInt(e.duration):0,e.video){e.video=S(this.remainingData,e.video);var a=h(x.extractNALu(e.video),2);if(t=a[0],n=a[1],this.remainingData=n||new Uint8Array,!(t.length>0))return g("Failed to extract any NAL units from video data:",n),void("function"==typeof this.options.onMissingVideoFrames&&this.options.onMissingVideoFrames.call(null,e));s.video=this.getVideoFrames(t,r,e.compositionTimeOffset),i=!0;}if(e.audio){if(!((t=this.remuxController.aacParser.extractAAC(e.audio)).length>0))return g("Failed to extract audio data from:",e.audio),void("function"==typeof this.options.onMissingAudioFrames&&this.options.onMissingAudioFrames.call(null,e));s.audio=this.getAudioFrames(t,r),i=!0;}i?this.remuxController.remux(s):g("Input object must have video and/or audio property. Make sure it is a valid typed array");}}},{key:"getVideoFrames",value:function(e,t,n){var r,i=this,s=[],a=[],o=0,u=!1,c=!1;this.pendingUnits.units&&(s=this.pendingUnits.units,c=this.pendingUnits.vcl,u=this.pendingUnits.keyFrame,this.pendingUnits={});var f,l=p(e);try{for(l.s();!(f=l.n()).done;){var h=f.value,d=new b(h);d.type()!==b.IDR&&d.type()!==b.NDR||x.parseHeader(d),s.length&&c&&(d.isfmb||!d.isvcl)&&(a.push({units:s,keyFrame:u}),s=[],u=!1,c=!1),s.push(d),u=u||d.isKeyframe(),c=c||d.isvcl;}}catch(e){l.e(e);}finally{l.f();}if(s.length)if(t)if(c)a.push({units:s,keyFrame:u});else {var y=a.length-1;y>=0&&(a[y].units=a[y].units.concat(s));}else this.pendingUnits={units:s,keyFrame:u,vcl:c};return r=t?t/a.length|0:this.frameDuration,o=t?t-r*a.length:0,a.map((function(e){e.duration=r,e.compositionTimeOffset=n,o>0&&(e.duration++,o--),i.kfCounter++,e.keyFrame&&i.options.clearBuffer&&i.kfPosition.push(i.kfCounter*r/1e3);})),k("jmuxer: No. of frames of the last chunk: ".concat(a.length)),a}},{key:"getAudioFrames",value:function(e,t){var n,r,i=[],s=0,a=p(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;i.push({units:o});}}catch(e){a.e(e);}finally{a.f();}return n=t?t/i.length|0:this.frameDuration,s=t?t-n*i.length:0,i.map((function(e){e.duration=n,s>0&&(e.duration++,s--);})),i}},{key:"destroy",value:function(){if(this.stopInterval(),this.stream&&(this.remuxController.flush(),this.stream.push(null),this.stream=null),this.remuxController&&(this.remuxController.destroy(),this.remuxController=null),this.bufferControllers){for(var e in this.bufferControllers)this.bufferControllers[e].destroy();this.bufferControllers=null,this.endMSE();}this.node=!1,this.mseReady=!1,this.videoStarted=!1,this.mediaSource=null;}},{key:"reset",value:function(){if(this.stopInterval(),this.isReset=!0,this.node.pause(),this.remuxController&&this.remuxController.reset(),this.bufferControllers){for(var e in this.bufferControllers)this.bufferControllers[e].destroy();this.bufferControllers=null,this.endMSE();}this.initData(),"browser"==this.env&&this.initBrowser(),k("JMuxer was reset");}},{key:"createBuffer",value:function(){if(this.mseReady&&this.remuxController&&this.remuxController.isReady()&&!this.bufferControllers)for(var e in this.bufferControllers={},this.remuxController.tracks){var t=this.remuxController.tracks[e];if(!o.isSupported("".concat(e,'/mp4; codecs="').concat(t.mp4track.codec,'"')))return g("Browser does not support codec"),!1;var n=this.mediaSource.addSourceBuffer("".concat(e,'/mp4; codecs="').concat(t.mp4track.codec,'"'));this.bufferControllers[e]=new L(n,e),this.bufferControllers[e].on("error",this.onBufferError.bind(this));}}},{key:"startInterval",value:function(){var e=this;this.interval=setInterval((function(){e.options.flushingTime?e.applyAndClearBuffer():e.bufferControllers&&e.cancelDelay();}),this.options.flushingTime||1e3);}},{key:"stopInterval",value:function(){this.interval&&clearInterval(this.interval);}},{key:"cancelDelay",value:function(){if(this.node.buffered&&this.node.buffered.length>0&&!this.node.seeking){var e=this.node.buffered.end(0);e-this.node.currentTime>this.options.maxDelay/1e3&&(console.log("delay"),this.node.currentTime=e-.001);}}},{key:"releaseBuffer",value:function(){for(var e in this.bufferControllers)this.bufferControllers[e].doAppend();}},{key:"applyAndClearBuffer",value:function(){this.bufferControllers&&(this.releaseBuffer(),this.clearBuffer());}},{key:"getSafeClearOffsetOfBuffer",value:function(e){for(var t,n="audio"===this.options.mode&&e||0,r=0;r<this.kfPosition.length&&!(this.kfPosition[r]>=e);r++)t=this.kfPosition[r];return t&&(this.kfPosition=this.kfPosition.filter((function(e){return e<t&&(n=e),e>=t}))),n}},{key:"clearBuffer",value:function(){if(this.options.clearBuffer&&Date.now()-this.lastCleaningTime>1e4){for(var e in this.bufferControllers){var t=this.getSafeClearOffsetOfBuffer(this.node.currentTime);this.bufferControllers[e].initCleanup(t);}this.lastCleaningTime=Date.now();}}},{key:"onBuffer",value:function(e){this.options.readFpsFromTrack&&void 0!==e.fps&&this.options.fps!=e.fps&&(this.options.fps=e.fps,this.frameDuration=Math.ceil(1e3/e.fps),k("JMuxer changed FPS to ".concat(e.fps," from track data"))),"browser"==this.env?this.bufferControllers&&this.bufferControllers[e.type]&&this.bufferControllers[e.type].feed(e.payload):this.stream&&this.stream.push(e.payload),0===this.options.flushingTime&&this.applyAndClearBuffer();}},{key:"onMSEOpen",value:function(){this.mseReady=!0,URL.revokeObjectURL(this.url),"function"==typeof this.options.onReady&&this.options.onReady.call(null,this.isReset);}},{key:"onMSEClose",value:function(){this.mseReady=!1,this.videoStarted=!1;}},{key:"onBufferError",value:function(e){if("QuotaExceeded"==e.name)return k("JMuxer cleaning ".concat(e.type," buffer due to QuotaExceeded error")),void this.bufferControllers[e.type].initCleanup(this.node.currentTime);"InvalidStateError"==e.name?(k("JMuxer is reseting due to InvalidStateError"),this.reset()):this.endMSE(),"function"==typeof this.options.onError&&this.options.onError.call(null,e);}}],[{key:"isSupported",value:function(e){return window.MediaSource&&window.MediaSource.isTypeSupported(e)}}]),o}(U)})); 
} (jmuxer_min));

var jmuxer_minExports = jmuxer_min.exports;
var Jmuxer = /*@__PURE__*/getDefaultExportFromCjs(jmuxer_minExports);

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

var eventEmiter = new EventEmitter();

var VideoMuxer = /** @class */ (function () {
    function VideoMuxer(options) {
        var _this = this;
        this.fps = 30;
        this.setVideoElementBound = function () {
            var parentWidth = _this.node.parentElement.offsetWidth;
            var parentHeight = _this.node.parentElement.offsetHeight;
            if (_this.rotateValue % 2 === 0) {
                _this.node.style.maxWidth = "".concat(parentWidth, "px");
                _this.node.style.maxHeight = "".concat(parentHeight, "px");
            }
            else {
                _this.node.style.maxWidth = "".concat(parentHeight, "px");
                _this.node.style.maxHeight = "".concat(parentWidth, "px");
            }
        };
        this.handleVideoEvent = function (e) {
            eventEmiter.emit(EEvent.VideoReady, e);
        };
        this.reset = function () {
            _this.muxer.reset();
        };
        var node = options.node, rotateValue = options.rotateValue, sendCommand = options.sendCommand, fps = options.fps;
        this.node = node;
        this.rotateValue = rotateValue;
        this.fps = fps;
        this.sendCommand = sendCommand;
        this.addListener();
        this.node.style.cursor = "url(".concat(cursorImg, "), auto");
    }
    VideoMuxer.prototype.addListener = function () {
        window.addEventListener('resize', this.setVideoElementBound);
        this.node.addEventListener('loadeddata', this.handleVideoEvent);
    };
    VideoMuxer.prototype.clean = function () {
        window.removeEventListener('resize', this.setVideoElementBound);
        this.node.removeEventListener('loadeddata', this.handleVideoEvent);
    };
    VideoMuxer.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.muxer = new Jmuxer({
                mode: 'video',
                node: _this.node,
                clearBuffer: true,
                debug: false,
                fps: _this.fps,
                flushingTime: 0,
                checkDelay: 5000,
                maxDelay: 1000,
                onReady: function (isReset) {
                    _this.muxer.mediaSource.duration = Number.POSITIVE_INFINITY;
                    if (isReset) ;
                    else {
                        resolve(true);
                    }
                },
                onError: function (error) {
                    console.error('video buffer related errors:', error);
                    _this.reset();
                },
                onMissingVideoFrames: function (error) {
                    console.error('missing video frames:', error);
                },
            });
        });
    };
    return VideoMuxer;
}());

var AudioMuxer = /** @class */ (function () {
    function AudioMuxer(options) {
        var node = options.node;
        this.node = node;
    }
    AudioMuxer.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.muxer = new Jmuxer({
                mode: 'audio',
                node: _this.node,
                clearBuffer: true,
                debug: false,
                fps: 44,
                flushingTime: 0,
                checkDelay: 2000,
                maxDelay: 500,
                onReady: function (isReset) {
                    if (!isReset) {
                        resolve(true);
                    }
                },
                onError: function (error) {
                    console.error(' audio buffer related errors:', error);
                },
                onMissingAudioFrames: function (error) {
                    console.error('missing audio frames:', error);
                },
            });
        });
    };
    AudioMuxer.prototype.play = function () {
        this.node.play();
    };
    AudioMuxer.prototype.mute = function (muted) {
        this.node.muted = muted;
    };
    return AudioMuxer;
}());

// tslint:disable:no-bitwise
var BitStream = /** @class */ (function () {
    function BitStream(data) {
        this.data = data;
        this.index = 0;
        this.bitLength = data.byteLength * 8;
    }
    Object.defineProperty(BitStream.prototype, "bitsAvailable", {
        get: function () {
            return this.bitLength - this.index;
        },
        enumerable: false,
        configurable: true
    });
    BitStream.prototype.skipBits = function (size) {
        // console.log(`  skip bits: size=${size}, ${this.index}.`);
        if (this.bitsAvailable < size) {
            throw new Error('no bytes available');
        }
        this.index += size;
    };
    BitStream.prototype.readBits = function (size) {
        // console.log(`  read bits: size=${size}, ${this.index}.`);
        var result = this.getBits(size, this.index);
        // console.log(`    read bits: result=${result}`);
        return result;
    };
    BitStream.prototype.getBits = function (size, offsetBits, moveIndex) {
        if (moveIndex === void 0) { moveIndex = true; }
        if (this.bitsAvailable < size) {
            throw new Error('no bytes available');
        }
        var offset = offsetBits % 8;
        var byte = this.data[(offsetBits / 8) | 0] & (0xff >>> offset);
        var bits = 8 - offset;
        if (bits >= size) {
            if (moveIndex) {
                this.index += size;
            }
            return byte >> (bits - size);
        }
        else {
            if (moveIndex) {
                this.index += bits;
            }
            var nextSize = size - bits;
            return (byte << nextSize) | this.getBits(nextSize, offsetBits + bits, moveIndex);
        }
    };
    BitStream.prototype.skipLZ = function () {
        var leadingZeroCount;
        for (leadingZeroCount = 0; leadingZeroCount < this.bitLength - this.index; ++leadingZeroCount) {
            if (0 !== this.getBits(1, this.index + leadingZeroCount, false)) {
                // console.log(`  skip LZ  : size=${leadingZeroCount}, ${this.index}.`);
                this.index += leadingZeroCount;
                return leadingZeroCount;
            }
        }
        return leadingZeroCount;
    };
    BitStream.prototype.skipUEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    BitStream.prototype.skipEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    BitStream.prototype.readUEG = function () {
        var prefix = this.skipLZ();
        return this.readBits(prefix + 1) - 1;
    };
    BitStream.prototype.readEG = function () {
        var value = this.readUEG();
        if (0x01 & value) {
            // the number is odd if the low order bit is set
            return (1 + value) >>> 1; // add 1 to make it even, and divide by 2
        }
        else {
            return -1 * (value >>> 1); // divide by two then make it negative
        }
    };
    BitStream.prototype.readBoolean = function () {
        return 1 === this.readBits(1);
    };
    BitStream.prototype.readUByte = function () {
        return this.readBits(8);
    };
    BitStream.prototype.readUShort = function () {
        return this.readBits(16);
    };
    BitStream.prototype.readUInt = function () {
        return this.readBits(32);
    };
    return BitStream;
}());

var H264Parser = /** @class */ (function () {
    function H264Parser() {
    }
    /**
     * Advance the ExpGolomb decoder past a scaling list. The scaling
     * list is optionally transmitted as part of a sequence parameter
     * set and is not relevant to transmuxing.
     * @param decoder {BitStream} exp golomb decoder
     * @param count {number} the number of entries in this scaling list
     * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
     */
    H264Parser.skipScalingList = function (decoder, count) {
        var lastScale = 8;
        var nextScale = 8;
        for (var j = 0; j < count; j++) {
            if (nextScale !== 0) {
                var deltaScale = decoder.readEG();
                nextScale = (lastScale + deltaScale + 256) % 256;
            }
            lastScale = (nextScale === 0) ? lastScale : nextScale;
        }
    };
    H264Parser.parseNALUType = function (messageData) {
        var headerByte = messageData[4];
        var naluType = headerByte & 0x1F;
        return naluType;
    };
    /**
     * Read a sequence parameter set and return some interesting video
     * properties. A sequence parameter set is the H264 metadata that
     * describes the properties of upcoming video frames.
     * @param data {Uint8Array} the bytes of a sequence parameter set
     * @return {object} an object with configuration parsed from the
     * sequence parameter set, including the dimensions of the
     * associated video frames.
     */
    H264Parser.readSPS = function (data) {
        var _a = this.parseSPS(data), pic_width_in_mbs_minus1 = _a.pic_width_in_mbs_minus1, frame_crop_left_offset = _a.frame_crop_left_offset, frame_crop_right_offset = _a.frame_crop_right_offset, frame_mbs_only_flag = _a.frame_mbs_only_flag, pic_height_in_map_units_minus1 = _a.pic_height_in_map_units_minus1, frame_crop_top_offset = _a.frame_crop_top_offset, frame_crop_bottom_offset = _a.frame_crop_bottom_offset, sar = _a.sar;
        var sarScale = sar[0] / sar[1];
        return {
            width: Math.ceil((((pic_width_in_mbs_minus1 + 1) * 16) - frame_crop_left_offset * 2 - frame_crop_right_offset * 2) * sarScale),
            height: ((2 - frame_mbs_only_flag) * (pic_height_in_map_units_minus1 + 1) * 16) -
                ((frame_mbs_only_flag ? 2 : 4) * (frame_crop_top_offset + frame_crop_bottom_offset)),
        };
    };
    H264Parser.parseSPS = function (data) {
        var decoder = new BitStream(data);
        var frame_crop_left_offset = 0;
        var frame_crop_right_offset = 0;
        var frame_crop_top_offset = 0;
        var frame_crop_bottom_offset = 0;
        decoder.readUByte();
        var profile_idc = decoder.readUByte();
        var constraint_set_flags = decoder.readUByte(); // constraint_set[0-5]_flag + reserved_zero_2bits u(2),
        var level_idc = decoder.readBits(8); // level_idc u(8)
        var seq_parameter_set_id = decoder.readUEG(); // seq_parameter_set_id
        // some profiles have more optional data we don't need
        if (profile_idc === 100 ||
            profile_idc === 110 ||
            profile_idc === 122 ||
            profile_idc === 244 ||
            profile_idc === 44 ||
            profile_idc === 83 ||
            profile_idc === 86 ||
            profile_idc === 118 ||
            profile_idc === 128 ||
            profile_idc === 138 ||
            profile_idc === 139 ||
            profile_idc === 134) {
            var chromaFormatIdc = decoder.readUEG();
            if (chromaFormatIdc === 3) {
                decoder.skipBits(1); // separate_colour_plane_flag
            }
            decoder.skipUEG(); // bit_depth_luma_minus8
            decoder.skipUEG(); // bit_depth_chroma_minus8
            decoder.skipBits(1); // qpprime_y_zero_transform_bypass_flag
            if (decoder.readBoolean()) { // seq_scaling_matrix_present_flag
                var scalingListCount = (chromaFormatIdc !== 3) ? 8 : 12;
                for (var i = 0; i < scalingListCount; ++i) {
                    if (decoder.readBoolean()) { // seq_scaling_list_present_flag[ i ]
                        if (i < 6) {
                            H264Parser.skipScalingList(decoder, 16);
                        }
                        else {
                            H264Parser.skipScalingList(decoder, 64);
                        }
                    }
                }
            }
        }
        decoder.skipUEG(); // log2_max_frame_num_minus4
        var picOrderCntType = decoder.readUEG();
        if (picOrderCntType === 0) {
            decoder.readUEG(); // log2_max_pic_order_cnt_lsb_minus4
        }
        else if (picOrderCntType === 1) {
            decoder.skipBits(1); // delta_pic_order_always_zero_flag
            decoder.skipEG(); // offset_for_non_ref_pic
            decoder.skipEG(); // offset_for_top_to_bottom_field
            var numRefFramesInPicOrderCntCycle = decoder.readUEG();
            for (var i = 0; i < numRefFramesInPicOrderCntCycle; ++i) {
                decoder.skipEG(); // offset_for_ref_frame[ i ]
            }
        }
        decoder.skipUEG(); // max_num_ref_frames
        decoder.skipBits(1); // gaps_in_frame_num_value_allowed_flag
        var pic_width_in_mbs_minus1 = decoder.readUEG();
        var pic_height_in_map_units_minus1 = decoder.readUEG();
        var frame_mbs_only_flag = decoder.readBits(1);
        if (frame_mbs_only_flag === 0) {
            decoder.skipBits(1); // mb_adaptive_frame_field_flag
        }
        decoder.skipBits(1); // direct_8x8_inference_flag
        if (decoder.readBoolean()) { // frame_cropping_flag
            frame_crop_left_offset = decoder.readUEG();
            frame_crop_right_offset = decoder.readUEG();
            frame_crop_top_offset = decoder.readUEG();
            frame_crop_bottom_offset = decoder.readUEG();
        }
        var vui_parameters_present_flag = decoder.readBoolean();
        var aspect_ratio_info_present_flag = false;
        var sar = [1, 1];
        if (vui_parameters_present_flag) {
            aspect_ratio_info_present_flag = decoder.readBoolean();
            if (aspect_ratio_info_present_flag) {
                var aspectRatioIdc = decoder.readUByte();
                switch (aspectRatioIdc) {
                    case 1:
                        sar = [1, 1];
                        break;
                    case 2:
                        sar = [12, 11];
                        break;
                    case 3:
                        sar = [10, 11];
                        break;
                    case 4:
                        sar = [16, 11];
                        break;
                    case 5:
                        sar = [40, 33];
                        break;
                    case 6:
                        sar = [24, 11];
                        break;
                    case 7:
                        sar = [20, 11];
                        break;
                    case 8:
                        sar = [32, 11];
                        break;
                    case 9:
                        sar = [80, 33];
                        break;
                    case 10:
                        sar = [18, 11];
                        break;
                    case 11:
                        sar = [15, 11];
                        break;
                    case 12:
                        sar = [64, 33];
                        break;
                    case 13:
                        sar = [160, 99];
                        break;
                    case 14:
                        sar = [4, 3];
                        break;
                    case 15:
                        sar = [3, 2];
                        break;
                    case 16:
                        sar = [2, 1];
                        break;
                    case 255: {
                        sar = [decoder.readUByte() << 8 | decoder.readUByte(), decoder.readUByte() << 8 | decoder.readUByte()];
                        break;
                    }
                    default: {
                        console.error("  H264: Unknown aspectRatioIdc=".concat(aspectRatioIdc));
                    }
                }
            }
            if (decoder.readBoolean()) {
                // overscan_info_present_flag
                decoder.skipBits(1); // overscan_appropriate_flag
            }
            if (decoder.readBoolean()) {
                // video_signal_type_present_flag
                decoder.skipBits(4); // video_format u(3) + video_full_range_flag (1)
                if (decoder.readBoolean()) {
                    // colour_description_present_flag
                    decoder.skipBits(24); // colour_primaries u(8) + transfer_characteristics u(8) + matrix_coefficients u(8)
                }
            }
            if (decoder.readBoolean()) {
                // chroma_loc_info_present_flag
                decoder.skipUEG(); // chroma_sample_loc_type_top_field
                decoder.skipUEG(); // chroma_sample_loc_type_bottom_field
            }
            if (decoder.readBoolean()) {
                if (decoder.bitsAvailable > 64) {
                    // timing_info_present_flag
                    var unitsInTick = decoder.readUInt(); // num_units_in_tick
                    var timeScale = decoder.readUInt(); // time_scale
                    var fixedFrameRate = decoder.readBoolean(); // fixed_frame_rate_flag
                    var frameDuration = timeScale / (2 * unitsInTick);
                    console.log("timescale: ".concat(timeScale, "; unitsInTick: ").concat(unitsInTick, "; ") +
                        "fixedFramerate: ".concat(fixedFrameRate, "; avgFrameDuration: ").concat(frameDuration));
                }
                else {
                    console.log("Truncated VUI (".concat(decoder.bitsAvailable, ")"));
                }
            }
        }
        return {
            profile_idc: profile_idc,
            constraint_set_flags: constraint_set_flags,
            level_idc: level_idc,
            seq_parameter_set_id: seq_parameter_set_id,
            pic_width_in_mbs_minus1: pic_width_in_mbs_minus1,
            pic_height_in_map_units_minus1: pic_height_in_map_units_minus1,
            frame_mbs_only_flag: frame_mbs_only_flag,
            frame_crop_left_offset: frame_crop_left_offset,
            frame_crop_right_offset: frame_crop_right_offset,
            frame_crop_top_offset: frame_crop_top_offset,
            frame_crop_bottom_offset: frame_crop_bottom_offset,
            sar: sar,
        };
    };
    return H264Parser;
}());

var Touch = /** @class */ (function () {
    function Touch(options) {
        var _this = this;
        this.hasBind = false;
        this.touchStart = false;
        this.isPc = false;
        this.rotateValue = ROTATE_MSG["0degrees"];
        this._pcMouseSpeedFactor = 1.0;
        this.exitPointerMethod = "esc";
        this._requestPointerLock = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (document.pointerLockElement) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, ((_a = this.pointerLockElement) === null || _a === void 0 ? void 0 : _a.requestPointerLock())];
                    case 1:
                        _c.sent();
                        this._addPointerLockEvent();
                        this.pointerLockElement.tabIndex = 1;
                        // focus需要元素设置有tabindex大于等于0的值
                        (_b = this.pointerLockElement) === null || _b === void 0 ? void 0 : _b.focus();
                        return [2 /*return*/];
                }
            });
        }); };
        this._watchLockChange = function () {
            if (!document.pointerLockElement) {
                // 1. 如果lock函数不存在，则不支持navigator.keyboard.lock, 无法支持Esc拦截，需要自主发送一个
                // 2. 即便lock函数存在，长按会导致pointerLock退出，无法再接收到keyUp时间也会异常，所以也需要再自助发送一个
                // 创建一个键盘事件对象
                if (_this.exitPointerMethod === "esc" && !document.fullscreenElement) {
                    // esc 退出补发事件，manual 退出不发事件。全屏状态下不发事件
                    var escKeyEvent = new KeyboardEvent("keydown", {
                        key: "Escape",
                        keyCode: 27, // 旧的属性，为了兼容性
                        code: "Escape",
                        which: 27, // 旧的属性，为了兼容性
                        bubbles: true, // 事件是否冒泡
                        cancelable: true, // 事件是否可以取消
                    });
                    _this._handlePointerLockKeyDown(escKeyEvent);
                    _this._handlePointerLockKeyUp(escKeyEvent);
                }
                _this._removePointerLockEvent();
            }
        };
        this._addPointerLockEvent = function () {
            document.addEventListener("pointerlockchange", _this._watchLockChange);
            // this.pointerLockElement.addEventListener(
            //     "click",
            //     this._requestPointerLock
            // );
            _this.pointerLockElement.addEventListener("mousedown", _this._handleLockedMouseDown);
            _this.pointerLockElement.addEventListener("mouseup", _this._handleLockedMouseUp);
            _this.pointerLockElement.addEventListener("mousemove", _this._handlePointerLockMovement);
            _this.pointerLockElement.addEventListener("keydown", _this._handlePointerLockKeyDown);
            _this.pointerLockElement.addEventListener("keyup", _this._handlePointerLockKeyUp);
            _this.pointerLockElement.addEventListener("wheel", _this._handlePointerLockMouseWheel, { passive: false });
        };
        this._removePointerLockEvent = function () {
            document.removeEventListener("pointerlockchange", _this._watchLockChange);
            _this.pointerLockElement.removeEventListener("mousedown", _this._handleLockedMouseDown);
            _this.pointerLockElement.removeEventListener("mouseup", _this._handleLockedMouseUp);
            _this.pointerLockElement.removeEventListener("mousemove", _this._handlePointerLockMovement);
            _this.pointerLockElement.removeEventListener("keydown", _this._handlePointerLockKeyDown);
            _this.pointerLockElement.removeEventListener("keyup", _this._handlePointerLockKeyDown);
            _this.pointerLockElement.removeEventListener("wheel", _this._handlePointerLockMouseWheel);
        };
        this._handleLockedMouseDown = function (ev, isUp) {
            var isLeft = ev.button === 0;
            var mouseBtnData = createProtocolData("mouseBtn", {
                isDown: !isUp,
                button: isLeft ? MOUSE_BUTTON_LEFT : MOUSE_BUTTON_RIGHT,
            });
            _this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseBtnData), true);
        };
        this._handleLockedMouseUp = function (ev) {
            _this._handleLockedMouseDown(ev, true);
        };
        this._handlePointerLockMovement = function (ev) {
            if (!document.pointerLockElement) {
                return;
            }
            var mouseMoveData = createProtocolData("mouseMove", {
                deltaX: ev.movementX * _this._pcMouseSpeedFactor,
                deltaY: ev.movementY * _this._pcMouseSpeedFactor,
            });
            _this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseMoveData), true);
        };
        this._handlePointerLockKeyDown = function (ev, isUp) {
            console.log('keydown');
            if (["Tab", "Meta", "Shift", "CapsLock"].includes(ev.key) ||
                ev.metaKey ||
                ev.shiftKey ||
                ev.altKey ||
                ev.ctrlKey) {
                ev.preventDefault();
            }
            if (ev.code === "CapsLock" && ev.shiftKey && ev.ctrlKey) {
                // 组合键退出pointerlock
                console.log("退出鼠标锁定,全屏");
                document.fullscreenElement && document.exitFullscreen();
                document.pointerLockElement && document.exitPointerLock();
                _this.exitPointerMethod = "manual";
                setTimeout(function () {
                    _this.exitPointerMethod = "esc";
                }, 1000);
            }
            var mouseMoveData = createProtocolData("keyboard", {
                isDown: !isUp,
                flags: 0,
                keyCode: ev.keyCode,
                modifiers: _this._calculateLockModifierStae(ev),
            });
            _this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseMoveData), true);
            return;
        };
        this._handlePointerLockKeyUp = function (ev) {
            _this._handlePointerLockKeyDown(ev, true);
        };
        this._handlePointerLockMouseWheel = function (ev) {
            ev.preventDefault();
            var mouseWheelData = createProtocolData("scroll", {
                scrollAmt1: -parseInt(ev.deltaY.toString()),
            });
            _this.sendCommand(buildCustomEvent(PcCustomEventType.Event, mouseWheelData), true);
        };
        this._calculateLockModifierStae = function (event) {
            var modifier = 0; // 初始化修饰键状态为0
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
        this.requestFullScreen = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pointerLockElement.requestFullscreen()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._requestPointerLock()];
                    case 2:
                        _a.sent();
                        navigator.keyboard && navigator.keyboard.lock();
                        this.node.controls = false;
                        return [2 /*return*/];
                }
            });
        }); };
        this.handleMousedown = function (e) {
            _this.touchStart = true;
            if (_this.isPc) {
                return;
            }
            // todo 支持多指
            var obj = __assign({ cmd: CMD.Touch, ptype: TOUCH.Start }, _this.calcPos(e));
            _this.sendCommand(obj);
        };
        this.handleMouseover = function (e) {
            if (!_this.touchStart)
                return;
            // todo 支持多指
            var obj = __assign({ cmd: CMD.Touch, ptype: TOUCH.Move }, _this.calcPos(e));
            _this.sendCommand(obj);
        };
        this.handleMouseup = function (e) {
            if (!_this.touchStart)
                return;
            _this.touchStart = false;
            // todo 支持多指
            var obj = __assign({ cmd: CMD.Touch, ptype: TOUCH.End }, _this.calcPos(e));
            _this.sendCommand(obj);
        };
        var node = options.node, rotateValue = options.rotateValue, sendCommand = options.sendCommand, isPc = options.isPc, mouseSensitivity = options.mouseSensitivity;
        this.node = node;
        this.rotateValue = rotateValue;
        this.isPc = isPc;
        this._pcMouseSpeedFactor = mouseSensitivity || 1.0;
        this.sendCommand = sendCommand;
        this.addListener();
        this.addStyle();
    }
    Touch.prototype.addStyle = function () {
        // 创建一个新的 <style> 标签
        var style = document.createElement('style');
        style.textContent = "\n                video::-webkit-media-controls {\n                    display: none !important;\n                }\n            ";
        // 将 <style> 标签添加到 <head> 中
        document.head.appendChild(style);
    };
    Touch.prototype.addListener = function () {
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
    };
    Touch.prototype.setMouseSensitivity = function (value) {
        this._pcMouseSpeedFactor = value;
    };
    Touch.prototype.calcPos = function (e) {
        var rect = this.node.getBoundingClientRect();
        var width = this.node.offsetWidth;
        var height = this.node.offsetHeight;
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        switch (this.rotateValue % 4) {
            case 1:
                var temp = y;
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
        return { x: x, y: y };
    };
    Touch.prototype.start = function () {
        if (this.hasBind)
            return;
        this.addListener();
    };
    Touch.prototype.clean = function () {
        this.node.removeEventListener("mousedown", this.handleMousedown);
        document.removeEventListener("mousemove", this.handleMouseover);
        document.removeEventListener("mouseup", this.handleMouseup);
        this._removePointerLockEvent();
        this.hasBind = false;
    };
    return Touch;
}());

var KeyBoard = /** @class */ (function () {
    function KeyBoard(options) {
        var _this = this;
        this.hasBind = false;
        this.handleKeydown = function (e) {
            if (NoKeyPressEventCode.includes(e.keyCode)) {
                _this.send(e);
            }
        };
        this.handleKeypress = function (e) {
            _this.send(e);
        };
        var sendCommand = options.sendCommand;
        this.sendCommand = sendCommand;
        this.addListener();
    }
    KeyBoard.prototype.addListener = function () {
        window.addEventListener("keydown", this.handleKeydown); // 响应不会触发keypress 的修饰键 如Backspace、
        window.addEventListener("keypress", this.handleKeypress); // 响应正常的键盘输入
        // todo 监听剪切板事件并实现ctrl+v 输入
        this.hasBind = true;
    };
    KeyBoard.prototype.send = function (e) {
        var tagName = getEventTarget(e).tagName;
        if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT')
            return; // 表单输入时，停止发送事件
        this.sendCommand({
            cmd: CMD.KeyboardInput,
            key_code: e.keyCode,
        });
    };
    KeyBoard.prototype.start = function () {
        if (this.hasBind)
            return;
        this.addListener();
    };
    KeyBoard.prototype.clean = function () {
        window.removeEventListener("keydown", this.handleKeydown);
        window.removeEventListener("keypress", this.handleKeypress);
        this.hasBind = false;
    };
    return KeyBoard;
}());

var MsePlayer = /** @class */ (function () {
    function MsePlayer(options) {
        var _this = this;
        this.mode = "video";
        this.fps = 30;
        this.muxerQuene = [];
        this._rotateValue = ROTATE_MSG["0degrees"];
        this.startRecording = false;
        this.h264Data = [];
        this.disableAutoRotate = false;
        this.event = eventEmiter;
        this.lastCalc = 0;
        this.frameCount = 0;
        this.bytesReceived = 0;
        this.isPc = false;
        this.mouseSensitivity = 1.0;
        this.sendCommand = function (data, isPc) {
            if (isPc === void 0) { isPc = false; }
            if (isPc) {
                var msg = JSON.stringify({
                    device_id: _this.deviceId,
                    test_id_str: _this.testId,
                    controlkey: _this.controlKey,
                    adminkey: _this.adminKey,
                    video_config: _this.mode === "image" ? '{"video_mode": 2}' : "",
                    cmd: "bridgecmd",
                    content: "@proxy:ctrl:conn:".concat(JSON.stringify(data))
                });
                _this.socket.send(msg);
                return;
            }
            _this.socket.send(JSON.stringify(Object.assign(data, {
                device_id: _this.deviceId,
                test_id_str: _this.testId,
                controlkey: _this.controlKey,
                adminkey: _this.adminKey,
                video_config: _this.mode === "image" ? '{"video_mode": 2}' : "",
            })));
        };
        this.requestFullScreen = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.touchpad.requestFullScreen();
                return [2 /*return*/];
            });
        }); };
        this.setMouseSensitivity = function (value) {
            _this.touchpad.setMouseSensitivity(value);
        };
        this.rotate = function (rotateValue) {
            if (_this.isPc)
                return;
            if (typeof rotateValue !== 'number') {
                _this.rotateValue++;
            }
            else {
                _this.rotateValue = rotateValue;
            }
            _this.videoElement.style.transform = "rotate(".concat(_this.rotateValue * -90, "deg)");
            _this.video.setVideoElementBound();
        };
        this.onSocketOpen = function (event) {
            console.log("websocket open");
            eventEmiter.emit(EEvent.SocketOpen, event);
            // 心跳逻辑
            _this.socketHeartBeat = setInterval(function () {
                _this.sendCommand({
                    cmd: CMD.Heart,
                    heart: 1,
                });
            }, 30000);
            _this.sendCommand({
                cmd: CMD.StartStream,
            });
            _this.socketCalcInterval = setInterval(function () {
                _this.prevSendDelayRequestTime = Date.now();
                _this.sendCommand({
                    cmd: CMD.CalcDelay,
                    web_req_time: _this.prevSendDelayRequestTime,
                });
            }, 2000);
        };
        this.calcFpsAndBytes = function (messageData) {
            var now = Date.now();
            _this.frameCount++;
            _this.bytesReceived += messageData.byteLength;
            if (_this.lastCalc === 0) {
                _this.lastCalc = now;
            }
            else if (now - _this.lastCalc > 1000) {
                var result = {
                    fps: Math.ceil((_this.frameCount * 1000) / (now - _this.lastCalc)),
                    netSpeed: ((_this.bytesReceived * 1000) / (1024 * (now - _this.lastCalc))).toFixed(2),
                };
                eventEmiter.emit(EEvent.VideoInfo, result);
                _this.frameCount = 0;
                _this.bytesReceived = 0;
                _this.lastCalc = now;
            }
        };
        this._hasScreenInfoChange = function (newInfo) {
            var _a;
            return ((_a = _this._screenInfo) === null || _a === void 0 ? void 0 : _a.width) != newInfo.width || _this._screenInfo.height != newInfo.height;
        };
        this._updateScreenInfo = function (info) {
            _this._screenInfo = info;
        };
        this.onSocketMessage = function (event) {
            var _a, _b;
            eventEmiter.emit(EEvent.SocketMessage, event);
            var messageData = new Uint8Array(event.data);
            switch (messageData[0]) {
                case MSG.H264:
                    _this.calcFpsAndBytes(messageData);
                    var naluType = H264Parser.parseNALUType(messageData);
                    if (naluType === 7) {
                        var _c = H264Parser.readSPS(messageData.slice(4)), width = _c.width, height = _c.height;
                        var newInfo = {
                            width: width,
                            height: height
                        };
                        if (!_this._screenInfo) {
                            _this._updateScreenInfo(newInfo);
                        }
                        if (_this._hasScreenInfoChange(newInfo)) {
                            console.log("MSE Player receive new SPS NALU");
                            _this.video.muxer.reset();
                            _this._updateScreenInfo(newInfo);
                        }
                    }
                    _this.video.muxer.feed({
                        video: messageData,
                    });
                    if (_this.startRecording) {
                        _this.h264Data.push(messageData);
                    }
                    _this.videoElement.play();
                    break;
                case MSG.AAC:
                    (_b = (_a = _this.audio) === null || _a === void 0 ? void 0 : _a.muxer) === null || _b === void 0 ? void 0 : _b.feed({
                        audio: messageData,
                    });
                    break;
                case MSG.Rotate:
                    if (_this.disableAutoRotate)
                        break; // 安卓14及 以上不做自动旋转
                    console.log('rotate', messageData[4]);
                    _this.rotate(messageData[4]);
                    break;
                case MSG.Screenshot:
                    console.log('capture');
                    var dataView = new DataView(messageData.buffer, 1, 8);
                    var jpgTimeStr = dataView.getUint32(0) * 1000;
                    var jpgLen = dataView.getUint32(4);
                    var blobData = new Blob([new Uint8Array(messageData.buffer, 9, jpgLen)], { type: 'image/jpeg' });
                    var jpgUrl = URL.createObjectURL(blobData);
                    eventEmiter.emit(EEvent.Capture, {
                        url: jpgUrl,
                        time: new Date(jpgTimeStr)
                    });
                    break;
                case MSG.DelayData:
                    var now = Date.now();
                    // if (now - this.lastRefresh < 2000){
                    //     return;
                    // }
                    // {
                    //     "web_req_time": 1732693841357,
                    //     "webvideo_req_time": 1732693841461,
                    //     "videosvr_req_time": 1732693841461,
                    //     "pc_req_time": 1732693841425,
                    //     "videosvr_resp_time": 1732693841495,
                    //     "webvideo_resp_time": 1732693841496
                    // }
                    // web => webvideosvr => videosvr => pc(phone)
                    var msg = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(messageData.slice(1))));
                    if (msg.web_req_time !== _this.prevSendDelayRequestTime) {
                        return;
                    }
                    var web_video_to_pc = (msg.webvideo_resp_time - msg.webvideo_req_time) / 2;
                    var video_to_pc = (msg.videosvr_resp_time - msg.videosvr_req_time) / 2;
                    var total = (now - msg.web_req_time) / 2;
                    var web_video_to_video = web_video_to_pc - video_to_pc;
                    var user_to_web_video = total - web_video_to_pc;
                    eventEmiter.emit(EEvent.DelayData, {
                        total: total,
                        user_to_web_video: user_to_web_video,
                        web_video_to_video: web_video_to_video,
                        video_to_pc: video_to_pc
                    });
                    break;
                case MSG.Clipboard:
                    console.log('get clipboard');
                    var data = messageData.slice(1);
                    var text = new TextDecoder('utf-8').decode(new Uint8Array(data));
                    eventEmiter.emit(EEvent.Clipboard, text);
                    break;
                case MSG.FileUploadVal:
                    console.log('get fileUpload Val');
                    var data1 = messageData.slice(1);
                    var text1 = new TextDecoder('utf-8').decode(new Uint8Array(data1));
                    eventEmiter.emit(EEvent.FileUploadVal, text1);
                    break;
                case MSG.ImageStream:
                    _this.calcFpsAndBytes(messageData);
                    if (messageData[1] === 0) ;
                    else { // bridge cmd responese
                        console.log('get cmd response');
                        var data2 = messageData.slice(1);
                        var text2 = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(data2)));
                        eventEmiter.emit(EEvent.BridgeCMD, text2);
                    }
                    break;
            }
        };
        this.onSocketError = function (e) {
            console.error("websocket error", e);
            eventEmiter.emit(EEvent.SocketError, e);
            _this.socketHeartBeat && clearInterval(_this.socketHeartBeat);
            _this.socketCalcInterval && clearInterval(_this.socketCalcInterval);
        };
        this.onSocketClose = function (e) {
            console.error("websocket close", e);
            eventEmiter.emit(EEvent.SocketClose, e);
            _this.socketHeartBeat && clearInterval(_this.socketHeartBeat);
            _this.socketCalcInterval && clearInterval(_this.socketCalcInterval);
        };
        this.initOption(options);
        this.initVideo();
        this.initAudio();
        this.initWebSocket();
    }
    Object.defineProperty(MsePlayer.prototype, "rotateValue", {
        get: function () {
            return this._rotateValue;
        },
        set: function (value) {
            this._rotateValue = value % 4;
            // 通过set 来实现 rotateValue 在其他class 中的状态同步
            this.video.rotateValue = this._rotateValue;
            this.touchpad.rotateValue = this._rotateValue;
            eventEmiter.emit(EEvent.Rotate, this._rotateValue);
        },
        enumerable: false,
        configurable: true
    });
    MsePlayer.prototype.initOption = function (options) {
        var wsAddress = options.wsAddress, videoElement = options.videoElement, audioElement = options.audioElement, deviceId = options.deviceId, testId = options.testId, controlKey = options.controlKey, adminKey = options.adminKey, mode = options.mode, disableAutoRotate = options.disableAutoRotate, fps = options.fps, isPc = options.isPc, mouseSensitivity = options.mouseSensitivity;
        this.wsAddress = wsAddress;
        this.videoElement = videoElement;
        this.audioElement = audioElement;
        this.deviceId = deviceId;
        this.testId = testId;
        this.controlKey = controlKey;
        this.adminKey = adminKey;
        this.mode = mode;
        this.disableAutoRotate = disableAutoRotate;
        this.fps = fps;
        this.isPc = isPc;
        this.mouseSensitivity = mouseSensitivity;
        if (isPc) {
            this.fps = 60;
        }
        this.checkOptions();
    };
    MsePlayer.prototype.checkOptions = function () {
        if (!(this.videoElement instanceof HTMLVideoElement ||
            this.videoElement instanceof HTMLImageElement)) {
            throw new Error("请传入正确的videoElement");
        }
        // todo  其他必填参数的检测
    };
    MsePlayer.prototype.initVideo = function () {
        this.initTouch();
        this.initKeyboard();
        if (this.mode === "image") {
            // todo 图片流
            return;
        }
        this.video = new VideoMuxer({
            node: this.videoElement,
            rotateValue: this.rotateValue,
            sendCommand: this.sendCommand,
            fps: this.fps
        });
        this.muxerQuene.push(this.video.init());
    };
    MsePlayer.prototype.initAudio = function () {
        if (!(this.audioElement instanceof HTMLAudioElement))
            return;
        if (isSafari()) {
            console.error("safari 不支持audio");
            return;
        }
        this.audio = new AudioMuxer({
            node: this.audioElement,
        });
        this.muxerQuene.push(this.audio.init());
    };
    MsePlayer.prototype.initWebSocket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(this.muxerQuene)];
                    case 1:
                        _a.sent();
                        this.socket = new WebSocket(this.wsAddress);
                        this.socket.binaryType = "arraybuffer";
                        this.socket.addEventListener("open", this.onSocketOpen);
                        this.socket.addEventListener("message", this.onSocketMessage);
                        this.socket.addEventListener("error", this.onSocketError);
                        this.socket.addEventListener("close", this.onSocketClose);
                        return [3 /*break*/, 3];
                    case 2:
                        _a.sent();
                        console.error("muxer 初始化失败");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MsePlayer.prototype.initTouch = function () {
        this.touchpad = new Touch({
            node: this.videoElement,
            rotateValue: this.rotateValue,
            sendCommand: this.sendCommand,
            isPc: this.isPc,
            mouseSensitivity: this.mouseSensitivity
        });
    };
    MsePlayer.prototype.initKeyboard = function () {
        this.keyboard = new KeyBoard({
            sendCommand: this.sendCommand,
        });
    };
    MsePlayer.prototype.reset = function () {
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
        this.socketCalcInterval && clearInterval(this.socketCalcInterval);
        this.video.clean();
        this.touchpad.clean();
        this.keyboard.clean();
        this.socket.removeEventListener("open", this.onSocketOpen);
        this.socket.removeEventListener("message", this.onSocketMessage);
        this.socket.removeEventListener("error", this.onSocketError);
        this.socket.removeEventListener("close", this.onSocketClose);
        eventEmiter.removeAllListeners();
    };
    return MsePlayer;
}());

export { _enum as Enum, MsePlayer };
//# sourceMappingURL=bundle.esm.js.map
