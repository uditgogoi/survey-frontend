<template>
    <div>
        <div class="login-wrapper px-10 py-5">
            <h2>
                <v-btn-toggle 
                    v-model="toggle"
                    mandatory
                    group
                    >
                    <v-btn>
                      Login
                    </v-btn>
            
                    <v-btn>
                     Signup
                    </v-btn>
                </v-btn-toggle>
            </h2>
            <div class="form mt-10">
                <div class="field">
                    <label>Email</label>
                    <v-text-field solo flat dense background-color="inputBackground" v-model="email"></v-text-field>
                </div>
                <div class="field mt-2">
                    <label>Password</label>
                    <v-text-field solo flat dense background-color="inputBackground" v-model="password"></v-text-field>
                </div>
                <div class="field mt-2" v-if="toggle===1">
                    <label>Confirm Password</label>
                    <v-text-field solo flat dense background-color="inputBackground" v-model="confirmPassword"></v-text-field>
                </div>
                <div class="field mt-2" v-if="toggle===0">
                    <v-btn class="success" depressed @click="login" :loading="displayLoginLoading">Login</v-btn>
                </div>
                <div class="field mt-2"  v-if="toggle===1">
                    <v-btn class="success" depressed @click="signup">Sign up</v-btn>
                </div>
            </div>
            
        </div>
    </div>  
</template>
<script>
export default {
    name:'LoginComponent',
    data(){
        return{
            showSignup:false,
            toggle:undefined,
            email:"",
            confirmPassword:'',
            password:'',
            displayLoginLoading:false,
        }
    },
    methods:{
        login() {
            if(!this.email || !this.password) {
                return;
            }
            this.displayLoginLoading=true;
            const user= {
                email:this.email,
                password:this.password
            }
            this.$store.dispatch('LOGIN',user).then(()=> {
                this.displayLoginLoading=false;
                this.$router.push({path:"/dashboard"})
               
            }).catch(()=> this.displayLoginLoading=false)
        }, 
        signup() {
            this.$store.dispatch("")
        }
    }
}
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