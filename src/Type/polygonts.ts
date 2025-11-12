export interface IPolygonProps {
  data: any;
  shape: string;
  color: IColor;
  scale?: IScale;
  animate?: boolean | IIndeterminateObj;
  active?: boolean;
  style?: IStyle;
  size?: ISize;
  options?: any;
}

export interface IColor {
  firstColor: string;
  secondColor?: Function | Array<string>;
}

export interface IScale {
  firstScale?: string;
  secondScale?: Function | Array<string>;
}

export interface IIndeterminateObj {
  [key: string]: string | number | boolean | object;
}

export interface IStyle {
  opacity?: number | any; //图形透明度
  raisingHeight?: number; //抬升高度
  opacityLinear?: IOpacityLinear; //透明渐变
  heightfixed?: boolean; //抬升高度是否随 zoom 变化
  topsurface?: boolean; //顶部是否显示
  sidesurface?: boolean; //侧面是否显示
  sourceColor?: IColor; //侧面底部颜色
  targetColor?: IColor; //侧面顶部颜色
  speed?: number; //水波速度
  waterTexture?: string; //水面贴图
  watercolor?: IColor; //水面颜色
  watercolor2?: IColor; //水面颜色
}

type IDir = 'in' | 'out';
export interface IOpacityLinear {
  enable: false;
  dir: IDir;
}

export interface ISize {
  firstSize: string;
  secondSize?: Function | Array<string> | Array<Number>;
}

export interface IScaleConfig {
  type: string;
  domain?: any[];
  range?: any[];
  neutral?: number;
  field?: string;
  unknown?: string;
  ticks?: any[];
  nice?: boolean;
  clamp?: boolean;
  format?: () => any;
}

export interface IAnimate {
  ['string']: boolean;
}

export interface IActiveColor {
  color: string;
}

export interface ICityBuildingStyle {
  baseColor?: string;
  windowColor?: string;
  brightColor?: string;
  sweep?: ISweep;
  ['string']: any;
}
export interface ISweep {
  sweepRadius?: number;
  sweepCenter?: number;
  sweepColor?: string;
  sweepSpeed?: string;
}
