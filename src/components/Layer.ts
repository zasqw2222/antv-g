/*
 * @Author: zasqw2222
 * @Date: 2023-03-29 13:53:09
 * @Description:
 * @FilePath: /antv-g/src/components/Layer.ts
 */

class Layer {
  scene: any;
  constructor(scene: any) {
    this.scene = scene;
  }
  // 获取所有图层
  getAllLayer = (): any[] => {
    return this.scene.getLayers();
  };
  // 让图层显示
  visiable = (name: string) => {
    const layer = this.scene.getLayerByName(name);
    if (layer) {
      layer.show();
    } else {
      return undefined;
    }
  };
  // 让图层隐藏
  hide = (name: string) => {
    const layer = this.scene.getLayerByName(name);
    if (layer) {
      layer.hide();
    } else {
      return undefined;
    }
  };
  // 删除图层
  delete = (name: string) => {
    const layer = this.scene.getLayerByName(name);
    if (layer) {
      this.scene.removeLayer(layer);
    } else {
      return undefined;
    }
  };
  // 获取图层是否显示
  isVisiable = (name: string) => {
    const layer = this.scene.getLayerByName(name);
    return layer.isVisible();
  };
  // 设置图层 index
  setIndex = (name: string, index: number) => {
    const layer = this.scene.getLayerByName(name);
    if (layer) {
      layer.setIndex(index);
    } else {
      return undefined;
    }
  };
}

export default Layer;
