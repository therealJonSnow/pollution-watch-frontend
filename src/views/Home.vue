<template>
  <div
    v-if="showMap"
    class="flex items-center justify-around w-full flex-grow"
  >
    <div class="pl-12 pr-6 py-20 self-stretch w-1/2">
      <h3 class="text-4xl font-brand pb-6 mb-3 border-b-2 border-zinc-400 border-opacity-30">Recent Incidents</h3>
      <div
        class="text-lg mb-3 pb-3 px-2 flex justify-between border-b-2 border-zinc-400 border-opacity-30"
        v-for="(alert) in $store.state.alerts"
        :key="alert.id"
      >
        <div>{{ alert.attributes.description }}</div>
        <div
          class="uppercase font-brand"
          :class="{
            'text-yellow-300': alert.attributes.level === 'low',
            'text-yellow-500': alert.attributes.level === 'medium',
            'text-red-500': alert.attributes.level === 'high'
          }"
        >
          {{ alert.attributes.level }}
        </div>
      </div>
    </div>
    <div class="flex-grow self-stretch p-12">
      <Map
        :markers="markerPositions"
        :zoom="6"
        markerLinkPath="/locations/"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Map from '../components/Map.vue'
export default {
  name: 'Home',
  components: {
    Map
},
  data () {
    return {
      key: import.meta.env.VITE_KEY,
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