var express = require('express');
var mongoose = require('mongoose');
require('../db.js');
var Blob = mongoose.model('Blob'); 
var PublicGallery = mongoose.model('PublicGallery');
var User = mongoose.model('User');
var router = express.Router();
var session = require('express-session')
var sessionOptions = { 
	secret: 'ah, yes, I love security', 
	saveUninitialized: false, 
	resave: false 
};
router.use(session(sessionOptions));
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');  
}); 

router.get('/login', function(req, res, next) {
  res.render('login');  
}); 
  
router.post('/login', function(req, res){
	console.log(req.body.user);
	var username = req.body.user; 
	User.findOne({username:username}, function(err, user, count){
		if (user === null){
			res.redirect('register');
		}
		else{
			req.session.username = username;
			res.redirect('/gallery/'+req.session.username);
		}
	});
});  

router.post('/register', function(req, res){
	var user = req.body.user;
	console.log(req.body.user);
	User.findOneAndUpdate({username:user}, {}, {upsert:true}, function(err, newuser){
		if (err){
			console.log(err);
			return res.status(500).send("error: database weirdness");
		}
		console.log(newuser);
		res.redirect('/login');
	});
	/*
	var newUser = new User({
		username: user,
		blobNum: 0,
		blobs: []
	}); 
	newUser.save(function (err, userdata) {
		if (err){
			console.log(err);
			return res.status(500).send("error: database weirdness");
		}
		console.log(userdata);
	});*/
	
});

router.get('/register', function(req, res){
	res.render('register');
});

router.get('/gallery/:username', function(req, res){
	console.log(req.params.username);
	Blob.find({creator:req.params.username}, function(err, blobs, count){
		//console.log(blobs);
		User.findOne({username:req.params.username}, function(err, user, count){
			var blobpics = blobs.map(function(blob){
				//console.log(blob.pic);
				return blob.pic;
			});
			//console.log(blobpics)
			res.render('gallery/personal', {blobpics:blobpics, blobs:blobs, user:user});
		});
	});
});

router.get('/add', function(req, res, next) {
	console.log(req.session.username);
	res.render('add', {user:req.session.username});
});
  
router.get('/gallery', function(req, res){
	PublicGallery.findOne({}, function(err, gallery, count){
		//console.log(gallery);
		Blob.find({}, function(err, blob, count){
			console.log(req.session.username);
			res.render('gallery', {gallery:gallery, blob:blob, user:req.session.username});
		});
	});
}); 

router.post('/api/blobs/create', function(req, res) {
	//console.log(req.body);
	var creator = req.body.creator;
	var name = req.body.name;
	var pic = req.body.pic;
	var newBlob = new Blob({
		creator: creator,
		name: name,
		pic: pic
	});
	newBlob.save(function (err, data) {
		if (err){
			console.log(err);
			return res.status(500).send("error: database weirdness");
		}
		//put the blob in the public gallery
		PublicGallery.findOneAndUpdate({}, {$push: {"blobs" : newBlob._id}, $inc:{blobNum:1}}, {upsert:true}, function (err, data) {
			if (err){
				console.log(err);
				return res.status(500).send("error: database weirdness");
			}
			//console.log(data);
		});
	
		User.findOneAndUpdate({username:creator}, {$push: {"blobs" : newBlob._id}, $inc:{blobNum:1}}, {upsert:true}, function(err, result){
			if (err){
				console.log(err);
				return res.status(500).send("error: database weirdness");
			}
			//console.log(result);
		});
	});
});

router.post('/display', function(req, res, next) { 
	var oneBlob = req.body.toDisplay;
	console.log(oneBlob);
	Blob.findOne({_id:oneBlob}, function(err, blob){
		console.log(blob);
		res.render('display', {blob:blob.pic});
	});
});



module.exports = router;
