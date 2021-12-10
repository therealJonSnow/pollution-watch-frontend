<template>
  <GoogleMap
    :api-key="key"
    style="height: 100%; width: 100%; overflow: hidden; border-radius: 1rem; box-shadow: #0e1218 0px 1px 16px;"
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
        icon: icon,
        animation: 'DROP',
      }"
      @click="markerLinkPath !== null ? $router.push(markerLinkPath + marker.id) : null"
    />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'
import iconPath from '../assets/icon.png'
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
      icon: iconPath
    }
  },
  mounted () {
    console.log(this.markers)
  }
}
</script>

<style>

</style>