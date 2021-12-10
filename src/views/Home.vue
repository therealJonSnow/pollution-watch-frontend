<template>
  <div
    v-if="showMap"
    class="flex items-center justify-around w-full flex-grow"
  >
    <div class="pl-12 pr-6 py-20 self-stretch w-1/2">
      <h3 class="text-4xl font-brand pb-6 border-b-2 border-zinc-400 border-opacity-30">Recent Incidents</h3>
      <RecentsList :alerts="$store.state.alerts"/>
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
import RecentsList from '../components/RecentsList.vue'
export default {
  name: 'Home',
  components: {
    Map,
    RecentsList
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
          console.log(loc)
          const newObj = {}
          newObj.id = loc.id
          newObj.lat = loc.attributes.lat
          newObj.lng = loc.attributes.lng
          newObj.level = loc.attributes.alerts.data.at(-1).attributes.level
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