const express = require('express');
const mongoose=require('mongoose');
const subs=mongoose.model('subs');
const router = express.Router();
require
const passport=require("passport");
router.post('/addsubscribe',(req, res, next)=>{
	const email = req.body.email;
	const userid =req.body.userid;

	const list = new subs({
		email:email,
		userid:userid
	})

	list.save()
	.then(result => {
		res.status(200).json({
			message:'SUCCESS',
			data:result
		})
	})
})


module.exports = router;
