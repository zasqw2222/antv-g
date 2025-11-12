/*
 * @Author: your name
 * @Date: 2023-04-03 12:48:58
 * @Description:
 * @FilePath: /zl-g/src/components/BaseLayer.ts
 */
import { TStyle, IMultiPopupSetData } from '../Type/control';
import { IClassicHeatMapStyle, ISquareHeatMapStyle } from '../Type/heatMap';
// import { imageLayerExtent } from '../Type/imagelayer';
import { TBaseLayerOn } from '../Type/baseLayer';
import { GeoJSON } from '../geojsonType';
import {
  IpointStyle,
  ItextStyle,
  RadarStyle,
  I3Dcolumn,
  SimpleStyle,
  ActiveOption
} from 'src/Type/points';
import { ICityBuildingStyle } from '../Type/polygonts';

import LayerEvent from './LayerEvent';

class BaseLayer extends LayerEvent {
  public scene: any;
  public layer: any;
  public c1: string;
  public c2: Array<string> | Function | string;
  public s1: number | string;
  public s2: Array<number> | Function;
  public shap1: string;
  public shap2: Array<string> | Function;
  public _style:
    | TStyle
    | IClassicHeatMapStyle
    | ISquareHeatMapStyle
    | IpointStyle
    | ItextStyle
    | RadarStyle
    | I3Dcolumn
    | SimpleStyle
    | ICityBuildingStyle;
  public data: IMultiPopupSetData[] | GeoJSON | string;
  public parser: {
    type: string;
    x: string;
    y: string;
  };

  constructor(scene: any) {
    super();
    this.scene = scene;
    // this.layer = layer;
    this.c1 = '';
    this.c2 = null;
    this.s1 = 4;
    this.s2 = null;
    // this.shap1 = 'circle';
    this.shap1 = null;
    this._style = {};
    this.data = null;
    this.parser = {
      type: 'json',
      x: 'lng',
      y: 'lat'
    };
  }
  // color = (color: string): void;
  color = (color: string, colors?: string | Array<string> | Function) => {
    if (this.c1 || this.c2) {
      this.layer.color(color, colors);
    }
    if (color) {
      this.c1 = color;
    }
    if (colors) {
      this.c2 = colors;
    }
    return this;
  };
  // size = (size: number | string): void;
  size = (size: number | string, sizes?: Array<number> | Function) => {
    if (this.s1 || this.s2) {
      this.layer.size(size, sizes);
    }
    if (size !== null || size !== undefined) {
      this.s1 = size;
    }
    if (size !== null || size !== undefined) {
      this.s2 = sizes;
    }
    return this;
  };

  // shape = (shape: string): void;
  shape = (shape: string, shapes?: Array<string> | Function) => {
    if (shape) {
      this.shap1 = shape;
    }
    if (shapes) {
      this.shap2 = shapes;
    }
    return this;
  };

  style = (
    style:
      | TStyle
      | IClassicHeatMapStyle
      | ISquareHeatMapStyle
      | IpointStyle
      | ItextStyle
      | RadarStyle
      | I3Dcolumn
      | SimpleStyle
      | ICityBuildingStyle
  ) => {
    if (this._style) {
      this.layer.style(style);
    }
    this._style = style;
    return this;
  };

  add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_BaseLayer_add');
    }
    this.layer
      .color(this.c1, this.c2)
      .size(this.s1, this.s2)
      .shape(this.shap1, this.shap2)
      .style(this._style);
    this.scene.addLayer(this.layer);
    return this;
  };

  setData = (
    data: IMultiPopupSetData[] | GeoJSON,
    parser?: {
      type: string;
      x: string;
      y: string;
    }
  ) => {
    if (this.data) {
      this.layer.setData(data);
    } else {
      //  todo 要做类型判断
      if (parser) {
        this.layer.source(data, {
          parser
        });
      } else {
        this.layer.source(data);
      }
    }
    this.data = data;

    return this;
  };
  show = () => {
    this.layer.show();
    return this;
  };
  remove = () => {
    if (this.layer) {
      this.scene.removeLayer(this.layer);
    }
    return this;
  };
  // 上面有show 下面有hide
  // visiable = (vis: boolean) => {
  //   //?
  //   if (this.layer) {
  //     this.layer.isVisible(vis);
  //   }
  //   return this;
  // };
  hide = () => {
    if (this.layer) {
      this.layer.hide();
    }
    return this;
  };
  setIndex = (zIndex: number) => {
    if (this.layer) {
      this.layer.setIndex(zIndex);
    }
    return this;
  };
  setMinZoom = (zoom: number) => {
    if (this.layer) {
      this.layer.setMinZoom(zoom);
    }
    return this;
  };
  setMaxZoom = (zoom: number) => {
    if (this.layer) {
      this.layer.setMaxZoom(zoom);
    }
    return this;
  };
  // 缩放到图层范围
  fitBounds = () => {
    if (this.layer) {
      this.layer.fitBounds();
    }
    return this;
  };

  // 图层交互 hover高亮
  active = (option: ActiveOption | boolean) => {
    if (this.layer) {
      this.layer.active(option);
    }
    return this;
  };
  // 根据元素 ID 设置指定元素 hover 高亮
  setActive = (featureId: string | number) => {
    if (this.layer) {
      this.layer.setActive(featureId);
    }
    return this;
  };

  // 图层交互 点击高亮
  select = (option: ActiveOption | boolean) => {
    if (this.layer) {
      this.layer.select(option);
    }
    return this;
  };
  // 根据元素 ID 设置指定元素 click 选中 高亮
  setSelect = (featureId: string | number, option?: ActiveOption) => {
    if (this.layer) {
      this.layer.setSelect(featureId, option);
    }
    return this;
  };
  // 点击事件
  click = (callback) => {
    if (this.layer) {
      this.layer.on('click', callback);
    }
    return this;
  };
  update = () => {
    this.layer.render();
  };
}

export default BaseLayer;
