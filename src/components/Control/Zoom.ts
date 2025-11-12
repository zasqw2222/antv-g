/*
 * @Author: your name
 * @Date: 2023-03-30 09:57:51
 * @Description:
 * @FilePath: /zl-g/src/components/Control/Zoom.ts
 */
import { Zoom } from '@antv/l7';
import { IControlZoom } from '../../Type/types';

class ZoomControl {
  private __scene: any;
  private __zoom: any;
  constructor(scene: any, options: IControlZoom) {
    this.__scene = scene;
    this.__zoom = new Zoom(options);
  }
  // 添加zoom控件
  public add = () => {
    this.__scene.addControl(this.__zoom);
    return this;
  };
  // 移除zoom控件
  public remove = () => {
    this.__zoom.remove();
    return this;
  };
  // 显示zoom控件
  public show = () => {
    this.__zoom.show();
    return this;
  };
  //   隐藏zoom控件
  public hide = () => {
    this.__zoom.hide();
    return this;
  };
  // 获取zoomIndex
  public get = () => {
    return this.__scene.getZoom();
    return this;
  };
  //   设置zoomIndex
  public set = (zoom: number) => {
    this.__scene.setZoom(zoom);
    return this;
  };
  //   zoom 放大一级
  public in = () => {
    this.__scene.zoomIn();
    return this;
  };
  //   zoom 缩小一级
  public out = () => {
    this.__scene.zoomOut();
    return this;
  };
  //   todo 状态监控添加
}

export default ZoomControl;
