import axios from "axios";

export const axiosInstance=axios.create({
   // baseURL:import.meta.env.MODE==="development"?"http://localhost:3001/api":"/api",
    baseURL:"https://realtime-chat-app-3-0980.onrender.com/api",
    withCredentials:true,

});