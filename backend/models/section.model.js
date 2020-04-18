const mongoose = require('mongoose');
const Card = mongoose.model('Card');

const SectionSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title:  {
    type: String,
    trim: true
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }]
})

SectionSchema.pre('remove', async function(next) {
  // Ensure all subdocuments are removed from the database
  await Promise.all(this.cards.map(card => Card.findByIdAndDelete(card)))
  next();
});

mongoose.model('Section', SectionSchema)

