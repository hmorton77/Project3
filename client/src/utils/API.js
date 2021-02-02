import axios from "axios";

export default {
  //saving the purchased stock into one's database
  saveStock: function (stockData) {
    return axios.post("/api/stocks", stockData);
  },
  getStocks: function () {
    return axios.get("./api/stocks");
  },
  getStock: function (id) {
    return axios.get("./api/stocks/" + id);
  },
};
