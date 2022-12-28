<template>
  <div>
    <div class="survey-list" v-if="surveyList.length > 0">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Survey Title</th>
              <th class="text-left">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in surveyList" :key="item._id">
              <td>{{ item.title }}</td>
              <td>
                <v-btn fab x-small depressed>
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="loading-icon" v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>
<script>
export default {
  name: "SurveyList",
  data(){
    return {
      pageTitle:"Survey List",
    }
  },
  created() {
    this.getAllSurveyList();
    this.setCurrentPageTitle();
  },
  computed: {
    surveyList() {
      return this.$store.getters.GET_SURVEY_LIST;
    },
  },
  methods: {
    setCurrentPageTitle() {
      this.$store.dispatch("CURRENT_PAGE_TITLE",this.pageTitle)
    },
    getAllSurveyList() {
      this.$store.dispatch("GET_ALL_SURVEYS");
    },
  },
};
</script>
<style scoped>
.survey-list {
  max-width: 960px;
  margin: auto;
  margin-top: 5rem;
}
.loading-icon {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>