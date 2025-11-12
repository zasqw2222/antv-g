/**
 * 简单点 shape:simple 实质是精灵贴图，因此简单点图层始终面向相机（普通的 2D 点图层保持面向上）
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,SimpleStyle} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';

import BaseLayer from '../BaseLayer';

class SimplePoint extends BaseLayer{
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.layer = new PointLayer(option)
    this.shape('simple')
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
  style =(style:SimpleStyle)=>{
    this._style = style;
    return this
  }
}
export default SimplePoint