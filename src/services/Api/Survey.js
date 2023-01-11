import Api from "@/services";

export default {
  getAllSurvey() {
    const token= localStorage.getItem('accessToken');
    return Api.post("app/survey/list", {accessToken:token});
  },

  saveSurveyDetails(payload) {
    const token= localStorage.getItem('accessToken');
    return Api.post("app/survey/add",{...payload,accessToken:token});
  },

  getSurveyDetails(payload) {
    const token= localStorage.getItem('accessToken');
    return Api.post("app/survey/list/id",{...payload, accessToken:token})
  }
};
