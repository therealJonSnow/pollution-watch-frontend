<template>
  <div class="flex-grow flex items-center w-2/3 mx-auto">
    <div class="w-1/2">
      <h1 class="text-6xl font-brand">Welcome</h1>
      <p>Are you ready to read a call to action! <br/>Log in or sign up now!</p>
    </div>
    <div class="w-1/2 p-8 rounded-md bg-zinc-900 shadow-lg transition-all duration-1000">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
    name: "LandingPage",
    components: { LoginForm }
}
</script>

<style>

</style>