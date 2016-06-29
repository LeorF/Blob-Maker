var mongoose = require('mongoose');

var Blob = new mongoose.Schema({
    creator: {type:String, default:'guest'},
    name: String,
    pic: Buffer
});

var PublicGallery = new mongoose.Schema({
    blobNum: Number,
    blobs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Blob'}]
});

var User = new mongoose.Schema({
	blobNum: Number,
	blobs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Blob'}],
	username: String
});

mongoose.model('Blob', Blob);
mongoose.model('PublicGallery', PublicGallery);
mongoose.model('User', User);
mongoose.connect('mongodb://localhost/final');