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
    if(questionType === "radio")
    {
      return "Radio";
    }
    if (
      questionType === "OE" ||
      questionType === "Open Ended"
    ) {
      return "Open Ended";
    }
    if (questionType === "MCQ" || questionType === "Multiple Choice") {
      return "Multiple Choice";
    }
  };

  export const uuid= function() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
  }
  