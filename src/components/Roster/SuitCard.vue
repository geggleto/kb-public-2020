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
      <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon" v-show="show" @click="show = false">
        <i class="fas fa-angle-up" aria-hidden="true"></i>
      </span>
      <span class="icon" v-show="!show" @click="show = true">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </a>
    </header>
    <div class="card-content" v-show="show">
      <div class="content">
        <span class="has-text-weight-bold">Attributes</span>
        <table class="table">
          <tbody>
            <tr>
              <td>Attack</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Magic</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Magic Defense</td>
              <td>5</td>
            </tr>
            <tr>
              <td>HP</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
        <span class="has-text-weight-bold">Skills</span>
        <table class="table">
          <tbody>
          <tr>
            <td>Attack</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Magic</td>
            <td>10</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Equip</a>
      <a href="#" class="card-footer-item">Retire</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SuitCard",
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