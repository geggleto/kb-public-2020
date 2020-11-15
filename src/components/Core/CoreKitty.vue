<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="image" />
      </figure>
    </div>
    <header class="card-header">
      <p class="card-header-title">
        Kitty#: {{ kitty.id }}
      </p>
    </header>
    <footer class="card-footer">
      <slot name="action"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CoreKitty",
  props: [
    'kitty'
  ],
  computed: {
    image() {
      return `https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/${this.kitty.id}.png`;
    }
  }
}
</script>

<style scoped>

</style>