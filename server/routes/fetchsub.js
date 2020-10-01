const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const subs=mongoose.model('subs');
router.get('/fetchdata',(req,res)=>
{
	  subs.find()
	  .then(result => {
	  	res.status(200).json({
	  		data: result
	  	})
	  })
	
})

module.exports = router;