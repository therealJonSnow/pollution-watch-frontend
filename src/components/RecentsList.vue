<template>
  <div
    class="group hover:bg-zinc-700 cursor-pointer text-lg pt-4 pb-3 px-4 flex justify-between border-b-2 border-zinc-400 border-opacity-30"
    v-for="(alert) in alerts"
    :key="alert.id"
    @click="$router.push('/alerts/' + alert.id)"
  >
    <div>
      <div class="leading-none">{{ alert.attributes.description }}</div>
      <span class="text-sm opacity-60">{{ convertTime(alert.attributes.createdAt) }}</span>
    </div>
    <div
      class="uppercase font-brand"
      :class="{
        'text-yellow-500': alert.attributes.level === 'low',
        'text-orange-500': alert.attributes.level === 'medium',
        'text-red-500': alert.attributes.level === 'high'
      }"
    >
      {{ alert.attributes.level }}
    </div>
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
    convertTime (time) {
      const date = new Date(time)
      const formatDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'medium' }).format(date)
      // const now = new Date()
      // const timeDiff = now.getTime() - date.getTime();
      // const dayDiff = timeDiff / (1000 * 3600 * 24);
      return formatDate
    }
  },
  computed: {
  },
}
</script>

<style>

</style>