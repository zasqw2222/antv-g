/**
 * 气泡--波纹图 shape:circle
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,IAnimateOptions,IpointStyle} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';

import BaseLayer from '../BaseLayer';


class RipplePoint extends BaseLayer{
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.layer = new PointLayer(option)
    this.shape('circle')
    this.layer.animate(true)
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
  // 动画
  animate =(options:boolean|IAnimateOptions)=>{
    if(this.layer){
      this.layer.animate(options)
      return this
    }
  }
  //speed 水波速度 rings 水波环数
  style =(style:IpointStyle)=>{
    this._style = style;
    return this
  }
}
export default RipplePoint