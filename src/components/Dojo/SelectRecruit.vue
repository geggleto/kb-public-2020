<template>
  <div>
    <button class="button is-success" @click="modal = true">Select Kitty {{selected}}</button>

    <CoreKitty v-if="kitty" :kitty="kitty"></CoreKitty>

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
            <div class="column is-one-quarter" v-for="(i,k) in suits">
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
          <button class="button" @click="modal = false">Cancel</button>
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
      kitty: null,
    }
  },
  methods: {
    select(i,pos) {
      this.$store.commit('setDojoKitty', {
        suit: i,
        position: pos,
      })
      this.modal = false;
      this.kitty = i;
    }
  },
  computed: {
    suits() {
      return this.$store.getters.suits;
    },
    selected() {
      return this.$store.getters.dojo[""+this.position] ? `(${this.$store.getters.dojo[""+this.position].id })` : '';
    }
  }
}
</script>

<style scoped>

</style>