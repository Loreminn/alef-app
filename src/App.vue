<template>
  <div id="app">
    <l-header />
    <div class="container">
      <router-view />
    </div>
    <l-footer />
  </div>
</template>

<script>
import LHeader from "./components/Header.vue";
import LFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: { LHeader, LFooter },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 24px;
}

.container {
  max-width: 616px;
  margin: 0 auto;
}
</style>
