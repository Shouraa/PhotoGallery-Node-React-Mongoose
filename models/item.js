const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

module.exports = item = mongoose.model("item", ItemSchema);
