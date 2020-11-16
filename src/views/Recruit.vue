<template>
  <div class="columns">
    <div class="column">

    </div>
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="image" />
          </figure>
        </div>
        <header class="card-header">
          <p class="card-header-title">
            Kitty#: {{ $route.params.id }}
          </p>
        </header>
        <footer class="card-footer">
          <button class="button is-fullwidth card-footer-item is-primary" @click="acceptRecruit">Accept Recruit</button>
        </footer>
      </div>
    </div>
    <div class="column">

    </div>
  </div>
</template>

<script>
export default {
  name: "Recruit",
  methods: {
    acceptRecruit() {
      this.$store.commit('addNewKitty', this.$route.params.id);
      this.$router.push('/');
    }
  },
  computed: {
    image() {
      return `https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/${this.$route.params.id}.png`;
    }
  }
}
</script>

<style scoped>

</style>