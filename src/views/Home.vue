<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="(i,k) in suits">
        <SuitCard :kitty="i" />
      </div>
      <div class="column is-one-quarter">
        <ImportKitty />
      </div>
    </div>
  </div>
</template>

<script>
import SuitCard from "@/components/Roster/SuitCard";
import ImportKitty from "@/components/Roster/ImportKitty";
export default {
  name: 'Home',
  components: {ImportKitty, SuitCard},
  computed: {
    suits() {
      return this.$store.getters.suits;
    }
  }
}
</script>