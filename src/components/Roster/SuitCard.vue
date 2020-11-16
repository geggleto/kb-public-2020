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
      <div class="tabs">
        <ul>
          <li v-bind:class="{ 'is-active': (tab === 'attributes') }"><a @click="tab = 'attributes'">Attributes</a></li>
          <li v-bind:class="{ 'is-active': (tab === 'skills') }"><a @click="tab = 'skills'">Skills</a></li>
          <li v-bind:class="{ 'is-active': (tab === 'items') }"><a @click="tab = 'items'">Items</a></li>
        </ul>
      </div>
      <div class="content" v-if="tab === 'attributes'">
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
      </div>
      <div class="content"  v-if="tab === 'skills'">
        <span class="has-text-weight-bold">Skills</span>
        <table class="table">
          <thead>
          <tr><th>Name</th><th>Type</th><th>Cooldown</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ getSkill(kitty.skill1).name }}</td>
            <td>{{ getSkill(kitty.skill1).type }}</td>
            <td>{{ getSkill(kitty.skill1).cooldown }}</td>
          </tr>
          <tr>
            <td>{{ getSkill(kitty.skill2).name }}</td>
            <td>{{ getSkill(kitty.skill2).type }}</td>
            <td>{{ getSkill(kitty.skill2).cooldown }}</td>
          </tr>
          <tr>
            <td>{{ getSkill(kitty.skill3).name }}</td>
            <td>{{ getSkill(kitty.skill3).type }}</td>
            <td>{{ getSkill(kitty.skill3).cooldown }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="content"  v-if="tab === 'items'">
        <span class="has-text-weight-bold">Items</span>
        <table class="table">
          <thead>
          <tr><th>Slot</th><th>Rarity</th><th>Modifiers</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Helmet</td>
            <td>None</td>
            <td></td>
          </tr>
          <tr>
            <td>Armor</td>
            <td>None</td>
            <td></td>
          </tr>
          <tr>
            <td>Weapon</td>
            <td>None</td>
            <td></td>
          </tr>
          <tr>
            <td>Shield</td>
            <td>None</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer class="card-footer">
      <slot name="default"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SuitCard",
  props: [
    'kitty',
    'initial'
  ],
  data() {
    return {
      show : false,
      tab : 'attributes',
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
  },
  mounted() {
    if (this.initial) {
      this.show = true;
    }
  }
}
</script>

<style scoped>
.card {
  border: 5px solid #333333;
}
</style>