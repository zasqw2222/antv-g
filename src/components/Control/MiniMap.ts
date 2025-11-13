/*
 * @Author: zasqw2222
 * @Date: 2023-04-10 13:12:05
 * @Description:
 * @FilePath: /antv-g/src/components/Control/MiniMap.ts
 */

import MinimapCore, { TPositions, MiniMapOptions } from '../MiniMapCore';
import { switchStyle } from '../styleSwtich';
class MiniMap {
  scene: any;
  mini: any;
  options: MiniMapOptions;
  private hawkEye;
  constructor(scene: any, options: MiniMapOptions) {
    this.scene = scene;
    this.mini = null;
    this.options = options;
  }

  add = (position?: TPositions) => {
    //高德地图鹰眼
    if (this.scene.__style.includes('amap')) {
      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      window.AMap.plugin(['AMap.HawkEye'], () => {
        this.hawkEye = new (AMap as any).HawkEye({
          mapStyle: this.scene.__style
        });
        this.scene.map.addControl(this.hawkEye);
      });
    } else {
      const _options = {
        ...this.options,
        ...{
          id: 'mapbox-minimap',
          width: 320,
          height: 180,
          style: switchStyle(this.scene.__style) as string,
          center: this.scene.getCenter(),
          togglePosition: 'bottomleft'
        }
      };
      this.mini = new MinimapCore(_options);
      this.scene.map.addControl(this.mini, position);
    }

    return this;
  };

  remove = () => {
    if (this.scene.__style.includes('amap') && this.hawkEye) {
      this.scene.map.removeControl(this.hawkEye);
      //  this.hawkEye.remove()
    } else {
      if (this.scene.map.hasControl(this.mini)) {
        this.scene.map.removeControl(this.mini);
      }
      return this;
    }
  };
}

export default MiniMap;
