<template>
  <div
    class=""
    v-for="(comment) in comments"
    :key="comment.id"
  >
    {{ comment.attributes.content }}
    <br/>
    <span class="opacity-60">{{ convertTime(comment.attributes.createdAt) }}</span>
  </div>
</template>

<script>
export default {
  name: 'CommentsList',
  props: {
    comments: Array
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