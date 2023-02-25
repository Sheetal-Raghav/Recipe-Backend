const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name:{type:String,required:true},
  title: {type: String,required: true},
  author: {type: String,required: true},
  image: {type: String,required: true},
  ingredients: {type: Array,required: true},
  receipedirections: {type: Array,required: true },
});
const Posts = mongoose.model("Post", PostSchema);
module.exports = Posts;
