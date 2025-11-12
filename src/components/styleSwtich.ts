/*
 * @Author: your name
 * @Date: 2023-03-28 16:38:56
 * @Description:
 * @FilePath: /zl-g/src/components/styleSwtich.ts
 */

import { TStyle } from '../Type/types';

export const switchStyle = (style: string): TStyle => {
  if (style.includes('style')) {
    return style;
  } else {
    return {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: [style],
          tileSize: 256,
          bounds: [-180, -180, 180, 180],
          minzoom: 2,
          maxzoom: 18
        }
      },
      layers: [
        {
          id: 'tdt-img-tiles',
          type: 'raster',
          source: 'raster-tiles'
        }
      ]
    };
  }
};
