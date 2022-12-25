import Api from "@/services";
export default {
    signup(user) {
        return Api.post("auth/signup", user);
    },

    login(user) {
        return Api.post("auth/login",user)
    },
    logout() {}
}



// calendarAuthMicrosoftSignIn(payload) {
//     return Api.post("/auth/calendar/microsoft", payload, {
//       headers: {
//         Authorization: "Bearer " + payload.token,
//       },
//     });
//   },
