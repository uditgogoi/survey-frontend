import AuthService from "@/services/Api/Auth";
import SurveyService from "@/services/Api/Survey";

export const LOGIN = ({ dispatch }, user) => {
  return new Promise((resolve, reject) => {
    AuthService.login(user).then(
      (response) => {
        if(!response || !response.data || response.data.status==='err' ) {
          reject('error')
        } else{
          const data = response.data.data;
          dispatch("SET_LOGIN_DETAILS", data);
          localStorage.setItem('user',JSON.stringify(data))
          localStorage.setItem('accessToken',JSON.stringify(data.accessToken))
          resolve(data);
        }
       
      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const SET_LOGIN_DETAILS=({commit},data)=> {
  commit("SET_LOGIN_DETAILS",data);
}


export const LOGOUT = () => {
  return new Promise((resolve, reject) => {
    AuthService.logout().then(
      (response) => {
        if (response.data.status) {
          localStorage.clear();
          resolve(response.data.data);
        } else {
          reject(response.data)
        }
      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const SIGNUP = (user) => {
  return new Promise((resolve, reject) => {
    AuthService.signup(user).then(
      (response) => {
        const data = response.data.data;
        resolve(data);
      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const GET_ALL_SURVEYS=({commit})=> {
  return new Promise((resolve, reject) => {
    SurveyService.getAllSurvey().then(
      (response) => {
        const data = response.data.data;
        commit("SET_ALL_SURVEY_LIST", data);
        resolve(data);
      },
      (error) => {
        reject(error.response.data);
      }
    );
  });
};

export const GET_SURVEY_DETAILS = ({commit},payload)=> {
  return new Promise((resolve, reject)=> {
    SurveyService.getSurveyDetails(payload).then(
      (response)=> {
        if(!response.data.status) {
          reject(response.data.message);
          return;
        }
        const data= response.data.data;
        commit("SET_SURVEY_DETAILS",data);
        resolve(data);
      },
      (error)=> reject(error.response.data)
    )
  })
}

export const CURRENT_PAGE_TITLE=({commit},pageTitle)=> {
  commit("SET_CURRENT_PAGE_TITLE", pageTitle);
}
