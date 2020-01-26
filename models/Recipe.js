const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  versions: [{ type: Types.ObjectId, ref: 'PreviousRecipe' }]
});

module.exports = model('Recipe', schema);
