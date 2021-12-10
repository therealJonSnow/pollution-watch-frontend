<template>
<div class="relative flex flex-col h-screen overflow-y-auto w-screen bg-zinc-800">
  <Navigation />
  <router-view></router-view>
  <DesignSystemControls/>
</div>
</template>

<script>
import axios from 'axios'
import Navigation from './components/Navigation.vue'
import DesignSystemControls from './components/DesignSystemControls.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    DesignSystemControls
  },
  data () {
    return {
      radius: 50
    }
  },
  mounted () {
    if (localStorage.jwt) {
      this.$store.commit('setLoggedIn', { jwt: localStorage.jwt, userData: localStorage.userData })
      if (this.$store.state.token !== null) {
        this.$store.commit('setLocations')
        this.$store.commit('setAlerts')
      }
    }
    axios.get('http://localhost:1337/api/theme')
      .then(response => {
        const theme = response.data.data.attributes.theme
        if (typeof window !== 'undefined') {
          document.documentElement.style.setProperty('--text-primary', theme['text-primary'])
          document.documentElement.style.setProperty('--text-secondary', theme['text-secondary'])
          document.documentElement.style.setProperty('--bg-primary', theme['bg-primary'])
          document.documentElement.style.setProperty('--border-radius-sm', theme['border-radius-sm'])
          document.documentElement.style.setProperty('--border-radius-md', theme['border-radius-md'])
        }
      }
    )
  }
  
}
</script>

<style lang="scss">
body {
  @apply text-brand-primary;
}
</style>