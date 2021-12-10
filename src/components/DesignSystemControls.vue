<template>
  <div
    class="fixed bottom-0 left-0 w-1/4 rounded-r-md bg-brand-secondary p-4 transition-all transform"
    :class="{ 'translate-y-full': !active }"
  >
    <div
      @click="active = !active"
      class="cursor-pointer absolute top-0 left-4 transform -translate-y-full text-brand-primary bg-brand-secondary rounded-t-sm px-2 py-1"
    >
      Design System Controls
    </div>
    <div class="flex flex-col">
      <label for="radius">Border Radius</label>
      <input v-model="radius" @input="updateRadius" @change="updateRadius" name="radius" type="range" min="0" max="100">
      <label for="colorPrimary">Primary Color</label>
      <input v-model="primary" @input="updateColor('primary')" @change="updateColor('primary')" name="colorPrimary" type="color">
      <label for="colorSecondary">Secondary Color</label>
      <input v-model="secondary" @input="updateColor('secondary')" @change="updateColor('secondary')" name="colorSecondary" type="color">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignSystemControls',
  data () {
    return {
      active: false,
      radius: 50,
      primary: '',
      secondary: ''
    }
  },
  methods: {
    updateRadius () {
      document.documentElement.style.setProperty('--border-radius-md', this.radius + 'px')
    },
    updateColor (color) {
      document.documentElement.style.setProperty('--text-' + color, this[color])
    }
  }
}
</script>
