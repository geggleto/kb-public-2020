<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="@/assets/Logo.svg" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">Roster</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/dojo">Dojo</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/store">Store</router-link>
        </a>

<!--        <div class="navbar-item has-dropdown is-hoverable">-->
<!--          <a class="navbar-link">-->
<!--            More-->
<!--          </a>-->

<!--          <div class="navbar-dropdown">-->
<!--            <a class="navbar-item">-->
<!--              About-->
<!--            </a>-->
<!--            <a class="navbar-item">-->
<!--              Jobs-->
<!--            </a>-->
<!--            <a class="navbar-item">-->
<!--              Contact-->
<!--            </a>-->
<!--            <a class="navbar-item">-->
<!--              Report an issue-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          Battle Points : {{bp}}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    bp() {
      return this.$store.getters.bp;
    }
  }
}
</script>