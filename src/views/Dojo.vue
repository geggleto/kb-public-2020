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
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column">
        <button v-if="isReady" class="button is-success">Enter When Ready</button>
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
    }
  }
}
</script>

<style scoped>

</style>