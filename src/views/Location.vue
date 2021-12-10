<template>
  <div
    v-if="location"
    class="flex items-center justify-around w-full h-0 flex-auto"
  >
    <div class="pl-12 pr-6 py-12 w-1/2 self-stretch  ">
      <Card class="h-full flex flex-col rounded-sm p-6">
        <h3 class="text-4xl font-brand pb-3 mb-3 border-b-2 border-zinc-400 border-opacity-30">{{ location.attributes.name }}</h3>
        <div class="flex-grow overflow-y-auto pr-4">
          <Markdown :source="location.attributes.description" />
        </div>
        <RecentsList :alerts="location.attributes.alerts.data"></RecentsList>
      </Card>
    </div>
    <div class="flex-grow self-stretch p-12">
      <Map
        :markers="[{ lat: location.attributes.lat, lng: location.attributes.lng }]"
        :zoom="14"
        :center="{ lat: location.attributes.lat, lng: location.attributes.lng }"
      />
    </div>
  </div>
</template>

<script>
import Map from '../components/Map.vue'
import Markdown from 'vue3-markdown-it'
import store from '@/store/index.js'
import Card from '../components/Card.vue'
import RecentsList from '../components/RecentsList.vue'
export default {
  name: 'Home',
  components: {
    Markdown,
    Map,
    Card,
    RecentsList
},
  data () {
    return {
      key: import.meta.env.VITE_KEY
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
    location () {
      if (this.$store.state.locations) {
        // FIX THS!@@
        const reqLoc = this.$store.state.locations.find(({ id }) => parseInt(id) === parseInt(this.$route.params.id))
          // console.log(id)
          // console.log(parseInt(id) === parseInt(this.$route.params.id))
        console.log(reqLoc)
        return reqLoc
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