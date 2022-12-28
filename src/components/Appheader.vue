<template>
  <div class="nav-bar">
    <v-container>
      <v-row no-gutters>
        <v-col cols="4">
          <h3>{{ pageHeader }}</h3></v-col
        >
        <v-col cols="5"> <v-spacer></v-spacer> </v-col>
        <v-col cols="3" class="text-right">
          <v-menu transition="slide-y-transition" bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-avatar color="primary lighten-2 cursor-selector" size="42" v-on="on">
                <span class="white--text subtitle-1">
                  <v-icon color="white">mdi-account</v-icon>
                </span>
              </v-avatar>
            </template>
            <v-list>
              <v-list-item> User: {{ userDetails.email }} </v-list-item>
              <div v-for="(item, index) in headerMenuList" :key="index">
                <v-list-item
                  @click="onSelectMenuItem(item)"
                >
                  <v-list-item-title>
                    <div class="d-flex align-center">
                      <v-icon
                        class="icon-color"
                        dense
                        color="success lighten-1"
                        >{{ item.icon }}</v-icon
                      >
                      <div></div>
                      <span class="pl-4">{{ item.name }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </div>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { navHeaderList } from "@/config";
export default {
  name: "AppHeader",
  data() {
    return {
      headerMenuList: [],
    };
  },
  computed: {
    pageHeader() {
      return this.$store.getters.CURRENT_PAGE_TITLE;
    },
    userDetails() {
      return this.$store.getters.USER_DETAILS
    }
  },
  created() {
    this.headerMenuList = navHeaderList;
  },
  methods:{
    onSelectMenuItem(option) {
        if(option.id=='logout') {
            this.logout();
        }
    },
    logout() {
        // this.$router.push({path:'/auth'});
        window.location.reload();
        this.destroyToken();
    },
    destroyToken() {
      localStorage.clear();
    },
  }
};
</script>
<style>
.cursor-selector {
    cursor: pointer;
}
</style>