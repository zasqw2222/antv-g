/*
 * @Author: hdh
 * @Date: 2023-03-30 13:13:47
 * @Description: 定位控件
 * @FilePath: /zl-g/src/components/Control/Locate.ts
 */
import { GeoLocate } from '@antv/l7';
import { IControlLocate, position } from '../../Type/types';
// import { locateOptions } from '../../option';
class Locate {
  private __scene: any;
  private __locate: any;
  public position: position;
  constructor(scene: any, options: IControlLocate) {
    this.position = 'topright';
    const _option = { ...options };
    this.__locate = new GeoLocate(_option);
    this.__scene = scene;
  }
  public setPosition = (position: position) => {
    this.__locate.setOptions({ position });
    return this;
  };
  // 添加定位控件
  public add = () => {
    this.__scene.addControl(this.__locate);
    return this;
  };
  // 移除定位控件
  public remove = () => {
    this.__locate.remove();
    return this;
  };
  //   显示定位控件
  public show = () => {
    this.__locate.show();
    return this;
  };
  //   隐藏定位控件
  public hide = () => {
    this.__locate.hide();
    return this;
  };
  //   获取当前经纬度
  public get = async () => {
    return await this.__locate.getGeoLocation();
  };
}

export default Locate;
