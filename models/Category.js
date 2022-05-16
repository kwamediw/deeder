const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
      Name: {
            type: String,
            required: true
      },
      _id: {
            type: String,
            required: true
      },
})

const categoryModel = model("Category", categorySchema);
module.exports = categoryModel;