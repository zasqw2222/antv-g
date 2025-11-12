/**
 * 符号图 shape('name', [ '00', '01', '02' ]) 需要添加到全局
 *  */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import BaseLayer from '../BaseLayer';

class SymbolPoint extends BaseLayer{
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.layer = new PointLayer(option)
  }
  // 数据更新
  setData = (
    data: IMultiPopupSetData[] | GeoJSON | string,
    parser?: { type: string; x: string; y: string },
    transforms?: IPointsforms[]
    )=>{
    if (this.data) {
      this.layer.setData(data);
    } else {
      if(parser&& transforms){
        this.layer.source(data,{
          parser: parser,
          transforms: transforms
        })
      }else if (parser && !transforms) {
        this.layer.source(data, {
          parser: parser
        });
      }else{
        this.layer.source(data)
      }  
    }
    this.data = data
    return this
  }
  add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_BaseLayer_add');
    }
    this.layer
      .size(this.s1, this.s2)
      .shape(this.shap1, this.shap2)
      .style(this._style);
    this.scene.addLayer(this.layer);
    return this;
  };
}
export default SymbolPoint