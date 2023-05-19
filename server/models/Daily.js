const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Daily = mongoose.model("Daily", DailySchema);

module.exports = Daily;
