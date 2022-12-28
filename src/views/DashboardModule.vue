<template>
  <div id="dashboard-module">
    <app-drawer></app-drawer>
    <v-main>
      <v-container
        fluid
        class="content"
      >
        <app-header></app-header>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import AppDrawer from "@/components/AppDrawer.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "DashboardModule",
  components: {
    AppDrawer,
    AppHeader
  },
  created() {
    let user= localStorage.getItem('user');
    if(!user) {
      localStorage.clear();
      this.$router.push({path:'auth'});
      return;
    }
    user= JSON.parse(user);
    this.$store.dispatch('SET_LOGIN_DETAILS',user);
    // commit("SET_LOGIN_DETAILS", data);

  }
};
</script>
<style>
.content {
  min-height: 100vh;
  height: 100vh;
  overflow: scroll;
}
</style>