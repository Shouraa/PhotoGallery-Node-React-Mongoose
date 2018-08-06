const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  nationality: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: false
  },
  skills: {
    type: [String],
    required: false
  },
  whySofterDeveloper: {
    type: String,
    required: false
  },
  longTermVision: {
    type: String,
    required: false
  },
  motivatesMe: {
    type: String,
    required: false
  },
  favoriteQuote: {
    type: String,
    required: false
  },
  joinedOn: {
    type: String,
    required: false
  }
});

module.exports = item = mongoose.model("item", ItemSchema);
