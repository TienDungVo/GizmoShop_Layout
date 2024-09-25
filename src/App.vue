<template>
  <base-nav />
  <router-view></router-view>
  <base-footer />
</template>

<script>
import BaseNav from "./components/Nav.vue";
import BaseFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: { BaseNav, BaseFooter },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
