<template>
  <div v-if="user" class="px-12 py-20 flex-grow flex items-start w-2/3 mx-auto">
    <div class="w-2/3">
      <h1 class="text-4xl font-brand mb-10">Welcome to your profile {{ user.username }}</h1>
      <div class="text-lg w-full p-8 rounded-lg bg-zinc-900 shadow-lg">
        <div class="mb-4 text-2xl font-brand">Your details</div>
        <div>
          <div class="flex justify-between pb-2"><span class="opacity-50">Email:</span> {{ user.email }}</div>
          <div class="flex justify-between pb-2"><span class="opacity-50">Password:</span> **************</div>
          <div class="flex justify-between pb-2"><span class="opacity-50">You've been a member for:</span>{{ convertTime(user.createdAt) }} days</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'Profile',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      if (this.$store.state.userData) {
        return this.$store.state.userData
      } else {
        return null
      }
    }
  },
  methods: {
    convertTime (time) {
      const date = new Date(time)
      const now = new Date()
      const timeDiff = now.getTime() - date.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      return Math.floor(dayDiff)
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