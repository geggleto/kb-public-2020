<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="(i,k) in suits">
        <SuitCard :kitty="i" :initial="false">
          <template>
            <router-link :to="getRoute(i.id)" class="card-footer-item">Modify</router-link>
            <a href="#" class="card-footer-item">Retire</a>
          </template>
        </SuitCard>
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
  },
  methods: {
    getRoute(id) {
      return '/modify/'+id;
    }
  }
}
</script>