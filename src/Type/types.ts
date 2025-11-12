/*
 * @Author: your name
 * @Date: 2023-03-28 17:06:19
 * @Description:
 * @FilePath: /zl-g/src/Type/types.ts
 */

// import { GeoJSON } from '../geojsonType';
const mapboxgl = window.mapboxgl;

export type TStyle = string | mapboxgl.Style;

export interface ICreateLine {
  type:
    | 'csv'
    | 'json'
    | 'geojson'
    | 'image'
    | 'raster'
    | 'rasterTile'
    | 'mvt'
    | 'geojsonvt';
  data: any;
  name?: string;
}

export type TlngLat =
  | {
      lng: number;
      lat: number;
    }
  | Array<number>;

export type ElementType =
  | HTMLElement
  | HTMLElement[]
  | DocumentFragment
  | Text
  | string;

// ====== 控制器类型部分 ======

export type position =
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
  | Element;

interface IControl {
  position?: position;
  className?: string;
  style?: string;
}

export interface IControlZoom extends IControl {
  zoomInText?: string;
  zoomOutText?: string;
  zoomInTitle?: string;
  zoomOutTitle?: string;
}
export type zoomOnType = 'add' | 'remove' | 'show' | 'hide';
export type zoomOnCb = (e: Function) => void;

export interface IControlScale extends IControl {
  lockWidth?: boolean;
  maxWidth?: number;
  metric?: boolean;
  imperial?: boolean;
}

export interface IControlFullScreen extends IControl {
  btnIcon?: HTMLElement | SVGAElement;
  btnText?: string;
  title?: string;
  vertical?: boolean;
  exitBtnIcon?: HTMLElement | SVGAElement;
  exitBtnText?: string;
  exitTitle?: string;
}

export interface IControlLocate extends IControl {
  position?: position;
  btnIcon?: HTMLElement | SVGAElement;
  btnText?: string;
  title?: string;
  vertical?: boolean;
  transform?: (position: [number, number]) => [number, number];
}
export interface IcontrolMouseLocation extends IControl {
  transform?: (position: [number, number]) => [number, number];
}

// marker
export interface IMarker {
  color?: string;
  element?: HTMLElement | string;
  anchor?:
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  offset?: [number, number];
  extData?: any;
}
// popup

export type AnchorType =
  | 'center'
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';

export interface IPopup {
  lnglat?: TlngLat; // 坐标
  text?: string; // 文本
  html?: ElementType; // html
  title?: ElementType; // 标题
  closeOnClick?: boolean; // 点击地图是否点击关闭
  closeOnEsc?: boolean; // esc键是否关闭
  maxWidth?: number; // 最大宽度
  anchor?: AnchorType;
  offset?: [number, number];
}
