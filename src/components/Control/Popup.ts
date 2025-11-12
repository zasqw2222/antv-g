/*
 * @Author: hdh
 * @Date: 2023-03-30 15:14:27
 * @Description: tip空间
 * @FilePath: /zl-g/src/components/Control/Popup.ts
 */
import { Popup } from '@antv/l7';
import { TlngLat, ElementType, IPopup } from '../../Type/types';
import { popupOptions } from '../../option';

class Tip {
  private __scene: any;
  private __popup: any;
  constructor(scene: any, options: IPopup = {}) {
    this.__scene = scene;
    const _options = { ...popupOptions, ...options };
    this.__popup = new Popup(_options);
    return this;
  }
  setLngLat = (position: TlngLat) => {
    if (!position) {
      throw new Error('请传入经纬度_Tip');
    }
    this.__popup.setLngLat(position);
    return this;
  };
  setTitle = (title: ElementType = 'title') => {
    this.__popup.setTitle(title);
    return this;
  };
  setText = (text: string = 'text') => {
    this.__popup.setText(text);
    return this;
  };
  setHtml = (html: ElementType = 'html') => {
    this.__popup.setHtml(html);
    return this;
  };
 
  add = () => {
    // const lnglat = this.__popup.getLnglat();
    // if (lnglat.lng === 0 && lnglat.lat === 0) {
    //   throw new Error('请传入经纬度_Tip_add');
    // }
    this.__scene.addPopup(this.__popup);
    return this;
  };
  remove = () => {
    this.__popup.remove();
    return this;
  };
}

export default Tip;
