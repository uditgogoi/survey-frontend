<template>
  <div>
    <div class="links d-flex justify-end pa-3 ml-5 mt-5">
      <v-btn color="primary" text @click="$router.push({path:'/documentation'})">
        <v-icon small class="blue white--text">mdi-clipboard-text</v-icon>
        <span class="pl-1 text-capitalize">Documentation</span>
      </v-btn>
    </div>
    <div class="login-wrapper px-10 py-5">
      <h2>
        <v-btn-toggle v-model="toggle" mandatory group>
          <v-btn> Login </v-btn>

          <v-btn> Signup </v-btn>
        </v-btn-toggle>
      </h2>
      <div class="form mt-10">
        <div class="field">
          <label>Email</label>
          <v-text-field
            solo
            flat
            dense
            background-color="inputBackground"
            v-model="email"
          ></v-text-field>
        </div>
        <div class="field mt-2">
          <label>Password</label>
          <v-text-field
            solo
            flat
            dense
            background-color="inputBackground"
            type="password"
            v-model="password"
            @keyup.enter="onKeyPressEnterPassword()"
          ></v-text-field>
        </div>
        <div class="field mt-2" v-if="toggle === 1">
          <label>Confirm Password</label>
          <v-text-field
            solo
            flat
            dense
            background-color="inputBackground"
            v-model="confirmPassword"
          ></v-text-field>
        </div>
        <div class="field mt-2" v-if="toggle === 0">
          <v-btn
            class="success"
            depressed
            @click="login"
            :loading="displayLoginLoading"
            >Login</v-btn
          >
        </div>
        <div class="field mt-2" v-if="toggle === 1">
          <v-btn class="success" depressed @click="signup">Sign up</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      showSignup: false,
      toggle: undefined,
      email: "",
      confirmPassword: "",
      password: "",
      displayLoginLoading: false,
    };
  },
  methods: {
    onKeyPressEnterPassword() {
      if (this.toggle) return;
      this.login();
    },
    login() {
      if (!this.email || !this.password) {
        return;
      }
      this.displayLoginLoading = true;
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("LOGIN", user)
        .then(() => {
          this.displayLoginLoading = false;
          this.$router.push({ path: "/dashboard" });
        })
        .catch((e) => {
          this.showNotification({ message: e.message, type: "error" });
          this.displayLoginLoading = false;
        });
    },
    signup() {
      this.$store.dispatch("");
    },
    showNotification(notification) {
      this.$toast.open({
        message: notification.message,
        type: notification.type,
        // all of other options may go here
      });
    },
  },
};
</script>
<style scoped>
.login-wrapper {
  width: 450px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid rgba(177, 177, 177, 0.3);
  border-radius: 4px;
}
</style>