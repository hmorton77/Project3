const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockName: {
    type: String,
    required: true,
  },
  stockAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
