<template>
  <div>
    <div class="heading is-size-1">
      Recruit a Kitty
    </div>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="(i,k) in result">
        <RecruitCard :kitty="i" />
      </div>
    </div>
  </div>
</template>

<script>
import RecruitCard from "@/components/Roster/RecruitCard";

export default {
  name: "ImportNewKitty",
  components: {RecruitCard},
  data() {
    return {
      result: []
    };
  },
  mounted() {
    this.$store.dispatch('getKittiesFromCk', {offset:0})
    .then((resp) => {
      this.result = resp.data.kitties;
    })
    .catch((e) => {
      console.error(e);
    })
  }
}
</script>

<style scoped>

</style>