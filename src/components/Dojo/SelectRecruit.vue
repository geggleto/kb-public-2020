<template>
  <div>
    <button class="button is-primary is-fullwidth mb-1" @click="modal = true">Select Kitty {{selected}}</button>

    <CoreKitty v-if="kitty" :kitty="kitty" class="mt-1"></CoreKitty>

    <div class="modal"
         v-bind:class="{ 'is-active': modal }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Pick a recruit</p>
          <button class="delete" aria-label="close" @click="modal = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns is-multiline">
            <div class="column is-one-third" v-for="(i,k) in suits">
              <CoreKitty :kitty="i">
                <template v-slot:action>
                  <button class="button is-success card-footer-item" @click="select(i,position)">
                    Select
                  </button>
                </template>
              </CoreKitty>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-fullwidth is-primary" @click="modal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import CoreKitty from "@/components/Core/CoreKitty";

export default {
  name: "SelectRecruit",
  props:['position'],
  components: {CoreKitty},
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    select(i,pos) {
      this.$store.commit('setDojoKitty', {
        suit: i,
        position: pos,
      })
      this.modal = false;
    }
  },
  computed: {
    suits() {
      let suits = this.$store.getters.suits;

      suits = suits.filter((s) => {
        if (this.$store.getters.dojo["1"] && ""+this.$store.getters.dojo["1"].id === ""+s.id) {
          return false;
        }
        if (this.$store.getters.dojo["2"] && ""+this.$store.getters.dojo["2"].id === ""+s.id) {
          return false;
        }
        if (this.$store.getters.dojo["3"] && ""+this.$store.getters.dojo["3"].id === ""+s.id) {
          return false;
        }
        return true;
      })

      return suits;
    },
    selected() {
      return this.$store.getters.dojo[""+this.position] ? `(${this.$store.getters.dojo[""+this.position].id })` : '';
    },
    kitty() {
      if (this.$store.getters.dojo[this.position]) {
        return this.$store.getters.dojo[""+this.position];
      }
      return null;
    }
  },
  mounted() {
    if (this.$store.getters.dojo[this.position]) {
      this.kitty = this.$store.getters.dojo[this.position];
    }
  }
}
</script>

<style scoped>

</style>