const mongoose = require('mongoose');
const UserSchema = require('./user.schema');

const CardSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title: {
    type: String,
    trim: true
  },
  creator: UserSchema,
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
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section'
  }
})

mongoose.model('Card', CardSchema)

