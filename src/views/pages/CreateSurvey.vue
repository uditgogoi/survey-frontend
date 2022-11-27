<template>
  <div>
    <h4>Create Survey</h4>
    <v-divider class="mt-2"></v-divider>
    <v-container>
      <v-row class="mt-5 pl-5">
        <v-col>
          <v-btn
            depressed
            @click="addQuestionButton"
            id="addQuestion"
            color="secondary"
          >
            <span class="font-700"> Add question </span>
          </v-btn>
        </v-col>
      </v-row>
      <div class="question-list-wrapper mt-5 px-4">
        <v-row
          class="question-list"
          v-for="(question, index) in questionList"
          :key="question.id"
        >
        <v-col cols="10">
          <v-expansion-panels
            v-if="question.questionType != 'OE'"
            class="expansion-panel"
          >
            <v-expansion-panel class="mt-5">
              <v-expansion-panel-header
                :id="'selectedQuestion' + index"
                color="inputBackground"
              >
                <v-row>
                  <v-col cols="9" class="font-400">
                    Q{{ index + 1 }}. {{ question.title }}</v-col
                  >
                  <v-col cols="3" class="pl-2 d-flex align-center justify-left">
                    <v-chip color="primary" small label>
                      <span class="font-700">{{
                        getType(question.questionType)
                      }}</span>
                    </v-chip>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <div>
                <v-expansion-panel-content
                  :id="'ExpandedQuestion' + index"
                  v-if="question.options.length > 0"
                  class="mt-4"
                >
                  <span class="font-400">Options:</span>
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
                </v-expansion-panel-content>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <v-btn fab small class="ma-2 white--text" color="red" text @click="removeQuestion(question)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
        </v-row>
      </div>
    </v-container>
    <CreateQuestion
      v-if="showAddQuestionsModal"
      @on-add-question="onAddQuestion"
    />
  </div>
</template>
<script>
import { getCategoryType } from "@/Utils/helper";
export default {
  name: "CreateSurvey",
  components: {
    CreateQuestion: () => import("@/components/modals/CreateQuestion.vue"),
  },
  data() {
    return {
      surveyQuestion: "",
      selectedQuestionType: "multiple",
      multipleQuestionList: [{ id: 1, value: "" }],
      radioOptionList: [{ id: 1, value: "" }],
      showAddQuestionsModal: false,
      selectedQuestionList: [],
      questionList: [],
      questionType: {
        id: "1",
        text: "Multiple options",
        value: "multiple",
      },
      optiontype: [
        {
          id: "1",
          text: "Multiple options",
          value: "multiple",
        },
        {
          id: "2",
          text: "Yes/No",
          value: "yesOrNo",
        },
        {
          id: "3",
          text: "Radio",
          value: "single",
        },
        {
          id: "4",
          text: "Free Text",
          value: "text",
        },
      ],
    };
  },
  methods: {
    onSelectQuestionType(e) {
      this.selectedQuestionType = e;
    },
    onAddNewOption(option) {
      this.multipleQuestionList.push({ id: option.id + 1, value: "" });
    },
    onRemoveOptionFromMultiple(option) {
      if (this.multipleQuestionList.length > 1) {
        this.multipleQuestionList = this.multipleQuestionList.filter(
          (ele) => ele.id !== option.id
        );
      }
    },
    addQuestionButton() {
      this.showAddQuestionsModal = true;
    },
    onAddQuestion(question) {
      this.showAddQuestionsModal = false;
      if (!question) {
        return;
      }
      let newQuestion = question;
      newQuestion.id = this.questionList.length + 1;
      this.questionList.push(newQuestion);
      this.selectedQuestionList.push({
        question: newQuestion.title,
        type: newQuestion.questionType,
        options: newQuestion.options,
      });
      console.log(this.selectedQuestionList);
    },
    getType(category) {
      return getCategoryType(category);
    },
    removeQuestion(question) {
      this.questionList= this.questionList.filter(ele=> ele.id!== question.id)
    }
  },
};
</script>
<style scoped>
.survey-content {
  width: 75%;
  margin: auto;
}

.create-btn {
  position: absolute;
  right: 0px;
  bottom: 100px;
}
.question-list-wrapper {
  width: 85%;
  margin: auto;
  min-height: 50vh;
}
.expansion-panel {
}
</style>