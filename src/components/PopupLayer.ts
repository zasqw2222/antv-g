import { LayerPopup } from '@antv/l7';
import { ILayerPopup, IItems } from '../Type/control';
class PopupLayer {
  private __scene: any;
  private __trigger: string;
  private __items: IItems[];
  private __laryer: any;
  constructor(scene: any, options: ILayerPopup = {}) {
    this.__scene = scene;
    this.__trigger = options?.trigger;
    this.__items = options?.items;
    this.__laryer = new LayerPopup({
      items: this.__items,
      trigger: this.__trigger
    });
  }

  add = () => {
    this.__scene.addPopup(this.__laryer);
    return this;
  };
}
export default PopupLayer;
