<template>
  <div>
    <div class="heading is-size-1">Locker Room</div>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <SuitCard v-if="suit" :kitty="suit" initial="true" />
      </div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import SuitCard from "@/components/Roster/SuitCard";
export default {
  name: "ModifyRecruit",
  components: {SuitCard},
  data() {
    return {
      suit: null
    }
  },
  mounted() {
    this.suit = this.$store.getters.getSuit((this.$route.params.id));
  }
}
</script>

<style scoped>

</style>