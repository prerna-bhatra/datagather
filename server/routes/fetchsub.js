const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const subs=mongoose.model('subs');
router.get('/fetchdata',(req,res)=>
{
	const subs2= subs.find({})
		console.log(subs2);
})

module.exports = router;