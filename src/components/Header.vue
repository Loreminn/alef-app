<template>
  <div class="l-header">
    <div class="l-header__logo">
      <img src="../assets/images/header-logo.png" alt="logo" />
    </div>
    <div class="l-header__nav">
      <router-link to="/">Форма</router-link>
      <router-link to="/preview">Превью</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LHeader",
};
</script>

<style lang="scss">
.l-header {
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  display: flex;
  padding: 22px 0;
  margin-bottom: 30px;

  &__logo {
    margin-left: 51px;
  }

  &__nav {
    margin-left: 32%;
    a {
      font-size: 14px;
      line-height: 24px;
      color: rgba(17, 17, 17, 0.48);
      text-decoration: none;
      margin-left: 24px;
    }
    a.router-link-exact-active {
      color: black;
      border-bottom: 1px solid black;
    }
  }
}
</style>
