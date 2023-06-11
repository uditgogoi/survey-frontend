import AuthService from "@/services/Api/Auth";
import SurveyService from "@/services/Api/Survey";

export const LOGIN = ({ dispatch }, user) => {
  return new Promise((resolve, reject) => {
    AuthService.login(user).then(
      (response) => {
        if (!response || !response.data || response.data.status === 'err') {
          reject('error')
        } else {
          const data = response.data;
          dispatch("SET_LOGIN_DETAILS", data);
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('accessToken', data.accessToken)
          resolve(data);
        }

      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const SET_LOGIN_DETAILS = ({ commit }, data) => {
  commit("SET_LOGIN_DETAILS", data);
}


export const LOGOUT = () => {
  return new Promise(() => {
    localStorage.clear();
  });
};

export const SIGNUP = (ignore, user) => {
  return new Promise((resolve, reject) => {
    AuthService.signup(user).then(
      (response) => {
        console.log("SIGNUP response: ", response);
        const data = response.data;
        resolve(data);
      },
      (error) => {
        console.log("SIGNUP error: ", error);
        reject("error:", error.error);
      }
    );
  });
};

export const GET_ALL_SURVEYS = ({ commit }) => {
  return new Promise((resolve, reject) => {
    SurveyService.getAllSurvey().then(
      (response) => {
        const data = response.data;
        console.log("GET_ALL_SURVEYS res.data: ", data);
        commit("SET_ALL_SURVEY_LIST", data);
        resolve(data);
      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const GET_SURVEY_DETAILS = ({ commit }, payload) => {
  console.log("GET_SURVEY_DETAILS, ", payload);
  return new Promise((resolve, reject) => {
    SurveyService.getSurveyDetails(payload).then(
      (response) => {
        if (!response.data.status) {
          reject(response.data.message);
          return;
        }
        const data = response.data.data;
        commit("SET_SURVEY_DETAILS", data);
        resolve(data);
      },
      (error) => reject(error.response.data)
    )
  })
}

export const CURRENT_PAGE_TITLE = ({ commit }, pageTitle) => {
  commit("SET_CURRENT_PAGE_TITLE", pageTitle);
}
