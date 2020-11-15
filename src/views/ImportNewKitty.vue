<template>
  <div>
    <progress class="progress is-danger" max="100" v-show="loading"></progress>
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
      result: [],
      loading : false,
    };
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch('getKittiesFromCk', {offset:0})
    .then((resp) => {
      this.result = resp.data.kitties.filter( (k) => {
        return !this.$store.getters.isIdInSuits(k.id);
      })
      this.loading = false;
    })
    .catch((e) => {
      console.error(e);
      this.loading = false;
    })
  }
}
</script>

<style scoped>

</style>