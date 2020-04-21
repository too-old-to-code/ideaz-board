const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = require('./user.schema');

const BoardSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title: {
    type: String,
    trim: true
  },
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section'
  }],
  accessPinHash: {
    type: String
  },
  creator: UserSchema,
  authorizedUsers: {
    type: [String]
  }
})

BoardSchema.statics.createHash = function (clearText) {
  return bcrypt.hash(clearText, 10);
}

BoardSchema.statics.compareHash = function (clearText, hash) {
  return bcrypt.compare(clearText, hash)
}

mongoose.model('Board', BoardSchema)

