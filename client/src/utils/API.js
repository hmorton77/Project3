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

const axiosInstance = axios.create({
  baseURL: 'https://www.alphavantage.co/query'
});

export const getDailyStocks = (symbol) => {
  return axiosInstance.get('', {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      apikey: 'U10WITHB3BD72Y99%27'
    }
  })
}
