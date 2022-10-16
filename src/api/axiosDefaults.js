import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.baseURL = 'https://partysite-api/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();