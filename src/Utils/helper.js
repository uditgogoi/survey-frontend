export const getQuestionCode = function(questionType) {
    if (questionType === "1to5" || questionType === "1-5") {
      return "1to5";
    }
    if (questionType === "1to10" || questionType === "1-10") {
      return "1to10";
    }
    if (questionType === "ADS" || questionType === "Agree/Disagree") {
      return "ADS";
    }
    if (questionType === "SS" || questionType === "Satisfaction Scale") {
      return "SS";
    }
    if (questionType === "MCQ" || questionType === "Multiple Choice") {
      return "MCQ";
    }
    if (
      questionType === "OE" ||
      questionType === "radio" ||
      questionType === "Open Ended"
    ) {
      return "OE";
    }
  };


  export const getCategoryType = function(questionType) {
    if (questionType === "1to5" || questionType === "1-5") {
      return "1-5";
    }
    if (questionType === "1to10" || questionType === "1-10") {
      return "1-10";
    }
    if (questionType === "ADS" || questionType === "Agree/Disagree") {
      return "Agree/Disagree";
    }
    if (questionType === "SS" || questionType === "Satisfaction Scale") {
      return "Satisfaction Scale";
    }
    if (
      questionType === "OE" ||
      questionType === "radio" ||
      questionType === "Open Ended"
    ) {
      return "Open Ended";
    }
    if (questionType === "MCQ" || questionType === "Multiple Choice") {
      return "Multiple Choice";
    }
  };
  