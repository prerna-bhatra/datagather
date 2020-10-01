const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const subSchema=new Schema({
	googleId:String
})

mongoose.model("subs",subSchema);