import HeatMapBaseLayer from './HeatMapBaseLayer';
import { HeatmapLayer } from '@antv/l7';
import { IOptions, ISquareHeatMapStyle } from '../../Type/heatMap';

class HexagonColumnHeatMap extends HeatMapBaseLayer {
  constructor(scene: any, options: IOptions) {
    super(scene);
    this.layer = new HeatmapLayer(options);
  }

  style = (style: ISquareHeatMapStyle) => {
    this._style = style;
    return this;
  };

  add = () => {
    this.layer
      .shape('hexagonColumn')
      .size(this.s1, this.s2)
      .color(this.c1, this.c2)
      .style(this._style);
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default HexagonColumnHeatMap;
