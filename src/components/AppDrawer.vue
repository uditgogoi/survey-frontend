<template>
  <v-navigation-drawer permanent dark color="dashboard" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">Survayour</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link  :to="item.link">
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "AppDrawer",
  data() {
    return {
      items: [
        {
          id: "create",
          icon: "mdi-pencil",
          link:'/dashboard/create',
          title: "Create survey",
        },
        {
          id: "list",
          link:'/dashboard/list',
          icon: "mdi-format-list-bulleted",
          title: "Survey list",
        },
      ],
    };
  },
};
</script>