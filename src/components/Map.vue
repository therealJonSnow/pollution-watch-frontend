<template>
  <GoogleMap
    :api-key="key"
    style="height: 100%; width: 100%; overflow: hidden; border-radius: 1rem;"
    :styles="mapStyle"
    class="shadow-lg shadow-zinc-900"
    :center="center"
    :zoom="zoom"
    :streetViewControl="false"
    :disable-default-ui="true"
    :zoom-control="false"
  >
    <Marker
      v-for="(marker, index) in markers"
      :key="index"
      :options="{
        position: {
          lat: marker.lat,
          lng: marker.lng
        },
        icon: icons[marker.level],
        animation: 'DROP',
      }"
      @click="markerLinkPath !== null ? $router.push(markerLinkPath + marker.id) : null"
    />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'
import iconLow from '../assets/icon-low.png'
import iconMedium from '../assets/icon-medium.png'
import iconHigh from '../assets/icon-high.png'
export default {
  name: 'Map',
  components: {
    GoogleMap,
    Marker
  },
  props: {
    markers: {
      type: Array,
      default: null
    },
    center: {
      type: Object,
      default: () => {return { lat: 53, lng: -4 }}
    },
    zoom: {
      type: Number,
      default: 6
    },
    markerLinkPath: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      key: import.meta.env.VITE_KEY,
      icons: {
        low: iconLow,
        medium: iconMedium,
        high: iconHigh
      },
      mapStyle: [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#f8f8f8"
            },
            {
                "visibility": "on"
            },
            {
                "lightness": "67"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": "-41"
            },
            {
                "weight": "0.01"
            },
            {
                "gamma": "4.10"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#131313"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#252525"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": "17"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": "16"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "22"
            },
            {
                "saturation": "5"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
      ]
    }
  },
  mounted () {
    console.log(this.markers)
  }
}
</script>

<style>

</style>