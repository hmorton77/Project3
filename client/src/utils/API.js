import axios from "axios";

export default {
  logIn: function (user) {
    return axios.post("/users/login", user);
  },
  register: function (user) {
    return axios.post("/users/register", user);
  },

  //saving the purchased stock into one's database
  saveStock: function (stockData) {
    return axios.post("/api/stocks/", stockData);
  },
  getTickers: function () {
    return axios.get("/api/stocks/tickers");
  },
  getStocks: function () {
    return axios.get("/api/stocks/");
  },
  getStock: function (id) {
    return axios.get("/api/stocks/getid/" + id);
  },
};

export const iex = {
  base_url: "https://cloud.iexapis.com/stable",
};
