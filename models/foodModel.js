const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default: 'undefined',
  },
  kcal: {
    type: Number,
  },
  price: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: 'undefined',
  },
  isToday: {
    type: Boolean,
    default: false,
  },
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food