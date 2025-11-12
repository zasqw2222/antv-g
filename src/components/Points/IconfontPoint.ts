/**
 * 气泡图 shape:Iconfont
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,ItextStyle} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import BaseLayer from '../BaseLayer';

class IconfontPoint extends BaseLayer{
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

  style =(style:ItextStyle)=>{
    this._style = {...style,iconfont:true};
    return this
  }
}
export default IconfontPoint