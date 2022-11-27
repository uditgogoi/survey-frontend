<template>
  <div class="px-3">
    <v-dialog class="" persistent v-model="dialog" max-width="960">
      <v-card class="pa-2">
        <v-card-title class=""> Add Survey Question </v-card-title>
        <v-card-text>
          <v-container class="mt-5 question-body">
            <v-row>
              <v-col cols="4">
                <v-select
                  v-model="questionType"
                  id="questionType"
                  :items="questionTypeOptions"
                  label="Question Type"
                  flat
                  solo
                  background-color="inputBackground"
                  dense
                  @change="onSelectQuestion"
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="4" v-if="questionType == 'Multiple Choice'">
                <v-checkbox
                  hide-details
                  v-model="convertToRadio"
                  :label="`Convert to radio buttons`"
                  class="mt-0"
                ></v-checkbox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="question"
                  id="question"
                  label="Question"
                  flat
                  background-color="inputBackground"
                  solo
                  type="text"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row
              class="mt-5"
              v-if="questionType && questionOptionsNonMulti.length > 0"
            >
              <v-col cols="4">
                <h4>Options:</h4>
              </v-col>
            </v-row>

            <v-container
              v-if="questionType == 'Multiple Choice'"
              class="pl-4 mt-4"
            >
              <v-row v-for="option in questionOptions" :key="option.id">
                <v-col cols="10">
                  <v-text-field
                    v-model="option.text"
                    :id="'option' + option.id"
                    label="Enter choice"
                    background-color="inputBackground"
                    solo
                    flat
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-btn
                    pl-3
                    text
                    color="error"
                    :id="'delete' + option.id"
                    @click="removeOption(option)"
                  >
                    <v-icon>mdi-delete-outline</v-icon></v-btn
                  >
                </v-col>
              </v-row>
              <v-row class="mt-2">
                <v-col cols="12">
                  <v-btn
                    text
                    color="primary"
                    @click="addMoreOptionField"
                    id="addMoreOption"
                  >
                    <span class="">Add more option</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="questionType !== 'Multiple Choice'" class="pa-0">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-chip 
                    class="ma-2" 
                    label 
                    color="primary" 
                    :class="{ 'ml-3': key > 0 }"
                    v-for="(option, key) in questionOptionsNonMulti" 
                    :key="key"> 
                    {{ option.text }} 
                    <v-icon right small>
                      mdi-tag
                    </v-icon>
                  </v-chip>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-card-text>
        <v-card-actions mt-5>
          <v-container class="px-2 mt-5">
            <v-row>
              <v-col :offset="9">
                <v-btn
                  color="success"
                  depressed
                  class="mr-3"
                  @click="constructQuestion"
                  >Add</v-btn
                >
                <v-btn
                  color="error"
                  depressed
                  text
                  @click="$emit('on-add-question')"
                  >Close</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script>
import { getQuestionCode } from "@/Utils/helper";

export default {
  data() {
    return {
      dialog: true,
      questionType: "",
      question: "",
      questionOptionsNonMulti: [],
      convertToRadio: false,
      questionOptions: [
        { id: 1, text: "" },
        { id: 2, text: "" },
      ],
      questionAgreeDisagree: [
        { id: 1, text: "Strongly disagree" },
        { id: 2, text: "Disagree" },
        { id: 3, text: "Neutral" },
        { id: 4, text: "Agree" },
        { id: 5, text: "Strongly Agree" },
      ],
      satisfactionScaleOptions: [
        { id: 1, text: "Very Unsatisfied" },
        { id: 2, text: "Unsatisfied" },
        { id: 3, text: "Neutral" },
        { id: 4, text: "Satisfied" },
        { id: 5, text: "Very Satisfied" },
      ],
      questionTypeOptions: [
        "1-5",
        "1-10",
        "Agree/Disagree",
        "Satisfaction Scale",
        "Multiple Choice",
        "Open Ended",
      ],
      requiredQuestion: false,
    };
  },

  methods: {
    onSelectQuestion() {
      let numericQuestionOptions = [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" },
        { id: 4, text: "4" },
        { id: 5, text: "5" },
        { id: 6, text: "6" },
        { id: 7, text: "7" },
        { id: 8, text: "8" },
        { id: 9, text: "9" },
        { id: 10, text: "10" },
      ];
      if (this.questionType === "1-5") {
        this.questionOptionsNonMulti = numericQuestionOptions.slice(0, 5);
      }
      if (this.questionType === "1-10") {
        this.questionOptionsNonMulti = numericQuestionOptions;
      }
      if (this.questionType === "Agree/Disagree") {
        this.questionOptionsNonMulti = this.questionAgreeDisagree;
      }
      if (this.questionType === "Satisfaction Scale") {
        this.questionOptionsNonMulti = this.satisfactionScaleOptions;
      }
      if (this.questionType === "Open Ended") {
        this.questionOptionsNonMulti = [];
      }
    },

    addMoreOptionField() {
      const newOption = {
        id: this.questionOptions.length + 1,
        text: "",
      };
      this.questionOptions.push(newOption);
    },

    removeOption(selectedOption) {
      if (this.questionOptions.length == 2) {
        return;
      }
      this.questionOptions = this.questionOptions.filter(
        (option) => option.id != selectedOption.id
      );
      this.questionOptions = this.questionOptions.map((option, key) => {
        return {
          id: key + 1,
          text: option.text,
        };
      });
    },

    constructQuestion() {
      const question = {
        questionType: this.convertToRadio? 'radio':getQuestionCode(this.questionType),
        title: this.question,
        required: true,
      };

      if (this.questionType === "Multiple Choice") {
        question.options = this.questionOptions.map((val) => {
          return {
            id: val.id,
            value: this.convertToRadio ? val.text.toLowerCase() : val.text,
            displaySequence: val.id,
          };
        });
      } else {
        question.options = this.questionOptionsNonMulti.map((val) => {
          return {
            id: val.id,
            value: val.text,
            displaySequence: val.id,
          };
        });
      }
      this.$emit("on-add-question", question);
    },
  },
};
</script>
<style coped>
.question-body {
  width: 90%;
  margin: auto;
}
</style>
  