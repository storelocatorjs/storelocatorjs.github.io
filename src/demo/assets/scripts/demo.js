import 'storelocatorjs/dist/storelocator.css'
import Storelocator from 'storelocatorjs/dist/storelocator.js'
import GoogleMaps from 'storelocatorjs/dist/map/google-maps.js'
import Leaflet from 'storelocatorjs/dist/map/leaflet.js'
import Mapbox from 'storelocatorjs/dist/map/mapbox.js'
import Maplibre from 'storelocatorjs/dist/map/maplibre.js'
import credentials from '../../../../credentials.json'
import mapStyles from './styles.json'
// import 'storelocatorjs/dist/map/leaflet.css'
import 'storelocatorjs/dist/map/mapbox.css'
import 'storelocatorjs/dist/map/maplibre.css'
import validateTarget from 'validate-target'

export default class Demo {
	constructor() {
		this.nav = document.querySelector('.nav')
		this.content = document.querySelector('.content')
		this.instance = null

		this.map = {
			'google-maps': {
				instance: GoogleMaps,
				token: credentials.GOOGLEMAPS_TOKEN,
				options: {
					styles: mapStyles.styles
				}
			},
			leaflet: {
				instance: Leaflet
			},
			mapbox: {
				instance: Mapbox,
				token: credentials.MAPBOX_TOKEN
			},
			maplibre: {
				instance: Maplibre,
				options: {
					style: `https://api.jawg.io/styles/jawg-sunny.json?access-token=${credentials.JAWG_TOKEN}`
				}
			}
		}

		this.onClickOnNav = this.onClickOnNav.bind(this)
	}

	init() {
		this.addEvents()
		this.initMap({ map: 'google-maps' })
	}

	addEvents() {
		this.nav.addEventListener('click', this.onClickOnNav)
	}

	onClickOnNav(e) {
		const target = e.target
		const navButton = validateTarget({
			target,
			selectorString: '.nav-listItemButton',
			nodeName: ['button']
		})

		if (navButton) {
			this.toggleNavButton(e)
		}
	}

	toggleNavButton(e) {
		e.preventDefault()

		const target = e.target
		const currentActive = this.nav.querySelector('.active')
		const map = target.getAttribute('data-map')

		if (!target.classList.contains('active')) {
			currentActive.classList.remove('active')
			target.classList.add('active')

			this.destroyPreviousMedia()
			this.initMap({
				map
			})
		}
	}

	destroyPreviousMedia() {
		this.instance.destroy()
		this.instance = null
	}

	initMap({ map }) {
		this.instance = new Storelocator({
			target: document.querySelector('.content'),
			api: {
				url: 'https://storelocatorjs-functions.vercel.app'
			},
			map: {
				provider: this.map[map].instance,
				token: this.map[map].token ?? '',
				options: this.map[map].options ?? {}
			},
			geocoder: {
				provider: 'mapbox',
				token: credentials.MAPBOX_TOKEN
			},
			onReady: (map) => {
				console.log('onReady', map)
			}
		})
	}
}
