import service from "@/services/Api/Auth";

export const LOGIN = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    console.log(user);
    service.login(user).then(
      (response) => {
        const data = response.data;
        commit("SET_LOGIN_DETAILS", data);
        localStorage.setItem('accessToken', data.accessToken)
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const SIGNUP = (user) => {
  return new Promise((resolve, reject) => {
    service.signup(user).then(
      (response) => {
        const data = response.data;
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
