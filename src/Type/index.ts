/*
 * @Author: your name
 * @Date: 2023-04-04 16:28:58
 * @Description:
 * @FilePath: /zl-g/src/Type/index.ts
 */
import { GeoJSON } from '../geojsonType';
const mapboxgl = window.mapboxgl;
export interface ILngLat {
  lng: number;
  lat: number;
}

export interface IMap {
  type?:string,//是否'leaflet'
  urlTemplate?:string,//leaflet加载地图类型
  style: string; // 地图样式
  zoom?: number; // 缩放级别
  center?: mapboxgl.LngLatLike; // 中心点
  pitch?: number; // 俯仰角
  minZoom?: number; // 最小缩放级别
  maxZoom?: number; // 最大缩放级别
  zoomEnable?:boolean;
  pitchWithRotate?: boolean; // 是否开启旋转
}

export type Tdom = HTMLElement | string;

export interface IZLG {
  dom: Tdom;
  map: IMap;
}

export type TcoordInput = GeoJSON | Array<number>;

// 坐标相关

export type TcoordFormTo =
  | 'WGS84'
  | 'GCJ02'
  | 'BD09'
  | 'BD09MC'
  | 'Baidu'
  | 'BMap'
  | 'AMap';

//数组 2个长度
export type Tcoord = [number, number] | [];

// 容器类型
export type Tcontainer = HTMLElement | null;
// 地图状态
export interface IStatusOptions {
  showIndoorMap: boolean;
  resizeEnable: boolean;
  dragEnable: boolean;
  keyboardEnable: boolean;
  doubleClickZoom: boolean;
  zoomEnable: boolean;
  rotateEnable: boolean;
}
// 监听类型
export type Tlistener =
  | 'loaded'
  | 'mapmove'
  | 'movestart'
  | 'moveend'
  | 'zoomchange'
  | 'zoomstart'
  | 'zoomend'
  | 'resize'
  | 'click'
  | 'dblclick'
  | 'mousemove'
  | 'mousewheel'
  | 'mouseover'
  | 'mouseout'
  | 'mouseup'
  | 'mousedown'
  | 'contextmenu'
  | 'dragstart'
  | 'dragging'
  | 'dragend'
  | 'webglcontextlost';


  export interface IMapBoxOnline{
    style:string,
    token:string
  }
