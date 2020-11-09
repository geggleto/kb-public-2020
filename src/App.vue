<template>
  <div id="app">
    <Navigation />
    <div class="container mt-1">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {Navigation}
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>