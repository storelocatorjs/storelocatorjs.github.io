import 'storelocatorjs/dist/storelocator/css/storelocator.css'
import Storelocatorjs from 'storelocatorjs'

/* eslint-disable no-unused-vars */
const myStorelocator = new Storelocatorjs({
	options: {
		apiKey: 'AIzaSyD6vKbzlHT4wfk9jbCLXn_HZrdFaLzO2XI',
		webServiceUrl: 'https://europe-west1-storelocatorjs.cloudfunctions.net/stores',
		cluster: {
			options: {
				averageCenter: true,
				gridSize: 50,
				imagePath:
					'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
				maxZoom: 13,
				minimumClusterSize: 2,
				styles: [
					{
						url: 'images/cluster.png',
						textSize: 14,
						textColor: '#000',
						width: 70,
						height: 70
					}
				],
				zoomOnClick: true
			},
			status: true
		},
		geolocation: {
			startOnLoad: false,
			status: true
		},
		map: {
			markers: {
				width: 30,
				height: 40,
				styles: [
					{
						category: 'userPosition',
						colorBackground: '#33ccff',
						colorText: '#fff'
					},
					{
						category: '1',
						colorBackground: '#ff6600',
						colorText: '#fff'
					},
					{
						category: '2',
						colorBackground: '#ffcc33',
						colorText: '#fff'
					},
					{
						category: '3',
						colorBackground: '#ea4c89',
						colorText: '#fff'
					}
				]
			},
			options: {
				styles: [
					{
						featureType: 'administrative',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#6195a0' }]
					},
					{
						featureType: 'administrative.province',
						elementType: 'geometry.stroke',
						stylers: [{ visibility: 'off' }]
					},
					{
						featureType: 'landscape',
						elementType: 'geometry',
						stylers: [{ lightness: '0' }, { saturation: '0' }, { color: '#f5f5f2' }, { gamma: '1' }]
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'all',
						stylers: [{ lightness: '-3' }, { gamma: '1.00' }]
					},
					{
						featureType: 'landscape.natural.terrain',
						elementType: 'all',
						stylers: [{ visibility: 'off' }]
					},
					{
						featureType: 'poi',
						elementType: 'all',
						stylers: [{ visibility: 'off' }]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [{ color: '#bae5ce' }, { visibility: 'on' }]
					},
					{
						featureType: 'road',
						elementType: 'all',
						stylers: [{ saturation: -100 }, { lightness: 45 }, { visibility: 'simplified' }]
					},
					{
						featureType: 'road.highway',
						elementType: 'all',
						stylers: [{ visibility: 'simplified' }]
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.fill',
						stylers: [{ color: '#fac9a9' }, { visibility: 'simplified' }]
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text',
						stylers: [{ color: '#4e4e4e' }]
					},
					{
						featureType: 'road.arterial',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#787878' }]
					},
					{
						featureType: 'road.arterial',
						elementType: 'labels.icon',
						stylers: [{ visibility: 'off' }]
					},
					{
						featureType: 'transit',
						elementType: 'all',
						stylers: [{ visibility: 'simplified' }]
					},
					{
						featureType: 'transit.station.airport',
						elementType: 'labels.icon',
						stylers: [
							{ hue: '#0a00ff' },
							{ saturation: '-77' },
							{ gamma: '0.57' },
							{ lightness: '0' }
						]
					},
					{
						featureType: 'transit.station.rail',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#43321e' }]
					},
					{
						featureType: 'transit.station.rail',
						elementType: 'labels.icon',
						stylers: [
							{ hue: '#ff6c00' },
							{ lightness: '4' },
							{ gamma: '0.75' },
							{ saturation: '-68' }
						]
					},
					{
						featureType: 'water',
						elementType: 'all',
						stylers: [{ color: '#eaf6f8' }, { visibility: 'on' }]
					},
					{
						featureType: 'water',
						elementType: 'geometry.fill',
						stylers: [{ color: '#c7eced' }]
					},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [{ lightness: '-49' }, { saturation: '-53' }, { gamma: '0.79' }]
					}
				]
			}
		}
	},
	onReady: function (map) {
		// this.triggerRequest({
		// 	lat: 48.8589507,
		// 	lng: 2.2770202
		// })
	}
})
