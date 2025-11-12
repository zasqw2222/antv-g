/**
 * 3D 柱状地图 shape:cylinder
 */
import { PointLayer } from '@antv/l7';
import {Ioptions,IPointsforms,I3Dcolumn} from '../../Type/points';
import { IMultiPopupSetData } from '../../Type/control';
import { GeoJSON } from '../../geojsonType';
import { IAnimate, IActiveColor } from '../../Type/polygonts';
import BaseLayer from '../BaseLayer';


class CylinderPoint extends BaseLayer{
  private __active: boolean | IActiveColor;
  private __animate: boolean | IAnimate;
  constructor(scene:any,option:Ioptions){
    super(scene)
    this.layer = new PointLayer(option)
    this.shape('cylinder')
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

  active = (active: boolean | IActiveColor) => {
    if (active) {
      this.__active = active;
    }
    return this;
  };

  animate = (animate: boolean | IAnimate) => {
    if (animate) {
      this.__animate = animate;
    }
    return this;
  };


  style =(style:I3Dcolumn)=>{
    this._style = style;
    return this
  }

  add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_Points_add');
    }

    this.layer
      .color(this.c1, this.c2)
      .size(this.s1, this.s2)
      .shape(this.shap1, this.shap2)
      .active(this.__active)
      .animate(this.__animate)
    this.scene.addLayer(this.layer);
    return this;
  };
}
export default CylinderPoint