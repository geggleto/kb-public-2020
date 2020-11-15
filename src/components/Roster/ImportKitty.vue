<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Register new Kitty
      </p>
    </header>
    <footer class="card-footer">
      <router-link class="card-footer-item" to="/import">Recruit</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ImportKitty"
}
</script>

<style scoped>
.card {
  border: 5px solid #333333;
}
</style>