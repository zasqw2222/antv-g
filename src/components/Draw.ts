/*
 * @Author: zasqw2222
 * @Date: 2023-04-06 14:09:11
 * @Description:
 * @FilePath: /antv-g/src/components/Draw.ts
 */
import {
  DrawEvent,
  DrawPoint,
  DrawLine,
  DrawPolygon,
  DrawRect,
  DrawCircle
} from '@antv/l7-draw';

import { TdrawType, IOptions, Tdata } from '../Type/draw';
import { Position } from '../geojsonType';
class Draw {
  scene: any;
  drawer: any;
  options: IOptions;
  __type: string;
  __initialData: Tdata;
  constructor(scene: any, type: TdrawType) {
    this.scene = scene;
    this.drawer = null;
    if (!type) {
      throw new Error('请传入类型');
    }
    this.__type = type;
    this.__initialData = [];
    this.options = {};
    return this;
  }
  setOptions = (options?: IOptions) => {
    this.options = { ...this.options, ...options };
    return this;
  };
  setData = (data: Tdata) => {
    let initialData = [];

    if (Array.isArray(data[0])) {
      initialData = data.map((item) => {
        return this.returnPointData(item);
      });
    } else {
      initialData = data;
    }

    this.__initialData = initialData;
    this.options = { ...this.options, ...{ initialData } };
    return this;
  };

  returnPointData = (data: Position) => {
    const _Type = {
      point: 'Point',
      line: 'LineString',
      polygon: 'Polygon',
      rect: 'Polygon',
      circle: 'Polygon'
    };
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: _Type[this.__type],
        coordinates: data
      }
    };
  };

  add = () => {
    switch (this.__type) {
      case 'point':
        this.drawer = new DrawPoint(this.scene, this.options);
        break;
      case 'line':
        this.drawer = new DrawLine(this.scene, this.options);
        break;
      case 'polygon':
        this.drawer = new DrawPolygon(this.scene, this.options);
        break;
      case 'rect':
        this.drawer = new DrawRect(this.scene, this.options);

        break;
      case 'circle':
        this.drawer = new DrawCircle(this.scene, this.options);
        break;
      default:
        throw new Error('类型不被支持');
    }
    return this;
  };

  show = () => {
    if (this.drawer) {
      this.drawer.enable();
    } else {
      this.add();
      this.drawer.enable();
    }
    return this;
  };

  disable = () => {
    this.drawer.disable();
    return this;
  };

  getData = () => {
    return this.drawer.getData();
    return this;
  };

  clear = () => {
    this.drawer.clear(true);
    return this;
  };

  //回退至上一次保存的绘制状态
  revert = () => {
    this.drawer.revertHistory();
    return this;
  };

  //重置到上一次回退
  redo = () => {
    this.drawer.redoHistory();
    return this;
  };

  //拖拽结束
  dragEnd = (callback) => {
    if (!callback || !this.drawer) return;
    this.drawer.on(DrawEvent.DragEnd, callback);
    return this;
  };

  //编辑
  edit = (callback) => {
    if (!callback || !this.drawer) return;
    this.drawer.on(DrawEvent.Edit, callback);
    return this;
  };
}

export default Draw;
