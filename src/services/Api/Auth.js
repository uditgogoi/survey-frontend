import Api from "@/services";

export default {
    signup(user) {
        return Api.post("auth/signup", user);
    },

    login(user) {
        return Api.post("auth/login",user)
    }
}

