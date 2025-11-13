/*
 * @Author: zasqw2222
 * @Date: 2023-04-11 11:20:14
 * @Description:
 * @FilePath: /antv-g/src/components/Polygon.ts
 */
import BaseLayer from './BaseLayer';

import { PolygonLayer } from '@antv/l7';
import { IAnimate, IActiveColor } from '../Type/polygonts';
import { IScaleConfig } from '../Type/control';

class Polygon extends BaseLayer {
  public __animate: boolean | IAnimate;
  public __active: boolean | IActiveColor;
  public __scale: string;
  public __scales: IScaleConfig;

  constructor(scene: any, options: any) {
    super(scene);
    this.layer = new PolygonLayer(options);
    this.__animate = false;
    this.__active = false;
  }

  scale = (sc1: string, sc2: IScaleConfig) => {
    if (sc1) {
      this.__scale = sc1;
    }
    if (sc2) {
      this.__scales = sc2;
    }
    return this;
  };

  animate = (animate: boolean | IAnimate) => {
    if (animate) {
      this.__animate = animate;
    }
    return this;
  };

  active = (active: boolean | IActiveColor) => {
    if (active) {
      this.__active = active;
    }
    return this;
  };

  add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_Polygon_add');
    }
    this.layer
      .color(this.c1, this.c2)
      .size(this.s1, this.s2)
      .shape(this.shap1, this.shap2)
      .style(this._style)
      .scale(this.__scale, this.__scales)
      .animate(this.__animate)
      .active(this.__active);
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default Polygon;
