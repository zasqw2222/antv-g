import HeatMapBaseLayer from './HeatMapBaseLayer';
import { HeatmapLayer } from '@antv/l7';
import { ISquareHeatMapStyle } from '../../Type/heatMap';
import { IOptions } from '../../Type/heatMap';

class CircleHeatMap extends HeatMapBaseLayer {
  constructor(scene: any, options: IOptions) {
    super(scene);
    this.layer = new HeatmapLayer(options);
  }

  //style 规定死
  style = (style: ISquareHeatMapStyle) => {
    this._style = style;
    return this;
  };

  add = () => {
    if (!this.heatMapData) {
      throw new Error('请先设置数据_HeatMap_add');
    }
    this.layer.shape('circle').style(this._style).color(this.c1, this.c2);
    this.scene.addLayer(this.layer);

    return this;
  };
}

export default CircleHeatMap;
