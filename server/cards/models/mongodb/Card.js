const mongoose = require("mongoose");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const cardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  subtitle: DEFAULT_VALIDATION,
  description: {
    ...DEFAULT_VALIDATION,
    maxLength: 1024,
  },
  review: DEFAULT_VALIDATION,
  directedBy: DEFAULT_VALIDATION,
  web: URL,
  image: Image,
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
    trim: true,
  },
  likes: [String],
  createdAt: DEFAULT_VALIDATION,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;
