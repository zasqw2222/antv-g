import BaseLayer from './BaseLayer';
import { CityBuildingLayer } from '@antv/l7';
import { IAnimate, IActiveColor, ICityBuildingStyle } from '../Type/polygonts';

class CityBuilding extends BaseLayer {
  private __animate: boolean | IAnimate;
  private __active: boolean | IActiveColor;
  private __style: ICityBuildingStyle;
  constructor(scene: any) {
    super(scene);
    this.layer = new CityBuildingLayer();
  }

  animate = (animate: boolean | IAnimate) => {
    this.__animate = animate;
    return this;
  };

  active = (active: boolean | IActiveColor) => {
    if (active) {
      this.__active = active;
    }
    return this;
  };

  style = (style: ICityBuildingStyle) => {
    this.__style = style;
    return this;
  };

  add = () => {
    this.layer
      .size(this.s1, this.s2)
      .color(this.c1, this.c2)
      .animate(this.__animate)
      .active(this.__active)
      .style(this.__style);
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default CityBuilding;
