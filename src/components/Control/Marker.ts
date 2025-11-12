/*
 * @Author: hdh
 * @Date: 2023-03-31 09:02:49
 * @Description: marker
 * @FilePath: /zl-g/src/components/Control/Marker.ts
 */
import { Marker } from '@antv/l7';
import { IMarker } from '../../Type/types';
class MarkerPoint {
  private scene: any;
  private marker: any;
  constructor(scene: any, options: IMarker = {}) {
    this.scene = scene;
    const marker = new Marker(options);
    this.marker = marker;
  }
  //   添加marker
  add = () => {
    if (!this.marker.getLnglat()) {
      throw new Error('请先设置经纬度');
    }
    this.scene.addMarker(this.marker);
    return this;
  };
  //   设置marker的经纬度
  setLngLat = (lnglat: Array<number>) => {
    if (!this.marker) return;
    if (!lnglat || lnglat.length <= 0) {
      throw new Error('请传入经纬度');
    }
    this.marker.setLnglat(lnglat);
    return this;
  };
  //   移除marker
  remove = () => {
    this.marker.remove();
    return this;
  };
  //   设置marker的dom
  setElement = (el: HTMLElement) => {
    this.marker.setElement(el);
    return this;
  };
  setPopup = (popup: any) => {};
  switchPopup = (popup: any) => {};
  setExData = (data: any): void => {};
  getExData = (): any => {};
}

export default MarkerPoint;
