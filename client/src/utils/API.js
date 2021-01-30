import axios from "axios";

export default {
  saveStock: function (stockData) {
    return axios.post("/api/stocks", stockData);
  },
};
