import Api from "@/services";
export default {
    signup(user) {
        return Api.post("auth/signup", user);
    },

    login(user) {
        return Api.post("auth/login",user)
    },
    logout() {
        const token= localStorage.getItem('accessToken');
        return Api.get("auth/signout", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      },
    
}



// calendarAuthMicrosoftSignIn(payload) {
//     return Api.post("/auth/calendar/microsoft", payload, {
//       headers: {
//         Authorization: "Bearer " + payload.token,
//       },
//     });
//   },
