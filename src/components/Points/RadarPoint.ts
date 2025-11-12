/**
 * 雷达图 shape:radar
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,IAnimateOptions,RadarStyle} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import BaseLayer from '../BaseLayer';

class RadarPoint extends BaseLayer{
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.init(option)
  }
  init =(option)=>{
    this.layer = new PointLayer(option)
    this.shape('radar')
    this.layer.animate(true)
    this.layer.style({speed:5})
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
  // 雷达图只需speed
  style =(style:RadarStyle)=>{
    this._style = style;
    return this
  }
}
export default RadarPoint