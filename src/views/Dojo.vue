<template>
  <div>
    <div class="heading is-size-1">Enter the Dojo</div>
    <div class="columns">
      <div class="column"></div>
      <div class="column"><select-recruit /></div>
      <div class="column"><select-recruit /></div>
      <div class="column"><select-recruit /></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import SelectRecruit from "@/components/Dojo/SelectRecruit";
export default {
  name: "Dojo",
  components: {SelectRecruit}
}
</script>

<style scoped>

</style>