/*
 * @Author: your name
 * @Date: 2023-04-04 17:18:19
 * @Description:
 * @FilePath: /zl-g/src/components/ImageLayer.ts
 */
import BaseLayer from './BaseLayer';
import { ImageLayer } from '@antv/l7';
import { IImageLayerOptions, imageLayerExtent } from '../Type/imagelayer';
import { imageLayerOptions } from '../options/imageLayer';

class Image extends BaseLayer {
  constructor(scene: any, options?: IImageLayerOptions) {
    super(scene);
    const _options = { ...imageLayerOptions, ...options };
    this.layer = new ImageLayer(_options);
  }
  //   设置透明度
  public setOpacity = (opacity: number = 1) => {
    this.layer.style({ opacity });
    return this;
  };
  //   设置数据
  public setData = (
    data: string | any,
    parser:
      | {
          type: string;
          x: string;
          y: string;
        }
      | imageLayerExtent
  ) => {
    if (!data || !parser) {
      throw new Error('data or parser is not set');
    }

    if (!Array.isArray(parser)) {
      throw new Error('parser格式不正确');
    }
    this.data = data;
    this.layer.source(data, {
      parser: {
        type: 'image',
        extent: parser
      }
    });
    return this;
  };

  public add = () => {
    if (!this.data) {
      throw new Error('请先设置数据_ImageLayer_add');
    }
    this.scene.addLayer(this.layer);
    return this;
  };
}

export default Image;
