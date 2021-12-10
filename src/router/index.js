import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import LandingPage from '/src/views/LandingPage.vue'
import Profile from '/src/views/Profile.vue'
import Locations from '/src/views/Locations.vue'
import Location from '/src/views/Location.vue'

// createWebHistory
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/locations/:id',
    name: 'Location',
    component: Location
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
