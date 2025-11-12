/*
 * @Author: hdh
 * @Date: 2023-03-30 14:44:52
 * @Description: 鼠标位置空间
 * @FilePath: /zl-g/src/components/Control/MouseLocation.ts
 */

import { MouseLocation } from '@antv/l7';
import { IcontrolMouseLocation } from '../../Type/types';
import { mouseLocationOptions } from '../../option';
import { Position } from '../../Type/control';
class MouseLocationControl {
  __scene: any;
  __ml: any;
  position: Position;
  options: IcontrolMouseLocation;
  constructor(scene: any, options: IcontrolMouseLocation) {
    this.options = { ...mouseLocationOptions, ...options };
    this.__scene = scene;
    this.position = 'topright';
  }
  public add = () => {
    const _option = { ...this.options, ...{ position: this.position } };
    this.__ml = new MouseLocation(_option);
    this.__scene.addControl(this.__ml);
    return this;
  };
  public remove = () => {
    this.__ml.remove();
    return this;
  };
  public show = () => {
    this.__ml.show();
    return this;
  };
  public hide = () => {
    this.__ml.hide();
    return this;
  };
  public setPosition = (position: Position) => {
    if (!position) return;
    this.__ml.setPosition(position);
    return this;
  };
}

export default MouseLocationControl;
