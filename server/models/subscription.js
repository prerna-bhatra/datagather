const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const subSchema=new Schema({
	email:{
		type: String,
		require:true
	},
	userid : {
		type: String,
		require:true
	}
	
}, 
{
     timestamps:true
   }

)


mongoose.model("subs",subSchema);