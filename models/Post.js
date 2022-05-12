const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  subcategoryID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
