<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        <img src="../../assets/logo.png" class="logo">

        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isUserLogin">
        
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
      </template>
      <!-- 2 -->
      <template v-else>

      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearId');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: gray;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: gray;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: gray;
  font-weight: bold;
}
</style>
