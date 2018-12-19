const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  comment:{type:String},
  product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true}
});

module.exports = mongoose.model('Comment',commentSchema);