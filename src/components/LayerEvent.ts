/*
 * @Author: your name
 * @Date: 2023-04-12 11:26:32
 * @Description:
 * @FilePath: /zl-g/src/components/LayerEvent.ts
 */

class LayerEvent {
  public shap1: string;
  public shap2: Array<string> | Function | 'text';
  constructor() {
    this.shap1 = 'circle';
    this.shap2 = null;
  }
  //   点的部分
  circle = () => {
    // 圆
    this.shap1 = 'circle';
    return this;
  };
  square = () => {
    // 方形
    this.shap1 = 'square';
    return this;
  };
  hexagon = () => {
    // 六边形
    this.shap1 = 'hexagon';
    return this;
  };
  triangle = () => {
    // 三角形
    this.shap1 = 'triangle';
    return this;
  };
  pentagon = () => {
    // 五边形
    this.shap1 = 'pentagon';
    return this;
  };
  octogon = () => {
    // 八边形
    this.shap1 = 'octogon';
    return this;
  };
  hexagram = () => {
    // 六角星
    this.shap1 = 'hexagram';
    return this;
  };
  rhombus = () => {
    // 菱形
    this.shap1 = 'rhombus';
    return this;
  };
  vesica = () => {
    // 菱形
    this.shap1 = 'vesica';
    return this;
  };
  cylinder = () => {
    // 圆柱
    this.shap1 = 'cylinder';
    return this;
  };
  triangleColumn = () => {
    // 三角柱
    this.shap1 = 'triangleColumn';
    return this;
  };
  squareColumn = () => {
    // 方柱
    this.shap1 = 'squareColumn';
    return this;
  };
  hexagonColumn = () => {
    // 六边柱
    this.shap1 = 'hexagonColumn';
    return this;
  };
  simple = () => {
    // 简单
    this.shap1 = 'simple';
    return this;
  };
  text = (filed: string) => {
    // 文本
    this.shap1 = filed;
    this.shap2 = 'text';
    return this;
  };
  radar = () => {
    // 雷达图
    this.shap1 = 'radar';
    return this;
  };
  //   线的部分
  line = () => {
    // 线
    this.shap1 = 'line';
    return this;
  };
  arc = () => {
    // 弧线
    this.shap1 = 'arc';
    return this;
  };
  arc3d = () => {
    // 3D弧线
    this.shap1 = 'arc3d';
    return this;
  };
  greatcircle = () => {
    // 大圆航线
    this.shap1 = 'greatcircle';
    return this;
  };
  wall = () => {
    // 墙
    this.shap1 = 'wall';
    return this;
  };
  //   面的部分
  fill = () => {
    // 填充
    this.shap1 = 'fill';
    return this;
  };
  extrude = () => {
    // 3d几何体
    this.shap1 = 'extrude';
    return this;
  };
  water = () => {
    // 水面
    this.shap1 = 'water';
    return this;
  };
  ocean = () => {
    // 海面
    this.shap1 = 'ocean';
    return this;
  };
  pointFill = () => {
    // 点填充
    this.shap1 = 'point_fill';
    return this;
  };
  pointImage = () => {
    // 点图片
    this.shap1 = 'point_image';
    return this;
  };
  pointExtrude = () => {
    // 绘制柱子
    this.shap1 = 'point_extrude';
    return this;
  };
  //   热力图部分
  heatmap = () => {
    // 热力图
    this.shap1 = 'heatmap';
    return this;
  };
  heatmap3d = () => {
    // 3d热力图
    this.shap1 = 'heatmap3D';
    return this;
  };
}

export default LayerEvent;
