<template>
  <div
    v-if="alert"
    class="flex items-center justify-around w-full h-0 flex-auto"
  >
    <div class="pl-12 pr-6 py-12 w-1/2 self-stretch  ">
      <Card class="h-full flex flex-col rounded-sm p-6">
        <!-- <h3 class="text-4xl font-brand pb-3 mb-3 border-b-2 border-zinc-400 border-opacity-30">{{ alert.attributes.name }}</h3> -->
        <div class="text-lg flex-grow overflow-y-auto pr-4">
          <Markdown :source="alert.attributes.description" />
        </div>
        <div>
          <div class="font-brand text-xl mb-2">Comments:</div>
          <CommentsList :comments="alert.attributes.comments.data"></CommentsList>
        </div>
      </Card>
    </div>
    <div class="flex-grow self-stretch p-12">
      <Map
        :markers="[{ lat: alert.attributes.location.data.attributes.lat, lng: alert.attributes.location.data.attributes.lng }]"
        :zoom="14"
        :center="{ lat: alert.attributes.location.data.attributes.lat, lng: alert.attributes.location.data.attributes.lng }"
      />
    </div>
  </div>
</template>

<script>
import Map from '../components/Map.vue'
import Markdown from 'vue3-markdown-it'
import store from '@/store/index.js'
import Card from '../components/Card.vue'
import CommentsList from '../components/CommentsList.vue'
export default {
  name: 'Home',
  components: {
    Markdown,
    Map,
    Card,
    CommentsList
},
  data () {
    return {
      key: import.meta.env.VITE_KEY
    }
  },
  computed: {
    showMap () {
      if (this.$store.state.alerts === null) {
        return false
      } else {
        return true
      }
    },
    alert () {
      if (this.$store.state.alerts) {
        const requiredAlert = this.$store.state.alerts.find(({ id }) => parseInt(id) === parseInt(this.$route.params.id))
        console.log(requiredAlert)
        return requiredAlert
      } else {
        return null
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!store.state.loggedIn) {
      next('/landing-page')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>