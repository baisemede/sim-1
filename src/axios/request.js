//Axios的封装  request.js
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.baseURL =
  "http://sc.ftqq.com"; //api 的前缀网址
axios.defaults.withCredentials = false;

export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    };
    if (type.toLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }
    axios(option)
      .then(res => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch(err => {
        reject({ msg: "网络异常" });
      });
  });
}
