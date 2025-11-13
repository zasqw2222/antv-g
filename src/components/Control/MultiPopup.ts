/*
 * @Author: zasqw2222
 * @Date: 2023-03-31 14:08:51
 * @Description: 多popup
 * @FilePath: /antv-g/src/components/Control/MultiPopup.ts
 */

import {
  IMultiPopup,
  IMultiPopupItemField,
  IMultiPopupSetData,
  IFillShape
} from '../../Type/control';
import { LayerPopup, PointLayer } from '@antv/l7';
class MultiPopup {
  private __scene: any;
  private __trigger: string;
  private layerPoint: any;
  private datas: IMultiPopupSetData[];

  private fields: Array<IMultiPopupItemField | string>;

  private fnSize: number;
  private fnShape: IFillShape;
  private fnColor: Array<string | any>;
  constructor(scene, options: IMultiPopup = { trigger: 'hover' }) {
    this.__scene = scene;

    this.fields = [];
    this.datas = [];

    this.layerPoint = new PointLayer();

    this.__trigger = options.trigger;

    this.fnSize = 4;
    this.fnShape = 'circle';
    this.fnColor = ['red'];
  }

  setFields = (item: IMultiPopupItemField | string) => {
    this.fields.push(item);
    return this;
  };

  add = () => {
    this.returnLayer();

    const layerPopup = new LayerPopup({
      items: [
        {
          layer: this.layerPoint,
          fields: this.fields
        }
      ],
      trigger: this.__trigger
    });
    this.__scene.addPopup(layerPopup);
    return this;
  };
  // 一下是为创建点图层做准备

  setData = (data: IMultiPopupSetData) => {
    if (Array.isArray(data)) {
      this.datas = this.datas.concat(data);
    } else {
      this.datas.push(data);
    }
    return this;
  };

  returnParser = () => {
    return {
      parser: {
        type: 'json',
        x: 'lng',
        y: 'lat'
      }
    };
  };
  // 创建点图层 以备确定位置
  returnLayer = () => {
    this.layerPoint
      .source(this.datas, this.returnParser())
      .size(this.fnSize)
      .shape(this.fnShape)
      .color(...this.fnColor);
    this.__scene.addLayer(this.layerPoint);
  };
  setColor = (s1: string = 'red', s2?: Array<string> | Function) => {
    // this.fnColor[0] = s1;
    // this.fnColor[1] = s2;
    this.fnColor = [s1, s2];
    return this;
  };
  setSize = (size: number = 4) => {
    this.fnSize = size;
    return this;
  };
  setShape = (shape: IFillShape = 'circle') => {
    this.fnShape = shape;
    return this;
  };
}

export default MultiPopup;
