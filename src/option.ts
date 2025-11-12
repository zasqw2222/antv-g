/*
 * @Author: your name
 * @Date: 2023-03-28 17:02:37
 * @Description:
 * @FilePath: /zl-g/src/option.ts
 */
import {
  IControlLocate,
  IcontrolMouseLocation,
  IMarker,
  IPopup
} from './Type/types';
import { IMap } from './Type/index';
// import gcoord from 'gcoord';
export const mapOptions: IMap = {
  style: '',
  zoom: 1,
  center: [116.4, 39.9066],
  pitch: 0,
  minZoom: 2,
  maxZoom: 18,
  zoomEnable:true,
  pitchWithRotate: true
};

// export const locateOptions: IControlLocate = {
//   transform: (position) => {
//     const _position = gcoord.transform(position, gcoord.WGS84, gcoord.GCJ02);
//     return _position;
//   },
//   position: 'topright'
// };

export const mouseLocationOptions: IcontrolMouseLocation = {
  transform: (position) => {
    return position;
  }
};

export const popupOptions: IPopup = {
  title: '标题',
  text: '内容'
};

//判断几维数组
export const getCount = (arr) => {
  let list = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        list.push(arr[i][j]);
      }
    }
  }
  if (list.length) {
    num = 1;
    num += getCount(list);
  }
  return num;
};

//转成blob格式
export const dataURLtoBlob = (dataurl: string) => {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
