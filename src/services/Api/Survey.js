import Api from "@/services";

export default {
  getAllSurvey() {
    return Api.get("surveys", this.setAuthorizationHeader());
  },

  saveSurveyDetails(payload) {
    return Api.post("surveys/add", payload, this.setAuthorizationHeader());
  },

  getSurveyDetails(payload) {
    return Api.get("surveys/" + payload.id, this.setAuthorizationHeader())
  },

  setAuthorizationHeader() {
    const token = localStorage.getItem('accessToken');
    return {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
  }
};
