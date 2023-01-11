import axios from "axios";
const Api = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND}/`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Api.interceptors.response.use((response)=>{
//   return response;
// },(err)=> {
//   if(err.response.data.message==='jwt expired') {
//     localStorage.clear();
//     window.location.reload();
//   }
// })

export default Api;