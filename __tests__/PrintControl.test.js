/* global describe, expect, it, jest */

import React, { createRef } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import PrintControlDefault from '../dist/react-leaflet-easyprint.min.js';
const PrintControl = withLeaflet(PrintControlDefault);

describe('PrintControl', () => {

	it('Should instantiate a print control with given parameters', () => {
		
		const mapOptions = {
			center: [0, 0],
			zoom: 1,
			minZoom: 1,
			maxZoom: 22,
		};
		const printOptions = {
			position: 'topleft',
			sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
			hideControlContainer: false
		};
		
		const printControlRef = createRef();

		const wrapper = mount(
			<Map {...mapOptions}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<PrintControl ref={printControlRef} {...printOptions} />
			</Map>
		);
		
		expect(wrapper).not.toBeEmptyRender();
		expect(printControlRef.current.leafletElement.options.position).toEqual('topleft');
	})
})