import axios from "axios";



const instance = axios.create({
  // baseURL: 'https://api.realworld.io/api/'
  //  baseURL: 'http://10.88.54.43:8088/api/'
  baseURL: import.meta.env.VITE_APP_API//dev-api
});



export default instance