import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_APIURL;
// axios.defaults.baseURL = 'http://localhost:8000/'
// axios.defaults.baseURL = 'https://partysite-api.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const axiosReq = axios.create();
export const axiosRes = axios.create();
