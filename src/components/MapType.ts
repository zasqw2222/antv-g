import { Tdom, IMapBoxOnline } from '../Type/index';
import { Scene } from '@antv/l7';
import { Mapbox, GaodeMap } from '@antv/l7-maps';
import { mapOptions } from '../option';
import { switchStyle } from '../components/styleSwtich';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

const mapboxgl = window.mapboxgl;

class MapType {
  public __scene: any;
  public dom: Tdom;
  public Layer: any;
  public map: any;
  constructor() {}

  //高德在线
  addGaodeMap = (style: string, token: string, key: string) => {
    const _map: any = this.returnGaodeMap(style, token);
    //自定义样式需要高德密钥 挂载window
    if (key) {
      (window as any)._AMapSecurityConfig = {
        securityJsCode: key
      };
    }
    this.__scene = new Scene({
      id: this.dom,
      map: _map,
      logoVisible: false,
      antialias: true
    });
    this.__scene.__style = style;
  };

  private returnGaodeMap = (style: string, token: string) => {
    const _mapOptions = { ...mapOptions, ...this.map };
    const {
      zoom = 1,
      center = [116.4, 39.9066],
      pitch = 0,
      minZoom = 2,
      maxZoom = 18,
      zoomEnable = true,
      pitchWithRotate = true
    } = _mapOptions;

    const _map = new GaodeMap({
      style: style,
      token: token,
      type: 'amap',
      zoom,
      center,
      pitch,
      minZoom,
      maxZoom,
      zoomEnable, //缩放滚动 //****需求是 视角锁定功能控制缩放滚动、是否允许地图拖拽、是否允许键盘事件
      dragEnable: zoomEnable, //是否允许地图拖拽
      KeyboardEnable: zoomEnable, //是否允许键盘事件
      pitchWithRotate,
      WebGLParams: {
        preserveDrawingBuffer: true
      },
      plugin: ['AMap.HawkEye'],
      // features: ['bg', 'road', 'building', 'point'] 取消文本标注
    });
    return _map;
  };

  //mapbox在线地图
  addMapBoxOnline = ({ style, token }: IMapBoxOnline) => {
    const _map: any = this.returnMap(style, token);
    this.__scene = new Scene({
      id: this.dom,
      map: new Mapbox({
        mapInstance: _map,
        token: token
      }),
      logoVisible: false,
      antialias: true
    });

    this.__scene.__style = style;
  };

  //MapBox离线地图
  addMapBox = (style: string) => {
    const _map: any = this.returnMap(style);
    this.__scene = new Scene({
      id: this.dom,
      map: new Mapbox({
        mapInstance: _map
      }),
      logoVisible: false,
      antialias: true
    });
    this.__scene.__style = style;
  };

  //无底图
  addMapBoxNoStyle = (style) => {
    const _mapOptions = { ...mapOptions, ...this.map };
    const {
      zoom = 1,
      center = [116.4, 39.9066],
      pitch = 0,
      minZoom = 2,
      maxZoom = 18,
      zoomEnable = true,
      pitchWithRotate = true
    } = _mapOptions;
    this.__scene = new Scene({
      id: this.dom,
      map: new Mapbox({
        style: style,
        zoom,
        center,
        pitch,
        minZoom,
        maxZoom,
        zoomEnable,
        pitchWithRotate,
        preserveDrawingBuffer: true
      }),
      logoVisible: false,
      antialias: true
    });

    this.__scene.__style = style;
  };

  // 创建mapbox实例
  private returnMap = (style: string, token?: string): any => {
    const _mapOptions = { ...mapOptions, ...this.map };
    const {
      zoom = 1,
      center = [116.4, 39.9066],
      pitch = 0,
      minZoom = 2,
      maxZoom = 18,
      zoomEnable = true,
      pitchWithRotate = true
    } = _mapOptions;
    if (token) {
      mapboxgl.accessToken = token;
    }
    const control = new MapboxLanguage({
      defaultLanguage: 'zh-Hans' //默认语言
    });
    const _map = new mapboxgl.Map({
      container: this.dom,
      style: switchStyle(style),
      zoom,
      center,
      pitch,
      minZoom,
      maxZoom,
      scrollZoom: zoomEnable,
      pitchWithRotate,
      preserveDrawingBuffer: true
    });
    _map.addControl(control);
    return _map;
  };
}

export default MapType;
