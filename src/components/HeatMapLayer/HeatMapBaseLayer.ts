import BaseLayer from '../BaseLayer';

import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import {
  ITransforms,
  IClassicHeatMapStyle,
  ISquareHeatMapStyle
} from '../../Type/heatMap';
class HeatMapBaseLayer extends BaseLayer {
  public heatMapData: IMultiPopupSetData[] | GeoJSON | string;
  constructor(scene: any) {
    super(scene);
    this.heatMapData = null;
  }

  //data只支持 GeoJSON｜CSV｜JSON
  setData = (
    data: IMultiPopupSetData[] | GeoJSON | string,
    parser: { type: string; x: string; y: string },
    transforms?: ITransforms[]
  ) => {
    if (this.data) {
      this.layer.setData(data);
    } else {
      this.layer.source(data, {
        parser: parser,
        transforms: transforms
      });
    }
    this.heatMapData = data;
    return this;
  };

  style = (style: IClassicHeatMapStyle | ISquareHeatMapStyle) => {
    this._style = style;
    return this;
  };
}

export default HeatMapBaseLayer;
