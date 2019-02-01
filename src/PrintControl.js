import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-easyprint';

export default class PrintControl extends MapControl {
	createLeafletElement(props) {
		return L.easyPrint(props);
	}

	componentDidMount() {
		super.componentDidMount();
	}

	printMap(size, filename) {
		this.leafletElement.printMap(`${size} page`, filename);
	}
}
