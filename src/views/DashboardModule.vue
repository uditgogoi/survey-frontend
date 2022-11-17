<template>
  <div id="dashboard-module">
    <app-drawer></app-drawer>
    <v-main>
      <v-container
        fluid
        class="content"
      >
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import AppDrawer from "@/components/AppDrawer.vue";
export default {
  name: "DashboardModule",
  components: {
    AppDrawer,
  },
};
</script>
<style>
.content {
  min-height: 100vh;
  height: 100vh;
  overflow: scroll;
}
</style>