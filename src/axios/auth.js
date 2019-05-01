//auth.js
import request from "./request";

const URL = {
  KEY: "/SCU50021T8f24b6a3edb1d632cbfb265b1fb62a705cc446a5c78a2.send",

};

export default {
    wechat({ text, desp }) {
    return request(URL.KEY, "GET", { text, desp });
  },

};