/*
 * @Author: your name
 * @Date: 2023-04-06 10:40:29
 * @Description:
 * @FilePath: /zl-g/src/Type/imagelayer.ts
 */

export interface IImageLayerOptions {
  name?: string;
  zIndex?: number;
  minZoom?: number;
  maxZoom?: number;
  autoFit?: boolean;
}

export type imageLayerExtent = [number, number, number, number];
