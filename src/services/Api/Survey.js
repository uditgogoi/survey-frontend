import Api from "@/services";
const token= localStorage.getItem('accessToken');

export default {
  getAllSurvey() {
    return Api.post("app/survey/list", {accessToken:token});
  },

  saveSurveyDetails(payload) {
    return Api.post("app/survey/add",{...payload,accessToken:token});
  },

  getSurveyDetails(payload) {
    console.log(payload)
    return Api.post("app/survey/list/id",{...payload, accessToken:token})
  }
};
