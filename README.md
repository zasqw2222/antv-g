# antv-g

A GIS map visualization library built on AntV L7, providing rich map layers, controls, and interactive features.

## 📦 Project Information

- **Version**: 1.0.18
- **Description**: GIS map visualization library
- **License**: MIT
- **Author**: zasqwzasqw2222@gmail.com
- **Homepage**: https://github.com/zasqw2222/antv-g

## ✨ Features

- 🗺️ **Multiple Map Support**: Supports Gaode Map, Mapbox online/offline maps, and blank map mode
- 🎨 **Rich Layer Types**: Points, lines, polygons, heatmaps, buildings, and more
- 📍 **Diverse Point Styles**: Bubble charts, column charts, radar charts, scatter plots, symbol charts, and 12+ point styles
- 🔥 **Multiple Heatmaps**: Classic heatmaps (2D/3D), grid heatmaps, hexagonal heatmaps, etc.
- 🎮 **Rich Controls**: Zoom, scale, fullscreen, locate, mouse location, popup, marker, etc.
- 🛠️ **Drawing Tools**: Supports map drawing functionality
- 📸 **Map Screenshot**: Supports map screenshot and export
- 🎯 **Layer Management**: Complete layer show/hide, z-index control, and interactive features
- 📊 **Data Conversion**: Provides GeoJSON data conversion tools

## 🚀 Installation

```bash
npm install antv-g
```

## 📋 Dependencies

### Core Dependencies

- `@antv/l7`: 2.15.0 - AntV L7 core library
- `@antv/l7-maps`: 2.15.0 - L7 map adapters
- `@antv/l7-draw`: ^3.0.17 - Drawing tools
- `@antv/l7-leaflet`: 0.0.3 - Leaflet adapter
- `@turf/turf`: ^6.5.0 - Geospatial analysis library
- `leaflet`: ^1.9.3 - Leaflet map library
- `maptalks`: ^1.0.0-rc.18 - MapTalks map library
- `file-saver`: ^2.0.5 - File saving utility
- `html2canvas`: ^1.4.1 - HTML to Canvas converter
- `@mapbox/mapbox-gl-language`: ^1.0.1 - Mapbox language support

## 🎯 Quick Start

### Basic Usage

```javascript
import ZLG from 'antv-g';

// Create map instance
const map = new ZLG({
  dom: '#map', // Map container ID or DOM element
  map: {
    style: 'amap://styles/normal', // Map style
    token: 'your-token', // Map token (Gaode or Mapbox)
    securityKey: 'your-security-key', // Gaode security key (optional)
    zoom: 10,
    center: [116.4, 39.9066],
    pitch: 0,
    minZoom: 2,
    maxZoom: 18
  }
});
```

### Adding Point Layer

```javascript
import { Point, BubblePoint } from 'antv-g';

// Simple point layer
const pointLayer = new Point(map.__scene);
pointLayer
  .setData(geoJSONData)
  .color('#ff0000')
  .size(10)
  .add();

// Bubble point layer
const bubbleLayer = new BubblePoint(map.__scene);
bubbleLayer
  .setData(geoJSONData)
  .color('#ff0000', '#00ff00')
  .size(10, 50)
  .add();
```

### Adding Line Layer

```javascript
import { Line } from 'antv-g';

const lineLayer = new Line(map.__scene);
lineLayer
  .setData(geoJSONData)
  .color('#0000ff')
  .size(2)
  .add();
```

### Adding Polygon Layer

```javascript
import { Polygon } from 'antv-g';

const polygonLayer = new Polygon(map.__scene);
polygonLayer
  .setData(geoJSONData)
  .color('#00ff00')
  .add();
```

### Adding Heatmap

```javascript
import { ClassicHeatMap, HexagonHeatMap } from 'antv-g';

// Classic heatmap
const heatMap = new ClassicHeatMap(map.__scene);
heatMap
  .setData(geoJSONData)
  .add();

// Hexagonal heatmap
const hexHeatMap = new HexagonHeatMap(map.__scene);
hexHeatMap
  .setData(geoJSONData)
  .add();
```

### Adding Controls

```javascript
import { ZoomControl, ScaleControl, Full, Locate, DrawTool } from 'antv-g';

// Zoom control
const zoom = map.register(ZoomControl);
zoom.add();

// Scale control
const scale = map.register(ScaleControl);
scale.add();

// Fullscreen control
const fullscreen = map.register(Full);
fullscreen.add();

// Locate control
const locate = map.register(Locate);
locate.add();

// Drawing tool (polygon)
const drawTool = map.register(DrawTool, 'polygon');
drawTool.add().show();
```

## 📚 API Documentation

### ZLG Main Class

#### Constructor

```typescript
new ZLG(props: IZLG)
```

**Parameters**:
- `dom`: HTMLElement | string - Map container DOM element or selector
- `map`: IMap - Map configuration object

#### Map Control Methods

- `setZoom(zoom: number)`: Set map zoom level
- `getZoom()`: Get map zoom level
- `getCenter()`: Get map center coordinates `[lng, lat]`
- `getSize()`: Get map size
- `getPitch()`: Get map pitch angle
- `getContainer()`: Get map container DOM
- `setMap(url: string)`: Set map style
- `setCenter(lnglat: [number, number])`: Set map center point
- `setRotation(rotation: number)`: Set map rotation angle
- `moveTo(lnglat: [number, number])`: Pan map to specified position
- `moveBy(x: number, y: number)`: Pan map by pixels
- `setPitch(pitch: number)`: Set map pitch angle
- `setStatus(status: IStatusOptions)`: Set map status (drag, zoom, keyboard, etc.)
- `ptll(point: [number, number])`: Convert pixel coordinates to longitude/latitude
- `lltp(lnglat: [number, number])`: Convert longitude/latitude to pixel coordinates
- `destroy()`: Destroy map instance

#### Event Listening

- `on(type: Tlistener, callback: Function)`: Listen to map events
- `off(type: Tlistener, callback: Function)`: Remove event listener

Supported event types:
- `loaded`, `mapmove`, `movestart`, `moveend`
- `zoomchange`, `zoomstart`, `zoomend`
- `resize`, `click`, `dblclick`
- `mousemove`, `mousewheel`, `mouseover`, `mouseout`
- `mouseup`, `mousedown`, `contextmenu`
- `dragstart`, `dragging`, `dragend`
- `webglcontextlost`

#### Layer Management

- `register(components: any, ...rest)`: Register component and return component instance. For example: `map.register(DrawTool, 'polygon')` or `map.register(ZoomControl)`
- `removeAllLayer()`: Remove all layers
- `szc(zoom: number, center: [number, number])`: Set zoom and center point

#### Image Management

- `addImage(name: string, url: HTMLImageElement | string | File)`: Add global image
- `addStaticImage()`: Load static images (8 landmark icons)
- `addIconfont(fontFamily: string, fontPath: string, field: string, unicode: string)`: Add iconfont resource
- `removeImage(id: string)`: Remove global image

#### Map Screenshot

- `screenshot(name?: string)`: Take screenshot and save (default filename: map.png)

#### Static Methods

- `ZLG.createLineJSON(data: number[] | number[][])`: Create line GeoJSON
- `ZLG.createPointJSON(data: number[] | number[][])`: Create point GeoJSON
- `ZLG.createPolygonJSON(data: number[][] | number[][][])`: Create polygon GeoJSON

### BaseLayer Base Layer Class

All layers inherit from `BaseLayer`, providing the following common methods:

#### Data Setting

- `setData(data: GeoJSON, parser?: { type: string, x: string, y: string })`: Set layer data

#### Style Setting

- `color(color: string, colors?: string | Array<string> | Function)`: Set color
- `size(size: number | string, sizes?: Array<number> | Function)`: Set size
- `shape(shape: string, shapes?: Array<string> | Function)`: Set shape
- `style(style: object)`: Set style object

#### Layer Control

- `add()`: Add layer to map
- `show()`: Show layer
- `hide()`: Hide layer
- `remove()`: Remove layer
- `setIndex(zIndex: number)`: Set layer z-index
- `setMinZoom(zoom: number)`: Set minimum zoom level
- `setMaxZoom(zoom: number)`: Set maximum zoom level
- `fitBounds()`: Zoom to layer bounds
- `update()`: Update layer rendering

#### Interactive Features

- `active(option: ActiveOption | boolean)`: Set hover highlight
- `setActive(featureId: string | number)`: Set hover highlight for specified element
- `select(option: ActiveOption | boolean)`: Set click highlight
- `setSelect(featureId: string | number, option?: ActiveOption)`: Set click selection for specified element
- `click(callback: Function)`: Click event callback

### Layer Management Class

- `getAllLayer()`: Get all layers
- `visiable(name: string)`: Show specified layer
- `hide(name: string)`: Hide specified layer
- `delete(name: string)`: Delete specified layer
- `isVisiable(name: string)`: Get whether layer is visible
- `setIndex(name: string, index: number)`: Set layer z-index

## 🎨 Layer Types

### Base Layers

- **Point**: Base point layer
- **Line**: Line layer
- **Polygon**: Polygon layer
- **Images**: Image layer
- **CityBuilding**: City building layer
- **PopupLayer**: Popup layer

### Point Style Layers (Points)

- **BubblePoint**: Bubble chart
- **ShapeMapping**: Shape mapping bubble chart
- **RipplePoint**: Ripple bubble chart
- **CylinderPoint**: 3D column chart
- **Aggregate**: Aggregate chart
- **Luminance**: Luminance chart
- **ScatterPoint**: Scatter plot
- **RadarPoint**: Radar chart
- **SimplePoint**: Simple point
- **TextPoint**: Text annotation
- **SymbolPoint**: Symbol chart
- **IconfontPoint**: Iconfont icon point

### Heatmap Layers (HeatMapLayer)

- **ClassicHeatMap**: Classic heatmap (2D)
- **Classic3DHeatMap**: Classic heatmap (3D)
- **SquareHeatMap**: Grid heatmap (square)
- **CircleHeatMap**: Grid heatmap (circle)
- **HexagonHeatMap**: Hexagonal heatmap (2D)
- **HexagonColumnHeatMap**: Hexagonal heatmap (3D)

### Controls

- **ZoomControl**: Zoom control
- **ScaleControl**: Scale control
- **Full**: Fullscreen control
- **Locate**: Locate control
- **MouseLocationControl**: Mouse location control
- **Tip**: Tooltip control
- **MarkerPoint**: Marker point control
- **MultiPopup**: Multi-popup control
- **MiniMap**: Mini map (overview map) control

### Tools

- **DrawTool**: Drawing tool, supports the following drawing types:
  - `'point'`: Point
  - `'line'`: Line
  - `'polygon'`: Polygon
  - `'rect'`: Rectangle
  - `'circle'`: Circle

Usage example:
```javascript
import { DrawTool } from 'antv-g';

// Create polygon drawing tool
const drawTool = map.register(DrawTool, 'polygon');
drawTool
  .setOptions({ editable: true })  // Set options
  .add()                            // Add to map
  .show();                          // Show and enable

// Get drawing data
const data = drawTool.getData();

// Disable drawing
drawTool.disable();

// Clear drawing
drawTool.clear();
```

## 🗺️ Map Style Support

### Gaode Map

- `amap://styles/normal` - Standard style
- `amap://styles/dark` - Dark style
- `amap://styles/light` - Light style
- Custom styles (requires securityKey)

### Mapbox

- `mapbox://styles/mapbox/streets-v11` - Streets style
- `mapbox://styles/mapbox/outdoors-v11` - Outdoors style
- `mapbox://styles/mapbox/light-v10` - Light style
- `mapbox://styles/mapbox/dark-v10` - Dark style
- `mapbox://styles/mapbox/satellite-v9` - Satellite style
- Custom style URL

### Others

- `blank` - Blank map mode (no base map)

## 📁 Project Structure

```
antv-g/
├── src/
│   ├── components/          # Components directory
│   │   ├── BaseLayer.ts     # Base layer class
│   │   ├── Layer.ts         # Layer management class
│   │   ├── MapType.ts       # Map type class
│   │   ├── Points/          # Point style layers
│   │   ├── HeatMapLayer/    # Heatmap layers
│   │   ├── Control/         # Control components
│   │   ├── Line.ts          # Line layer
│   │   ├── Polygon.ts       # Polygon layer
│   │   ├── PointsLayer.ts  # Point layer
│   │   └── ...
│   ├── Type/                # TypeScript type definitions
│   ├── index.ts             # Entry file
│   ├── option.ts            # Configuration options
│   └── geojsonType.ts       # GeoJSON type definitions
├── public/                  # Static resources
│   └── 符号图层图标/        # Landmark icons
├── package.json
├── tsconfig.json
└── rollup.config.js         # Build configuration
```

## 🛠️ Development

### Build

```bash
npm run build
```

### Development Mode (Watch file changes)

```bash
npm start
```

### Tech Stack

- **TypeScript**: Type support
- **Rollup**: Module bundling
- **AntV L7**: Map rendering engine
- **Babel**: JavaScript compilation
- **PostCSS**: CSS processing

## 📝 Type Definitions

The project is written in TypeScript and provides complete type definitions. Main types include:

- `IZLG`: Main class initialization configuration
- `IMap`: Map configuration
- `Tcoord`: Coordinate type `[number, number]`
- `GeoJSON`: GeoJSON data format
- `Tlistener`: Event listener type
- `IStatusOptions`: Map status options

## 🔧 Configuration

### Map Configuration (IMap)

```typescript
interface IMap {
  type?: string;              // Map type, e.g., 'leaflet'
  urlTemplate?: string;        // Leaflet map URL template
  style: string;               // Map style
  zoom?: number;               // Zoom level
  center?: [number, number];   // Center coordinates
  pitch?: number;              // Pitch angle
  minZoom?: number;            // Minimum zoom level
  maxZoom?: number;            // Maximum zoom level
  zoomEnable?: boolean;        // Enable zoom
  pitchWithRotate?: boolean;   // Enable rotation
}
```

## 📄 License

MIT

## 👤 Author

zasqwzasqw2222@gmail.com

## 🔗 Related Links

- [AntV L7 Documentation](https://l7.antv.antgroup.com/)
- [GitHub Repository](https://github.com/zasqw2222/antv-g)

## 📌 Notes

1. When using Gaode Map custom styles, you need to configure `securityKey`
2. When using Mapbox online maps, you need to configure `token`
3. Map screenshot functionality requires browser support for Canvas API
4. Some features depend on WebGL support

## 🐛 Issue Reporting

If you encounter any issues or have suggestions, please submit an Issue to the GitHub repository.

