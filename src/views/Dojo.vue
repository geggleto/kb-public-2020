<template>
  <div>
    <div class="heading is-size-1">Enter the Dojo</div>
    <div class="columns">
      <div class="column"></div>
      <div class="column"><select-recruit position="1" /></div>
      <div class="column"><select-recruit position="2" /></div>
      <div class="column"><select-recruit position="3" /></div>
      <div class="column"></div>
    </div>
    <div class="columns" v-if="slot1 || slot2 || slot3">
      <div class="column"></div>
      <div class="column"><button class="button is-fullwidth is-danger" v-if="slot1" @click="unselect('1')">Remove</button></div>
      <div class="column"><button class="button is-fullwidth is-danger" v-if="slot2" @click="unselect('2')">Remove</button></div>
      <div class="column"><button class="button is-fullwidth is-danger" v-if="slot3" @click="unselect('3')">Remove</button></div>
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column">
        <button v-if="isReady" class="button is-primary is-fullwidth">Enter When Ready</button>
      </div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import SelectRecruit from "@/components/Dojo/SelectRecruit";
export default {
  name: "Dojo",
  components: {SelectRecruit},
  computed: {
    isReady() {
      return this.$store.getters.dojo["1"] && this.$store.getters.dojo["2"] && this.$store.getters.dojo["3"];
    },
    slot1() {
      return !!this.$store.getters.dojo["1"];
    },
    slot2() {
      return !!this.$store.getters.dojo["2"];
    },
    slot3() {
      return !!this.$store.getters.dojo["3"];
    }
  },
  methods: {
    unselect(pos) {
      this.$store.commit('setDojoKitty', {
        suit: null,
        position: pos,
      });
    }
  }
}
</script>

<style scoped>

</style>