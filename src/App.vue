<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
html, body {
  font-family: 'Inter', sans-serif !important;
  font-weight: 300;
}

#app {
  font-family: 'Inter', sans-serif !important;
}
</style>
