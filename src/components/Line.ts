/*
 * @Author: your name
 * @Date: 2023-03-29 11:29:46
 * @Description:
 * @FilePath: /zl-g/src/components/Line.ts
 */
import BaseLayer from './BaseLayer';

import { LineLayer } from '@antv/l7';
import { IAnimate, IActiveColor } from '../Type/polygonts';
import { IScaleConfig } from '../Type/control';

// import { GeoJSON } from '../geojsonType';
class Line extends BaseLayer {
  public __active: boolean | IActiveColor;
  public __animate: boolean | IAnimate;
  public __scale: string;
  public __scales: IScaleConfig;
  public __texture: string;
  constructor(scene: any, options?: any) {
    super(scene);
    this.layer = new LineLayer(options);
    this.__active = false;
    this.__animate = false;
  }

  active = (active: boolean | IActiveColor) => {
    if (active) {
      this.__active = active;
    }
    return this;
  };

  animate = (animate: boolean | IAnimate) => {
    if (animate) {
      this.__animate = animate;
    }
    return this;
  };

  scale = (sc1: string, sc2: IScaleConfig) => {
    if (sc1) {
      this.__scale = sc1;
    }
    if (sc2) {
      this.__scales = sc2;
    }
    return this;
  };

  texture = (texture: string) => {
    if (texture) {
      this.__texture = texture;
    }
    return this;
  };

  add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_Line_add');
    }

    this.layer
      .color(this.c1, this.c2)
      .size(this.s1, this.s2)
      .shape(this.shap1, this.shap2)
      .style(this._style)
      .active(this.__active)
      .animate(this.__animate)
      .scale(this.__scale, this.__scales)
      .texture(this.__texture);
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default Line;
