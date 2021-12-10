<template>
  <Modal>
    <div>Login Form</div>
    <LoginForm/>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"
import LoginForm from "@/components/LoginForm.vue"
export default {
  name: 'LoginModal',
  components: { Modal, LoginForm },
}
</script>

<style>

</style>