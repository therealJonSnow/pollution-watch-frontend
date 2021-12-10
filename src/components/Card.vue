<template>
  <div class="shadow-md bg-zinc-800 box-shadow">
    <slot/>
  </div>
</template>

<script>
export default {
name: 'Card'
}
</script>

<style>
.box-shadow {
  box-shadow: #0e1218 0px 1px 16px;
}
</style>