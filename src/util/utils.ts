import { PcCustomEventType } from './enum';
import {
    MOUSE_BUTTON_DOWN_EVENT_MAGIC_GEN5,
    MOUSE_BUTTON_UP_EVENT_MAGIC_GEN5,
    MOUSE_MOVE_REL_MAGIC_GEN5,
    SCROLL_MAGIC_GEN5,
    KEY_DOWN_EVENT_MAGIC,
    KEY_UP_EVENT_MAGIC,
    UTF8_TEXT_EVENT_MAGIC
} from './const';
export const isSafari = () => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
} 


export function createProtocolData(type: string, data: any) {
  let buffer: ArrayBuffer = new ArrayBuffer(0);
  let view: DataView = new DataView(buffer);
  let offset = 0;

  function writeHeader(size: number, magicCode: any) {
      buffer = new ArrayBuffer(size);
      view = new DataView(buffer);
      view.setUint32(offset, size - 8, false); // size (Big Endian)
      offset += 4;
      view.setUint32(offset, magicCode, true); // magic_code (Little Endian)
      offset += 4;
      return view
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
          for (let i = 0; i < data.text.length; i++) {
              view.setUint8(offset, data.text.charCodeAt(i));
              offset += 1;
          }
          break;
      default:
          throw new Error('Unknown protocol type');
  }

  return buffer;
}

export function buildCustomEvent(type: PcCustomEventType, data: ArrayBuffer) {
  const payload = arrayBufferToStr(new Uint8Array(data));
  return {
    type: 221,
    customEvent: {
      type,
      payloadLen: data.byteLength,
      payload
    }
  }
}

export function arrayBufferToStr(uint8Array: any) {
  const binary = String.fromCharCode.apply(null, uint8Array);
  return window.btoa(binary); 
}

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
export function getEventTarget(nativeEvent) {
    // Fallback to nativeEvent.srcElement for IE9
    // https://github.com/facebook/react/issues/12506
    let target = nativeEvent.target || nativeEvent.srcElement || window;

    // Normalize SVG <use> element events #4963
    if (target.correspondingUseElement) {
        target = target.correspondingUseElement;
    }

    // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
    // @see http://www.quirksmode.org/js/events_properties.html
    return target.nodeType === 3 ? target.parentNode : target;
}

