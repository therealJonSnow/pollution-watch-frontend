<template>
  <form
    class="w-full"
    @submit.prevent="login"
  >
    <div class="my-4">
        <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
        <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
    </div>
    <div class="my-4">
        <h1 class="text-left font-bold mb-2 font-montserrat">Password</h1>
        <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
    </div>
    
    <!-- <button type="submit" class="bg-green-400 p-5 text-white">
        Log in
    </button> -->
    <Button>Login</Button>
  </form>
</template>

<script>
import axios from "axios";
import Button from "./Button.vue";
export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            axios
                .post("http://localhost:1337/api/auth/local", {
                identifier: this.email,
                password: this.password,
            })
                .then(response => {
                this.$emit("close");
                // Set in local storage
                window.localStorage.setItem("jwt", response.data.jwt);
                window.localStorage.setItem("userData", JSON.stringify(response.data.user));
                // Set in vuex
                console.log(response.data.user);
                this.$store.commit("setLoggedIn", { jwt: response.data.jwt, userData: response.data.user });
                if (this.$store.state.token !== null) {
                    this.$store.commit("setLocations");
                    this.$store.commit("setAlerts");
                }
                this.$router.push("/");
            })
                .catch(error => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
        }
    },
    components: { Button }
}
</script>

<style>

</style>