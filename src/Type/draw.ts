/*
 * @Author: your name
 * @Date: 2023-04-06 14:39:57
 * @Description:
 * @FilePath: /zl-g/src/Type/draw.ts
 */

export type TdrawType = 'point' | 'line' | 'polygon' | 'rect' | 'circle';
import { Feature } from '../geojsonType';
export interface IOptions {
  autoActive?: boolean; // 是否自动激活
  editable?: boolean; // 是否可编辑
  multiple?: boolean; // Draw 是否支持绘制多个绘制物
  style?: IStyle;
  helper?: string | Element | DocumentFragment | boolean; // 是否显示辅助线
  keyboard?: IKeyboard; // 是否支持键盘操作
  history?: IHistory; //保存历史绘制数据的相关配置，涉及到回退操作的最大操作次数
  showMidPoint?: boolean; // 是否显示中间点
  distanceOptions?: IDistanceOptions; // 距离量算相关配置
  adsorbOptions?: false | IAdsorbOptions; //吸附相关配置
  areaOptions?: false | IAreaOptions; // 面积量算相关配置
  liveUpdate?: boolean; // 在绘制面过程中，面是否跟随鼠标动态更新
  trigger?: 'click' | 'drag'; // 选择绘制方式，可以通过 点击 或者 拖拽 的方式进行绘制
  circleSteps?: number; // 绘制圆时，圆的边数
}

export interface IAreaOptions {
  format?: (area: number) => string; // 格式化面积平方米的函数
}

export interface IAdsorbOptions {
  pointAdsorbPixel?: number; // 被吸附物上点吸附的像素值，当值 ≤ 0 时不吸附点
  lineAdsorbPixel?: number; // 被吸附物上线吸附的像素值，当值 ≤ 0 时不吸附线
}

export interface IDistanceOptions {
  showTotalDistance?: boolean; // 是否展示线段总长度，但是分段距离会不展示
  showDashDistance?: boolean; // 是否展示虚线的长度
  format?: (distance: number) => string; // 格式化距离
}

export interface IHistory {
  maxSize?: number; // 最大历史记录数
}

export interface IKeyboard {
  revert?: TkeyboardType; //回退至上一次历史记录
  redo?: TkeyboardType; //撤销上一次回退
  remove?: TkeyboardType; //删除当前激活的绘制物
}

export type TkeyboardType = string[] | false;

export interface IStyle {
  point: IPointStyleItem;
  line: ILineStyleItem;
  polygon: IPolygonItem;
  //   midPoint: IMidPointStyle;
  //   dashLine: IDashLineStyle;
  //   text: ITextStyle;
}

export interface IPointStyleItem {
  color?: string; // 填充色
  shape?: string; // 形状
  size?: number; // 大小
  stroke?: string; // 边框颜色
}

export interface ILineStyleItem {
  color: string; // 填充色
  size: number; // 大小
}

export interface IPolygonItem {
  color: string; // 填充色
}

export type Tdata = Feature[] | number[] | number[][] | number[][];
