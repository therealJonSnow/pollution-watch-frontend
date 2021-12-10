<template>
  <Modal>
    <div class="flex flex-col w-full items-center justify-center">
      <div>Are you sure?</div>
      <div class="flex space-x-4">
        <div @click="logOut" class="p-4 border-2 border-zinc-400 rounded-md bg-red-400">Yes</div>
        <div @click="$emit('close')" class="p-4 border-2 border-zinc-400 rounded-md ">No</div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

export default {
  name: 'LogoutModal',
  components: { Modal },
  data () {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    logOut () {
      this.$emit('close')
      // Remove local storage
      localStorage.removeItem('jwt')
      localStorage.removeItem('userData')
      // Remove Vuex
      this.$store.commit('setLoggedOut')
      this.$router.push('/landing-page')
    }
  }
}
</script>

<style>

</style>