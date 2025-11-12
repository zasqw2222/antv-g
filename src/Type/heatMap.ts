export interface ITransforms {
  type?: string;
  size?: number;
  field?: string;
  method?: string;
}

export interface IClassicHeatMapStyle {
  intensity: number;
  radius: number;
  rampColors: IRampColors;
}

export interface IRampColors {
  colors: string[];
  positions: number[];
}

export interface ISquareHeatMapStyle {
  coverage?: number;
  angle?: number;
  opacity?: number;
}

export interface IOptions {
  name?: string;
  visible?: boolean;
  zIndex?: number;
  minZoom?: number;
  maxZoom?: number;
  autoFit?: boolean;
  zoomEnable?:boolean
  pickingBuffer?: boolean;
  blend?: string;
  maskLayers?: boolean;
  maskInside?: boolean;
  ['string']: any;
}

export interface IOptionData {
  parser?: IParser;
  transforms?: ITransforms[];
}

export interface IParser {
  ['string']: any;
}
