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
      <router-link class="card-footer-item" :to="getRoute(kitty.id)">Recruit</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "RecruitCard",
  props: [
    'kitty'
  ],
  data() {
    return {
      show : false
    };
  },
  methods: {
    getSkill(id) {
      return this.$store.getters.getSkill(id);
    },
    getRoute(id) {
      return '/recruit/'+id;
    }
  },
  computed: {
    image() {
      return `https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/${this.kitty.id}.png`;
    }
  }
}
</script>

<style scoped>
.card {
  border: 5px solid #333333;
}
</style>