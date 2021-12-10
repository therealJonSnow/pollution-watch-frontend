import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    userData: null,
    token: null,
    loggedIn: false,
    locations: null,
    alerts: null
  },
  getters: {},
  mutations: {
    setLoggedIn (state, { jwt, userData }) {
      state.loggedIn = true
      state.token = jwt
      console.log(userData)
      state.userData = (() => {
        try {
            var o = JSON.parse(userData)
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) { return userData }
    })();
    },
    setLoggedOut (state) {
      state.loggedIn = false
      state.token = null
      state.userData = null
      state.locations = null
      state.alerts = null
    },
    setLocations (state) {
      axios.get('http://localhost:1337/api/locations?populate=alerts', {
            headers: {
              Authorization:
                `Bearer ${state.token}`,
            },
        }).then(response => {
          state.locations = response.data.data
        });
    },
    setAlerts (state) {
      axios.get('http://localhost:1337/api/alerts?populate=*&sort=createdAt:desc', {
            headers: {
              Authorization:
                `Bearer ${state.token}`,
            },
        }).then(response => {
          state.alerts = response.data.data
        });
    }
  },
  actions: {}
})
