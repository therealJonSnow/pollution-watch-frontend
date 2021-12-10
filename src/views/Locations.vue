<template>
  <div
    v-if="showMap"
    class="flex items-center justify-around w-full flex-grow"
  >
    <div class="pl-12 pr-6 py-20 self-stretch w-1/3">
      <h3 class="text-4xl font-brand pb-6 mb-3 border-b-2 border-zinc-400 border-opacity-30">Locations</h3>
      <div
        class="text-lg mb-3 pb-3 px-2 flex justify-between border-b-2 border-zinc-400 border-opacity-30"
        v-for="(location) in $store.state.locations"
        :key="location.id"
        @click="$router.push('/locations/' + location.id)"
      >
        <div>{{ location.attributes.name }}</div>
        <div>-></div>
      </div>
    </div>
    <div class="flex-grow h-full self-stretch p-12">
      <Map
        :markers="markerPositions"
        marker-link-path="/locations/"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Map from '../components/Map.vue'
export default {
  name: 'Locations',
  components: {
    Map
},
  data () {
    return {
      key: import.meta.env.VITE_KEY,
      center: { lat: 53, lng: -4 }
    }
  },
  computed: {
    showMap () {
      if (this.$store.state.locations === null) {
        return false
      } else {
        return true
      }
    },
    markerPositions () {
      if (this.$store.state.locations !== null) {
        const markerLocations = this.$store.state.locations.map((loc) => {
          const newObj = {}
          newObj.id = loc.id
          newObj.lat = loc.attributes.lat
          newObj.lng = loc.attributes.lng
          return newObj
        })
        console.log(markerLocations)
        return markerLocations
      } else {
        return null
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!store.state.loggedIn) {
      // User not logged in
      next('/landing-page')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>