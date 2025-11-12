/*
 * @Author: your name
 * @Date: 2023-04-04 17:18:37
 * @Description:
 * @FilePath: /zl-g/src/components/HeatMapLayer.ts
 */
import HeatMapBaseLayer from './HeatMapBaseLayer';
import { HeatmapLayer } from '@antv/l7';
import { IOptions } from '../../Type/heatMap';
class ClassicHeatMap extends HeatMapBaseLayer {
  private si1: string;
  private si2: number[];
  constructor(scene: any, options?: IOptions) {
    super(scene);
    this.layer = new HeatmapLayer(options);
  }

  //经典热力地图size 只能传两个参数 参数1string 参数2number[]
  size = (size1: string, size2: number[]) => {
    if (size1) {
      this.si1 = size1;
    }
    if (size2) {
      this.si2 = size2;
    }

    return this;
  };

  add = () => {
    if (!this.heatMapData) {
      throw new Error('请先设置数据_HeatMap_add');
    }
    this.layer.shape('heatmap').size(this.si1, this.si2).style(this._style);
    this.scene.addLayer(this.layer);

    return this;
  };
}

export default ClassicHeatMap;
