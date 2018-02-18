# react-leaflet-easyprint

React wrapper of [leaflet-easyPrint](https://github.com/rowanwins/leaflet-easyPrint) for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

A simple [leaflet](http://www.leafletjs.com) plugin which adds an icon to print or export a map.

[Demo](http://rowanwins.github.com/leaflet-easyPrint/).

[Demo JSFiddle](https://jsfiddle.net/m_hasbie/87h9cnjd/)

*Tested with Leaflet 1.3.1 and React-Leaflet 1.8.0*

## Installation

### Install via NPM

```bash
npm install react-leaflet-easyprint --save
```

## Usage example

```javascript
import { Map, TileLayer } from 'react-leaflet';
import PrintControl from 'react-leaflet-measure';
		
<Map center={[101.483459, 2.938926]} zoom={12}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <PrintControl ref={(ref) => { this.printControl = ref; }} position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} />
  <PrintControl position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly />
</Map>
```

### Options

Any props passed to PrintControl are passed down to leaflet-easyPrint.

Refer [leaflet-easyPrint options](https://github.com/rowanwins/leaflet-easyPrint#options) for a complete list of options supported.

### Methods / Using programmatically

Use react ref to call *printMap(size, filename)* function programmatically. Refer [Doc](https://github.com/rowanwins/leaflet-easyPrint#methods--using-programmatically) for parameters accepted by *printMap()*.


#### Example

```javascript

...

<button onClick={this.printControl.printMap('A4Portrait', 'MyFileName')} >Print Map</button>

...

```

# Credits
Credits goes to [rowanwins](https://github.com/rowanwins) and all the [contributors](https://github.com/rowanwins/leaflet-easyPrint/graphs/contributors) for the original work.

# License

MIT License
