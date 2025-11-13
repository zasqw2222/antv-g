# antv-g

一个基于 AntV L7 构建的 GIS 地图可视化库，提供丰富的地图图层、控件和交互功能。

## 📦 项目信息

- **版本**: 1.0.18
- **描述**: GIS 地图可视化库
- **许可证**: MIT
- **作者**: zasqwzasqw2222@gmail.com
- **主页**: https://github.com/zasqw2222/antv-g

## ✨ 特性

- 🗺️ **多地图支持**: 支持高德地图、Mapbox 在线/离线地图、无底图模式
- 🎨 **丰富的图层类型**: 点、线、面、热力图、建筑物等多种图层
- 📍 **多样化的点样式**: 气泡图、柱状图、雷达图、散点图、符号图等 12+ 种点样式
- 🔥 **多种热力图**: 经典热力图（2D/3D）、网格热力图、蜂窝热力图等
- 🎮 **丰富的控件**: 缩放、比例尺、全屏、定位、鼠标位置、弹窗、标记等
- 🛠️ **绘制工具**: 支持地图绘制功能
- 📸 **地图截图**: 支持地图截图和导出
- 🎯 **图层管理**: 完整的图层显示/隐藏、层级控制、交互功能
- 📊 **数据转换**: 提供 GeoJSON 数据转换工具

## 🚀 安装

```bash
npm install antv-g
```

## 📋 依赖

### 核心依赖

- `@antv/l7`: 2.15.0 - AntV L7 核心库
- `@antv/l7-maps`: 2.15.0 - L7 地图适配器
- `@antv/l7-draw`: ^3.0.17 - 绘制工具
- `@antv/l7-leaflet`: 0.0.3 - Leaflet 适配器
- `@turf/turf`: ^6.5.0 - 地理空间分析库
- `leaflet`: ^1.9.3 - Leaflet 地图库
- `maptalks`: ^1.0.0-rc.18 - MapTalks 地图库
- `file-saver`: ^2.0.5 - 文件保存工具
- `html2canvas`: ^1.4.1 - HTML 转 Canvas
- `@mapbox/mapbox-gl-language`: ^1.0.1 - Mapbox 语言支持

## 🎯 快速开始

### 基础使用

```javascript
import ZLG from 'antv-g';

// 创建地图实例
const map = new ZLG({
  dom: '#map', // 地图容器 ID 或 DOM 元素
  map: {
    style: 'amap://styles/normal', // 地图样式
    token: 'your-token', // 地图 token（高德或 Mapbox）
    securityKey: 'your-security-key', // 高德安全密钥（可选）
    zoom: 10,
    center: [116.4, 39.9066],
    pitch: 0,
    minZoom: 2,
    maxZoom: 18
  }
});
```

### 添加点图层

```javascript
import { Point, BubblePoint } from 'antv-g';

// 简单点图层
const pointLayer = new Point(map.__scene);
pointLayer
  .setData(geoJSONData)
  .color('#ff0000')
  .size(10)
  .add();

// 气泡点图层
const bubbleLayer = new BubblePoint(map.__scene);
bubbleLayer
  .setData(geoJSONData)
  .color('#ff0000', '#00ff00')
  .size(10, 50)
  .add();
```

### 添加线图层

```javascript
import { Line } from 'antv-g';

const lineLayer = new Line(map.__scene);
lineLayer
  .setData(geoJSONData)
  .color('#0000ff')
  .size(2)
  .add();
```

### 添加面图层

```javascript
import { Polygon } from 'antv-g';

const polygonLayer = new Polygon(map.__scene);
polygonLayer
  .setData(geoJSONData)
  .color('#00ff00')
  .add();
```

### 添加热力图

```javascript
import { ClassicHeatMap, HexagonHeatMap } from 'antv-g';

// 经典热力图
const heatMap = new ClassicHeatMap(map.__scene);
heatMap
  .setData(geoJSONData)
  .add();

// 蜂窝热力图
const hexHeatMap = new HexagonHeatMap(map.__scene);
hexHeatMap
  .setData(geoJSONData)
  .add();
```

### 添加控件

```javascript
import { ZoomControl, ScaleControl, Full, Locate, DrawTool } from 'antv-g';

// 缩放控件
const zoom = map.register(ZoomControl);
zoom.add();

// 比例尺控件
const scale = map.register(ScaleControl);
scale.add();

// 全屏控件
const fullscreen = map.register(Full);
fullscreen.add();

// 定位控件
const locate = map.register(Locate);
locate.add();

// 绘制工具（多边形）
const drawTool = map.register(DrawTool, 'polygon');
drawTool.add().show();
```

## 📚 API 文档

### ZLG 主类

#### 构造函数

```typescript
new ZLG(props: IZLG)
```

**参数**:
- `dom`: HTMLElement | string - 地图容器 DOM 元素或选择器
- `map`: IMap - 地图配置对象

#### 地图控制方法

- `setZoom(zoom: number)`: 设置地图缩放等级
- `getZoom()`: 获取地图缩放等级
- `getCenter()`: 获取地图中心点坐标 `[lng, lat]`
- `getSize()`: 获取地图尺寸
- `getPitch()`: 获取地图倾斜角度
- `getContainer()`: 获取地图容器 DOM
- `setMap(url: string)`: 设置地图样式
- `setCenter(lnglat: [number, number])`: 设置地图中心点
- `setRotation(rotation: number)`: 设置地图旋转角度
- `moveTo(lnglat: [number, number])`: 地图平移到指定位置
- `moveBy(x: number, y: number)`: 地图按像素平移
- `setPitch(pitch: number)`: 设置地图倾斜角度
- `setStatus(status: IStatusOptions)`: 设置地图状态（拖拽、缩放、键盘等）
- `ptll(point: [number, number])`: 像素坐标转经纬度
- `lltp(lnglat: [number, number])`: 经纬度转像素坐标
- `destroy()`: 销毁地图实例

#### 事件监听

- `on(type: Tlistener, callback: Function)`: 监听地图事件
- `off(type: Tlistener, callback: Function)`: 移除事件监听

支持的事件类型：
- `loaded`, `mapmove`, `movestart`, `moveend`
- `zoomchange`, `zoomstart`, `zoomend`
- `resize`, `click`, `dblclick`
- `mousemove`, `mousewheel`, `mouseover`, `mouseout`
- `mouseup`, `mousedown`, `contextmenu`
- `dragstart`, `dragging`, `dragend`
- `webglcontextlost`

#### 图层管理

- `register(components: any, ...rest)`: 注册组件，返回组件实例。例如：`map.register(DrawTool, 'polygon')` 或 `map.register(ZoomControl)`
- `removeAllLayer()`: 删除所有图层
- `szc(zoom: number, center: [number, number])`: 设置缩放和中心点

#### 图片管理

- `addImage(name: string, url: HTMLImageElement | string | File)`: 添加全局图片
- `addStaticImage()`: 加载静态图片（8 个地标图标）
- `addIconfont(fontFamily: string, fontPath: string, field: string, unicode: string)`: 添加 iconfont 资源
- `removeImage(id: string)`: 删除全局图片

#### 地图截图

- `screenshot(name?: string)`: 截图并保存（默认文件名: map.png）

#### 静态方法

- `ZLG.createLineJSON(data: number[] | number[][])`: 创建线 GeoJSON
- `ZLG.createPointJSON(data: number[] | number[][])`: 创建点 GeoJSON
- `ZLG.createPolygonJSON(data: number[][] | number[][][])`: 创建面 GeoJSON

### BaseLayer 基础图层类

所有图层都继承自 `BaseLayer`，提供以下通用方法：

#### 数据设置

- `setData(data: GeoJSON, parser?: { type: string, x: string, y: string })`: 设置图层数据

#### 样式设置

- `color(color: string, colors?: string | Array<string> | Function)`: 设置颜色
- `size(size: number | string, sizes?: Array<number> | Function)`: 设置大小
- `shape(shape: string, shapes?: Array<string> | Function)`: 设置形状
- `style(style: object)`: 设置样式对象

#### 图层控制

- `add()`: 添加图层到地图
- `show()`: 显示图层
- `hide()`: 隐藏图层
- `remove()`: 移除图层
- `setIndex(zIndex: number)`: 设置图层层级
- `setMinZoom(zoom: number)`: 设置最小缩放级别
- `setMaxZoom(zoom: number)`: 设置最大缩放级别
- `fitBounds()`: 缩放到图层范围
- `update()`: 更新图层渲染

#### 交互功能

- `active(option: ActiveOption | boolean)`: 设置 hover 高亮
- `setActive(featureId: string | number)`: 设置指定元素 hover 高亮
- `select(option: ActiveOption | boolean)`: 设置点击高亮
- `setSelect(featureId: string | number, option?: ActiveOption)`: 设置指定元素点击选中
- `click(callback: Function)`: 点击事件回调

### Layer 图层管理类

- `getAllLayer()`: 获取所有图层
- `visiable(name: string)`: 显示指定图层
- `hide(name: string)`: 隐藏指定图层
- `delete(name: string)`: 删除指定图层
- `isVisiable(name: string)`: 获取图层是否显示
- `setIndex(name: string, index: number)`: 设置图层层级

## 🎨 图层类型

### 基础图层

- **Point**: 基础点图层
- **Line**: 线图层
- **Polygon**: 面图层
- **Images**: 图片图层
- **CityBuilding**: 城市建筑物图层
- **PopupLayer**: 弹窗图层

### 点样式图层（Points）

- **BubblePoint**: 气泡图
- **ShapeMapping**: 形状映射气泡图
- **RipplePoint**: 水波纹气泡图
- **CylinderPoint**: 3D 柱状图
- **Aggregate**: 聚合图
- **Luminance**: 亮度图
- **ScatterPoint**: 散点图
- **RadarPoint**: 雷达图
- **SimplePoint**: 简单点
- **TextPoint**: 文本标注
- **SymbolPoint**: 符号图
- **IconfontPoint**: Iconfont 图标点

### 热力图图层（HeatMapLayer）

- **ClassicHeatMap**: 经典热力图（2D）
- **Classic3DHeatMap**: 经典热力图（3D）
- **SquareHeatMap**: 网格热力图（正方形）
- **CircleHeatMap**: 网格热力图（圆形）
- **HexagonHeatMap**: 蜂窝热力图（2D）
- **HexagonColumnHeatMap**: 蜂窝热力图（3D）

### 控件（Control）

- **ZoomControl**: 缩放控件
- **ScaleControl**: 比例尺控件
- **Full**: 全屏控件
- **Locate**: 定位控件
- **MouseLocationControl**: 鼠标位置控件
- **Tip**: 提示框控件
- **MarkerPoint**: 标记点控件
- **MultiPopup**: 多弹窗控件
- **MiniMap**: 鹰眼图控件

### 工具

- **DrawTool**: 绘制工具，支持以下绘制类型：
  - `'point'`: 点
  - `'line'`: 线
  - `'polygon'`: 多边形
  - `'rect'`: 矩形
  - `'circle'`: 圆形

使用示例：
```javascript
import { DrawTool } from 'antv-g';

// 创建多边形绘制工具
const drawTool = map.register(DrawTool, 'polygon');
drawTool
  .setOptions({ editable: true })  // 设置选项
  .add()                            // 添加到地图
  .show();                          // 显示并启用

// 获取绘制数据
const data = drawTool.getData();

// 禁用绘制
drawTool.disable();

// 清除绘制
drawTool.clear();
```

## 🗺️ 地图样式支持

### 高德地图

- `amap://styles/normal` - 标准样式
- `amap://styles/dark` - 暗色样式
- `amap://styles/light` - 浅色样式
- 自定义样式（需要 securityKey）

### Mapbox

- `mapbox://styles/mapbox/streets-v11` - 街道样式
- `mapbox://styles/mapbox/outdoors-v11` - 户外样式
- `mapbox://styles/mapbox/light-v10` - 浅色样式
- `mapbox://styles/mapbox/dark-v10` - 暗色样式
- `mapbox://styles/mapbox/satellite-v9` - 卫星样式
- 自定义样式 URL

### 其他

- `blank` - 无底图模式

## 📁 项目结构

```
antv-g/
├── src/
│   ├── components/          # 组件目录
│   │   ├── BaseLayer.ts     # 基础图层类
│   │   ├── Layer.ts         # 图层管理类
│   │   ├── MapType.ts       # 地图类型类
│   │   ├── Points/          # 点样式图层
│   │   ├── HeatMapLayer/    # 热力图图层
│   │   ├── Control/         # 控件组件
│   │   ├── Line.ts          # 线图层
│   │   ├── Polygon.ts       # 面图层
│   │   ├── PointsLayer.ts  # 点图层
│   │   └── ...
│   ├── Type/                # TypeScript 类型定义
│   ├── index.ts             # 入口文件
│   ├── option.ts            # 配置选项
│   └── geojsonType.ts       # GeoJSON 类型定义
├── public/                  # 静态资源
│   └── 符号图层图标/        # 地标图标
├── package.json
├── tsconfig.json
└── rollup.config.js         # 构建配置
```

## 🛠️ 开发

### 构建

```bash
npm run build
```

### 开发模式（监听文件变化）

```bash
npm start
```

### 技术栈

- **TypeScript**: 类型支持
- **Rollup**: 模块打包
- **AntV L7**: 地图渲染引擎
- **Babel**: JavaScript 编译
- **PostCSS**: CSS 处理

## 📝 类型定义

项目使用 TypeScript 编写，提供完整的类型定义。主要类型包括：

- `IZLG`: 主类初始化配置
- `IMap`: 地图配置
- `Tcoord`: 坐标类型 `[number, number]`
- `GeoJSON`: GeoJSON 数据格式
- `Tlistener`: 事件监听类型
- `IStatusOptions`: 地图状态选项

## 🔧 配置说明

### 地图配置 (IMap)

```typescript
interface IMap {
  type?: string;              // 地图类型，如 'leaflet'
  urlTemplate?: string;        // Leaflet 地图 URL 模板
  style: string;               // 地图样式
  zoom?: number;               // 缩放级别
  center?: [number, number];   // 中心点坐标
  pitch?: number;              // 俯仰角
  minZoom?: number;            // 最小缩放级别
  maxZoom?: number;            // 最大缩放级别
  zoomEnable?: boolean;        // 是否允许缩放
  pitchWithRotate?: boolean;   // 是否开启旋转
}
```

## 📄 许可证

MIT

## 👤 作者

zasqwzasqw2222@gmail.com

## 🔗 相关链接

- [AntV L7 文档](https://l7.antv.antgroup.com/)
- [GitHub 仓库](https://github.com/zasqw2222/antv-g)

## 📌 注意事项

1. 使用高德地图自定义样式时，需要配置 `securityKey`
2. 使用 Mapbox 在线地图时，需要配置 `token`
3. 地图截图功能需要浏览器支持 Canvas API
4. 部分功能依赖 WebGL 支持

## 🐛 问题反馈

如有问题或建议，请提交 Issue 到 GitHub 仓库。

