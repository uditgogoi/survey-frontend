<template>
  <div>
    <v-container v-if="surveyList.length > 0">
      <v-row>
        <v-col cols="4">
          <div class="survey-list">
            <v-list dense>
              <v-list-item-group v-model="selectedSurvey" color="primary">
                <v-list-item
                  v-for="item in surveyList"
                  :key="item._id"
                  @click="onSelectSurvey(item._id)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-btn fab text x-small depressed>
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-col>
        <v-col cols="8" class="pa-5">
          <div class="survey-details pa-5">
            <div v-if="surveyDetailsLoading" class="survey-details-loading">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div class="survey-details-content" v-else>
              <h3 class="py-2 text-capitalize mb-5">{{ surveyDetails.title }}</h3>
              <div
                class="survey-questions mt-3 pa-2"
                v-for="question in surveyDetails.questions"
                :key="question.id"
              >
                <p class="question-title pa-2 font-italic">
                  {{ question.title }} ?
                </p>
                <div v-if="question.options.length > 0">
                  <v-layout flex-wrap justify-start>
                    <v-flex
                      justify-start
                      v-for="option in question.options"
                      :key="option.value"
                      class="mt-5"
                    >
                      <v-chip color="primary" outlined label class="ml-4">
                        <span class="font-700">{{ option.value }}</span>
                        <v-icon right small> mdi-tag </v-icon>
                      </v-chip>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="loading-icon" v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>
<script>
export default {
  name: "SurveyList",
  data() {
    return {
      pageTitle: "Survey List",
      selectedSurvey: 0,
      surveyDetailsLoading: true,
    };
  },
  created() {
    this.getAllSurveyList();
    this.setCurrentPageTitle();
  },
  computed: {
    surveyList() {
      return this.$store.getters.GET_SURVEY_LIST;
    },
    surveyDetails() {
      return this.$store.getters.SURVEY_DETAILS;
    },
  },
  watch: {
    surveyList: function (value) {
      if (value.length > 0) {
        this.setDefaultSelectedSurvey();
      }
    },
  },
  methods: {
    setCurrentPageTitle() {
      this.$store.dispatch("CURRENT_PAGE_TITLE", this.pageTitle);
    },
    getAllSurveyList() {
      this.$store.dispatch("GET_ALL_SURVEYS");
    },
    setDefaultSelectedSurvey() {
      const defaultSurveyId = this.surveyList[0]?._id;
      this.onSelectSurvey(defaultSurveyId);
    },
    onSelectSurvey(surveyId) {
      this.surveyDetailsLoading = true;
      const payload = {
        id: surveyId,
      };
      this.$store
        .dispatch("GET_SURVEY_DETAILS", payload)
        .then(() => (this.surveyDetailsLoading = false));
    },
  },
};
</script>
<style scoped>
.survey-details-loading {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-icon {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.survey-details {
  min-height: 50vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.survey-questions {
  border-left: 3px solid #22ba5f;
  background: #eff0f0;
}
</style>