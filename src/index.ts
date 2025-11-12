/*
 * @Author: your name
 * @Date: 2021-07-13 09:37:46
 * @Description:
 * @FilePath: /zl-g/src/index.ts
 */
// import gcoord from 'gcoord';
import { ExportImage } from '@antv/l7';
import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';

// todo 这个也是开发重点
// import * as maptalks from 'maptalks';

import { switchStyle } from './components/styleSwtich';
import { getCount, dataURLtoBlob } from './option';

import {
  IZLG,
  TcoordInput,
  TcoordFormTo,
  Tcoord,
  Tcontainer,
  IStatusOptions,
  Tlistener
} from './Type/index';
import MapType from './components/MapType';

import Line from './components/Line';
import Layer from './components/Layer';
import Polygon from './components/Polygon';
import Point from './components/PointsLayer';

import ClassicHeatMap from './components/HeatMapLayer/ClassicHeatMap';
import Classic3DHeatMap from './components/HeatMapLayer/3DClassicHeatMap';
import SquareHeatMap from './components/HeatMapLayer/SquareHeatMap';
import CircleHeatMap from './components/HeatMapLayer/CircleHeatMap';
import HexagonHeatMap from './components/HeatMapLayer/HexagonHeatMap';
import HexagonColumnHeatMap from './components/HeatMapLayer/HexagonColumnHeatMap';
import CityBuilding from './components/CityBuildingLayer';

import BubblePoint from './components/Points/BubblePoint'; //气泡图
import ShapeMapping from './components/Points/ShapeMapping'; //形状映射气泡图
import RipplePoint from './components/Points/RipplePoint'; //水波纹气泡图
import CylinderPoint from './components/Points/CylinderPoint'; //3D柱状图
import Aggregate from './components/Points/Aggregate'; //聚合图
import Luminance from './components/Points/Luminance'; //亮度图
import ScatterPoint from './components/Points/ScatterPoint'; //散点图
import RadarPoint from './components/Points/RadarPoint'; //雷达图
import SimplePoint from './components/Points/SimplePoint'; //简单点
import TextPoint from './components/Points/TextPoint'; //文本标注
import SymbolPoint from './components/Points/SymbolPoint'; //符号图
import IconfontPoint from './components/Points/IconfontPoint';

import ZoomControl from './components/Control/Zoom';
import ScaleControl from './components/Control/Scale';
import Full from './components/Control/FullScreen';
import Locate from './components/Control/Locate';
import MouseLocationControl from './components/Control/MouseLocation';
import Tip from './components/Control/Popup';
import MarkerPoint from './components/Control/Marker';
import MultiPopup from './components/Control/MultiPopup';
import PopupLayer from './components/PopupLayer';

import Images from './components/ImageLayer';
import DrawTool from './components/Draw';
import MiniMap from './components/Control/MiniMap';

const mapboxgl = window.mapboxgl;

class ZLG extends MapType {
  // public __scene: any;
  // private dom: Tdom;
  // public Layer: any;

  static coord: (
    position: TcoordInput,
    from?: TcoordFormTo,
    to?: TcoordFormTo
  ) => TcoordInput;
  static createLineJSON: (data: number[] | number[][]) => any;
  static createPointJSON: (data: number[] | number[][]) => any;
  static createPolygonJSON: (data: number[][] | number[][][]) => any;
  constructor(props: IZLG) {
    super();
    const { dom, map } = props;
    this.dom = dom;
    this.map = map;
    this.init();
  }
  // 内部挂载函数
  private init = () => {
    const { style, token, securityKey } = this.map;
    if (style.includes('amap')) {
      this.addGaodeMap(style, token, securityKey);
    } else if (style.includes('mapbox')) {
      this.addMapBoxOnline({ style: style, token: token });
    } else if (style === 'blank') {
      this.addMapBoxNoStyle({ style: style });
    } else {
      this.addMapBox(style);
    }
    this.Layer = new Layer(this.__scene);
  };

  // 注册组件
  public register = (components: any, ...rest) => {
    try {
      return new components(this.__scene, ...rest);
    } catch (error) {
      throw new Error(error);
    }
  };

  // 设置地图缩放等级
  public setZoom = (zoom: number) => {
    if (!zoom && zoom !== 0) return;
    this.__scene.setZoom(zoom);
  };

  //获取地图缩放登记表
  public getZoom = () => {
    return this.__scene.getZoom();
  };

  // 获取中心点
  public getCenter = (): Tcoord => {
    const { lng, lat } = this.__scene.getCenter();
    return [lng, lat];
  };
  // 获取地图尺寸
  public getSize = (): Tcoord => {
    return this.__scene.getSize();
  };
  // 获取倾斜角度
  public getPitch = (): number => {
    return this.__scene.getPitch();
  };
  // 获取容器
  public getContainer = (): Tcontainer => {
    return this.__scene.getContainer();
  };
  // 设置地图
  public setMap = (url: string): void => {
    if (!url) return;
    this.__scene.__style = url;
    this.__scene.setMapStyle(switchStyle(url));
  };
  // 设置中心点
  public setCenter = (lnglat: Tcoord): void => {
    if (!lnglat) return;
    this.__scene.setCenter(lnglat);
  };
  // 设置旋转角度
  public setRotation = (rotation: number): void => {
    if (rotation === undefined || rotation === null) return;
    this.__scene.setRotation(rotation);
  };
  // 地图平移
  public moveTo = (lnglat: Tcoord): void => {
    if (!lnglat) return;
    this.__scene.panTo(lnglat);
  };
  // 地图平移 像素
  public moveBy = (x: number, y: number): void => {
    if (!x || !y) return;
    this.__scene.panBy(x, y);
  };
  // 设置倾斜角度
  public setPitch = (pitch: number): void => {
    if (pitch === undefined || pitch === null) return;
    this.__scene.setPitch(pitch);
  };
  // 设置地图状态
  public setStatus = (status: IStatusOptions): void => {
    if (!status) return;
    this.__scene.setMapStatus(status);
  };
  // 像素转经纬
  public ptll = (point: Tcoord): Tcoord => {
    if (!point) return [];
    const ll = this.__scene.pixelToLngLat(point);
    return [ll.lng, ll.lat];
  };
  // 经纬转像素
  public lltp = (lnglat: Tcoord): Tcoord => {
    if (!lnglat) return [];
    const p = this.__scene.lngLatToPixel(lnglat);
    return [p.x, p.y];
  };
  // 销毁
  public destroy = () => {
    this.__scene.destroy();
  };
  // on
  public on = (type: Tlistener, callback: Function) => {
    if (!type || !callback) return;
    this.__scene.map.on(type, callback);
    // this.__scene.on(type, callback);
  };
  // off
  public off = (type: Tlistener, callback: Function) => {
    if (!type || !callback) return;
    this.__scene.map.off(type, callback);
  };

  public removePopup = (popup: any) => {
    this.__scene.map.removePopup(popup);
  };

  //将截取的地图底图和可视化图层合并成一张图片
  drawAndShareImage = (
    imgSrc1: Blob,
    imgSrc2: Blob,
    width: number,
    height: number,
    name: string
  ) => {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');

    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'transparent';
    context.fill();

    let myImage = new Image();
    myImage.src = URL.createObjectURL(imgSrc1); //地图底图
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = () => {
      context.drawImage(myImage, 0, 0, width, height);
      let myImage2 = new Image();
      myImage2.src = URL.createObjectURL(imgSrc2); //可视化类型图层
      myImage2.crossOrigin = 'Anonymous';

      myImage2.onload = () => {
        // 绘制填充的矩形
        context.fillRect(0, 0, width, height);
        context.drawImage(myImage2, 0, 0, width, height);
        canvas.toBlob(async function (blob) {
          FileSaver.saveAs(blob, name);
        });
      };
    };
  };

  //截图
  public screenshot = (name: string = 'map.png') => {
    let _this = this;

    const dom =
      document.querySelector('.l7-marker-container2') ||
      document.querySelector('.l7-marker-container');

    if (dom) {
      // 地图导出解决方法 1  preserveDrawingBuffer: true,
      const zoom = new ExportImage({
        onExport: async (base64: string) => {
          let url = await html2canvas(dom, {
            backgroundColor: null, //背景颜色设置透明色
            useCORS: true // 【重要】开启跨域配置
          });
          // jpeg格式不支持透明
          url = url.toDataURL('image/png', 0.4);
          _this.drawAndShareImage(
            dataURLtoBlob(base64),
            dataURLtoBlob(url),
            dom.clientWidth,
            dom.clientHeight,
            name
          );
        }
      });
      this.__scene.addControl(zoom);
    }

    //地图导出解决方法 2
    // this.__scene.map.once('render', function () {
    //   const canvas = this.getCanvas();
    //   canvas.toBlob(async function (blob) {
    //     let url2 = await _this.__scene.exportMap('png');

    // _this.drawAndShareImage(
    //   blob,
    //   dataURLtoBlob(url2),
    //   canvas.width,
    //   canvas.height,
    //   name
    // );
    // });
    // });

    // this.__scene.map.repaint = true;
  };

  //全局添加图片
  public addImage = (name: string, url: HTMLImageElement | string | File) => {
    if (!name || !url) return;
    this.__scene.addImage(name, url);
  };

  //加载静态图片
  public addStaticImage = () => {
    this.__scene.addImage('icon', '/public/符号图层图标/地标1.svg');
    this.__scene.addImage('icon1', '/public/符号图层图标/地标2.svg');
    this.__scene.addImage('icon2', '/public/符号图层图标/地标3.svg');
    this.__scene.addImage('icon3', '/public/符号图层图标/地标4.svg');
    this.__scene.addImage('icon4', '/public/符号图层图标/地标5.svg');
    this.__scene.addImage('icon5', '/public/符号图层图标/地标6.svg');
    this.__scene.addImage('icon6', '/public/符号图层图标/地标7.svg');
    this.__scene.addImage('icon7', '/public/符号图层图标/地标8.svg');
  };

  //全局添加资源iconfont (fontFamily资源名称 fontPath文件资源 field映射字段属性值 unicode iconfont编码)
  public addIconfont = (
    fontFamily: string,
    fontPath: string,
    field: string,
    unicode: string
  ) => {
    this.__scene.addFontFace(fontFamily, fontPath);
    this.__scene.addIconFont(field, unicode);
  };

  //删除全局图片
  public removeImage = (id: string) => {
    if (!id) return;
    this.__scene.removeImage(id);
  };

  //删除全部图层
  public removeAllLayer = () => {
    this.__scene.removeAllLayer();
  };
  public szc = (zoom: number, center: Array<number>) => {
    this.__scene.setZoomAndCenter(zoom, center);
  };
}
// 坐标系转换
// ZLG.coord = (
//   position: TcoordInput,
//   from: TcoordFormTo = 'WGS84',
//   to: TcoordFormTo = 'GCJ02'
// ): TcoordInput => {
//   if (!position) {
//     return [];
//   }
//   return gcoord.transform(position, gcoord[from], gcoord[to]);
// };

//line data->geojson
// 数据转换
ZLG.createLineJSON = (data: number[] | number[][]) => {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: getCount(data) === 1 ? 'LineString' : 'MultiLineString',
          coordinates: data
        }
      }
    ]
  };
};

// polygon data->geojson
ZLG.createPolygonJSON = (data: number[][] | number[][][]) => {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: getCount(data) === 2 ? 'Polygon' : 'MultiPolygon',
          coordinates: data
        }
      }
    ]
  };
};

ZLG.createPointJSON = (data: number[] | number[][]) => {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiPoint',
          coordinates: data
        }
      }
    ]
  };
};

// 导出部分
export default ZLG;
export {
  Line, //画线
  ZoomControl, //缩放控件
  ScaleControl, //比例尺控件
  Full, //全屏控件
  Locate, //定位控件
  MouseLocationControl, //鼠标位置控件
  Tip, //提示框
  Polygon, //画多边形
  Point, //点
  BubblePoint,
  ShapeMapping,
  MarkerPoint, //mark
  RipplePoint,
  CylinderPoint,
  Aggregate,
  Luminance, //亮度图
  ScatterPoint,
  MultiPopup, //多popup
  RadarPoint,
  SimplePoint,
  TextPoint,
  SymbolPoint, //符号图
  IconfontPoint,
  Images, //图片
  ClassicHeatMap, //经典热力图 2D
  Classic3DHeatMap, //经典热力图 3D
  SquareHeatMap, //网格热力图 正
  CircleHeatMap, //网格热力图 圆
  HexagonHeatMap, //蜂窝热力图 2D
  HexagonColumnHeatMap, //蜂窝热力图 3D
  DrawTool, //绘制工具
  MiniMap, //鹰眼
  CityBuilding, //建筑物图层
  PopupLayer
};
