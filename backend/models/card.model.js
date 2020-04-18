const mongoose = require('mongoose');

const AuthorSchema = {
  name: { type: String, trim: true },
  id: { type: String }
}


const CardSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  text: {
    type: String,
    trim: true
  },
  likedBy: {
    type: [String],
    default: []
  }
})

mongoose.model('Card', CardSchema)

