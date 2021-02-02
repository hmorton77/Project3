const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockName: {
    type: String,
    required: true,
  },
  // Feature TBA
  //   datePurchased: {
  //     type: Date,
  //     required: true,
  //   },
  stockAmount: {
    type: Number,
    required: true,
  },
  // Feature TBA
  //   dollarSpent: {
  //     type: Number,
  //     required: true,
  //   },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
