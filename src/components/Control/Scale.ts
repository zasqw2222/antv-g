/*
 * @Author: hdh
 * @Date: 2023-03-30 10:53:24
 * @Description: 比例尺控件
 * @FilePath: /zl-g/src/components/Control/Scale.ts
 */
import { Scale } from '@antv/l7';
import { IControlScale } from '../../Type/types';
import { Position } from '../../Type/control';
class ScaleControl {
  private __scene: any;
  private __scale: any;
  position: Position;
  options: IControlScale;
  constructor(scene: any, options: IControlScale) {
    this.__scene = scene;
    this.options = options;
    this.position = 'topright';
  }
  // 添加scale控件
  public add = () => {
    const _options = { ...this.options, ...{ position: this.position } };
    this.__scale = new Scale(_options);

    this.__scene.addControl(this.__scale);
    return this;
  };
  // 移除scale控件
  public remove = () => {
    this.__scale.remove();
    return this;
  };
  // 显示scale控件
  public show = () => {
    this.__scale.show();
    return this;
  };
  //   隐藏scale控件
  public hide = () => {
    this.__scale.hide();
    return this;
  };
  public setPosition = (position: Position) => {
    if (!position) return;
    this.position = position;
    return this;
  };
  //   todo 状态监控添加
}

export default ScaleControl;
