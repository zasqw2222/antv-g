import HeatMapBaseLayer from './HeatMapBaseLayer';
import { HeatmapLayer } from '@antv/l7';
import { IOptions, ISquareHeatMapStyle } from '../../Type/heatMap';

class HexagonHeatMap extends HeatMapBaseLayer {
  constructor(scene: any, options: IOptions) {
    super(scene);
    this.layer = new HeatmapLayer(options);
  }

  style = (style: ISquareHeatMapStyle) => {
    this._style = style;
    return this;
  };

  add = () => {
    if (!this.heatMapData) {
      throw new Error('请先设置数据_HeatMap_add');
    }
    this.layer.shape('hexagon').color(this.c1, this.c2).style(this._style);
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default HexagonHeatMap;
