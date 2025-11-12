/**
 * 点图层相关
 */

// 动画
export type IAnimateOptions= {
  enable: boolean;
  speed?: number;
  repeat?: number;
}

export type Ioptions={
    name?: string;
    visible?:boolean;
    zIndex?:number;
    minZoom?:number;
    maxZoom?:number;
    autoFit?:boolean;//layer 初始化完成之后，地图是否自动缩放到图层范围
    pickingBuffer?:number;
    blend?:number;
    zoomEnable?:boolean
}

// export interface IMultiPopupSetData {
//   lng: number;
//   lat: number;
//   ['string']: any;
// }

export interface IPointsforms {
  type?: string;
  size?: number;
  field?: string;
  method?: string;
}
export type ChartOpions ={
  container?:Element,
  width?:number|string,
  height?: number|string,
  render?: 'svg',
  padding?:number
}
// 点图层的贴地的几何图形，如圆形、正方形、三角形等。
type IFillShape =
  | 'circle'
  | 'square'
  | 'hexagon'
  | 'triangle'
  | 'pentagon'
  | 'octogon'
  | 'hexagram'
  | 'rhombus'
  | 'vesica';
  // 点的类型为垂直地图的柱子。
  type IColumn = 'cylinder' | 'triangleColumn' | 'hexagonColumn' | 'squareColumn';
/**
 * style 设置
 */
// shape  IFillShape。
export type IpointStyle = {
  opacity?:number,//透明
  stroke?:string,//	图形边框颜色	#fff
  strokeWidth?:number,//	图形边框宽度	0
  strokeOpacity?:	number,//	图形边框透明度	1
  blur?:number,//	图形模糊半径	0
  offsets?:	[number, number],//	点偏移	[0, 0]
  raisingHeight?:	number,//	抬升高度	0
  heightfixed?:	boolean,//	抬升高度是否随 zoom 变化	false
  unit?:string//	点大小单位	pixel
}
// shape 为text
export type ItextStyle = {
  opacity?:number,//透明
  stroke?: string,// 描边颜色
  strokeWidth?: number,// 描边宽度
  textAnchor?: string,// 文本相对锚点的位置'right' | 'top-right' | 'left' | 'bottom-right' | 'left' | 'top-left' | 'bottom-left' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top' | 'top-right' | 'top-left' | 'center';
  padding?: number, //文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
  spacing?: number ,//文本间隔
  halo?:number,//文字边缘光晕宽度
  gamma?:number,//文字的颜色参数
  fontWeight?: string,// 字体粗细
  fontFamily?: string,// 字号
  textOffset?: [number, number],// 文本偏移量
  textAllowOverlap?: boolean,// 是否允许文字遮盖
  raisingHeight?:number,// 设置文本标注的抬升高度
  heightfixed?:boolean,//抬升高度是否随 zoom 变化
  iconfont?:boolean,// 开启 iconfont 映射
}
// shape 为 3D 柱图
type IDir = 'up' | 'down';
interface IOpcityLinear  {
  enable: boolean;
  dir: IDir;
}
export type I3Dcolumn = {
  opacity?:number,//透明
  depth?:	boolean,//	图形是否开启深度检测	true
  pickLight?:	boolean,//	拾取高亮是否计算光照	false
  lightEnable?:	boolean,//	颜色是否参与光照计算	true
  heightfixed?:	boolean,//	是否是固定高度	false
  sourceColor?:	string,//	柱子底部颜色	/
  targetColor?:	string,//	柱子顶部颜色	/
  opacityLinear?:	IOpcityLinear,//	柱子的透明度渐变
}
// shape 为雷达图。radar
export type RadarStyle = {
  opacity?:number,//透明
  speed?:	number//	雷达图旋转的速度	
}
//shape 为简单点图形（精灵)。simple
export type SimpleStyle ={
  stroke?:string,//	图形边框颜色	#fff
  strokeWidth?:	number,//	图形边框颜色	0
  strokeOpacity?:number,//	图形边框宽度	1
  offsets?:	[number, number],//	点偏移	[0, 0]
}

// activeOption
export type ActiveOption ={
  color?:string,
  mix?: number
}