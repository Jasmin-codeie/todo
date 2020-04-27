import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://todo-cf399.firebaseio.com";

export default instance;
