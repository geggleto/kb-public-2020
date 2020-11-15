<template>
  <div>
    <button class="button is-success" @click="modal = true">Select Kitty</button>
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
              <CoreKitty :kitty="i" />
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
  components: {CoreKitty},
  data() {
    return {
      modal: false,
      selectedKittyId: null,
    }
  },
  computed: {
    suits() {
      return this.$store.getters.suits;
    }
  }
}
</script>

<style scoped>

</style>