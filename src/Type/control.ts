/*
 * @Author: your name
 * @Date: 2023-04-03 08:49:27
 * @Description:
 * @FilePath: /zl-g/src/Type/control.ts
 */
import { ElementType } from './types';

export interface IMultiPopup {
  trigger?: string;
}
export interface IMultiPopupItemField {
  field: string;
  formatField?: ElementType | ((field: string, feature: any) => ElementType);
  formatValue?: ElementType | ((value: any, feature: any) => ElementType);
  getValue?: (feature: any) => any;
}

export interface IMultiPopupItem {
  layer: any;
  fields: IMultiPopupItemField[];
  customContent?: ElementType | ((feature: any) => ElementType);
  title?: ElementType | ((feature: any) => ElementType);
}

export interface IMultiPopupSetData {
  lng: number;
  lat: number;
  ['string']: any;
}

export type IFillShape =
  | 'circle'
  | 'square'
  | 'hexagon'
  | 'triangle'
  | 'pentagon'
  | 'octogon'
  | 'hexagram'
  | 'rhombus'
  | 'vesica';

export type TColor = (color: string) => void;

export type TStyle = {
  opacity?: number | [string, Function] | [string, [number, number]];
  strokeOpacity?: number;
  strokeWidth?: number;
  stroke?: number;
  offsets?: number;
  textOffset?: number;
  thetaOffset?: number;
};

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
export type Position =
  | 'topleft' // ↖ 左上角，纵向排列
  | 'lefttop' // ↖ 左上角，横向排列
  | 'topright' // ↗ 右上角，纵向排列
  | 'righttop' // ↗ 右上角，横向排列
  | 'bottomleft' // ↙ 左下角，纵向排列
  | 'leftbottom' // ↙ 左下角，横向排列
  | 'bottomright' // ↘ 右下角，纵向排列
  | 'rightbottom' // ↘ 右下角，横向排列
  | 'topcenter' // ↑ 上方中央，横向排列
  | 'bottomcenter' // ↓ 下方中间，横向排列
  | 'leftcenter' // ← 左边中间，纵向排列
  | 'rightcenter' // → 右边中间，纵向排列
  | Element; // 传入 DOM 作为当前控件的容器


  export interface ILayerPopup{
    items?:IItems[],
    trigger?: string;
  }
  
  export interface IItems{
    layer:any;
    fields: IMultiPopupItemField[];
    customContent?: ElementType | ((feature: any) => ElementType);
    title?: ElementType | ((feature: any) => ElementType);
  }