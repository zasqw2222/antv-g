/**
 * 聚合图 shape:circle
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,IpointStyle} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import BaseLayer from '../BaseLayer';

class Aggregate extends BaseLayer{
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.layer = new PointLayer({...option})
    this.shape('circle')
  }
   // 数据更新
   setData = (
    data: IMultiPopupSetData[] | GeoJSON | string,
    parser?: { type: string; x: string; y: string },
    transforms?: IPointsforms[],
    )=>{
    if (this.data) {
      this.layer.setData(data);
    } else {
      if(parser&& transforms){
        this.layer.source(data,{
          parser: parser,
          transforms: transforms,
          cluster:true
        })
      }else if (parser && !transforms) {
        this.layer.source(data, {
          parser: parser,
          cluster:true
        });
      }else{
        this.layer.source(data,{cluster:true})
      }  
    }
    this.data = data
    return this
  }
  //  缩放更新
  scale=(scale1:string,type:string)=>{
    if(this.layer){
      this.layer.scale(scale1,{type:type})
    }
    return this
  }
  // 
  style =(style:IpointStyle)=>{
    this._style = style;
    return this
  }
}
export default Aggregate