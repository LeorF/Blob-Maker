
# Blob Me

## Overview

Blob Me is an avatar creator! It takes inputs from the user (example: measurements, shirt color, pants height) ,then manipulates and uses that data to create a blob avatar of the user.
The user will be able to browse their own personal gallery of created blobs, or the larger gallery of all blobs created.

## Data Model

I will need Users, Blobs, and Blob Galleries

First draft schema:

```javascript
// users 
var User = new mongoose.Schema({
	username: String,
	password: String,
	blobs: [Blob]
});

// Blob
// Of course, measurements will not be to scale.
// My program will scale the input measurements to the screen
// Height, shirtcolor, and pantsrise are just some sample blob features. In the end, they may have more features.
// If an blob is created by a user who is not logged in, creator will default to guest
var Blob = new mongoose.Schema({
	creator: {type:String, default:'guest'},
	name: String,
	height: Number,
	shirtcolor: String;
	pantsrise: {type: String, enum: ['saggy', 'low-rise', 'medium', 'high-waisted', 'armpit-height']}
});

// Blob Gallery
var Gallery = new mongoose.Schema({
	blobNum: Number,
	private: Boolean,
	blobs: [Blob]
});
```


## Reserach Topics



* (1 point) Javascript Library
	*I will be using p5.js to create the blobs from the user data

* (2 points) Form Validation
	*I will be making sure the user inputs usable data

* (3 points) User Authentication
	*A logged-in user will be able to see their personal gallery of created blobs


