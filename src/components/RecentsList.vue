<template>
  <div
    class=""
    v-for="(alert) in alerts"
    :key="alert.id"
  >
    {{ alert.attributes.description }}
  </div>
</template>

<script>
export default {
  name: 'RecentsList',
  props: {
    alerts: Array
  },
  data () { 
    return {
    }
  },
  methods: {
  },
  computed: {
  },
}
</script>

<style>

</style>