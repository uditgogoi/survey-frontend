import Api from "@/services";
export default {
  getAllSurvey() {
    const token= localStorage.getItem('accessToken');
    return Api.post("app/survey/list", {accessToken:token});
  },

  saveSurveyDetails(payload) {
    const token= localStorage.getItem('accessToken');
    payload.accessToken=token;
    return Api.post("app/survey/add",payload);
  }
};
