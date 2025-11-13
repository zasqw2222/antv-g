/*
 * @Author: zasqw2222
 * @Date: 2023-03-30 11:19:10
 * @Description: 全屏控件
 * @FilePath: /antv-g/src/components/Control/FullScreen.ts
 */
import { Fullscreen } from '@antv/l7';
import { IControlFullScreen } from '../../Type/types';
import { Position } from '../../Type/control';

class Full {
  private __scene: any;
  private __full: any;
  position: Position;
  constructor(scene: any) {
    this.__scene = scene;
    this.position = 'topright';
  }
  // 添加全屏控件
  public add = (options: IControlFullScreen = {}) => {
    const _options = { ...options, ...{ position: this.position } };
    const full = new Fullscreen(_options);
    this.__scene.addControl(full);
    this.__full = full;
    return this;
  };
  // 移除全屏控件
  public remove = () => {
    this.__full.remove();
    return this;
  };
  // 展示全屏控件
  public show = () => {
    this.__full.show();
    return this;
  };
  // 隐藏全屏控件
  public hide = () => {
    this.__full.hide();
    return this;
  };
  // 设置全屏控件位置
  public setPosition = (position: Position) => {
    if (!position) return;
    this.position = position;
    return this;
  };
}

export default Full;
