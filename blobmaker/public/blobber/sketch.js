function setup(){
	
	var canvas;
	var makebutton = select("#makeButton");
	makebutton.mousePressed(blob);
	
	function blob() {
		
	  var valid = validate();
	  //console.log(valid);
	  if (valid){
		canvas = createCanvas(550, 550);
		canvas.parent('canvas');
		background(255);
		ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
		  
		var blobheight = select("#height").value();
		var blobcolor = select("#blobcolor").value();
		var pantsrise = select("#pantsrise").value();
		var blobbiness = select("#blobbiness").value();
		//console.log(pantsrise);
		  
		fill(blobcolor);
		noStroke();
		  
		translate(width/2, height/2);
		  
		var ovalnum;
		if (blobbiness === "Not very"){
			ovalnum = 1;
		}
		else if (blobbiness === "Pretty blobby"){
			ovalnum = floor(random(3, 8));
		}
		else{
			ovalnum = floor(random(10, 30));
		}
		//console.log(ovalnum);
		  
		var maxheight = blobheight;
		var maxwidth = 0;
		ellipse(0, 0, maxheight/3, maxheight);
		for (var i = 0; i < ovalnum; i ++) {
			var currheight = floor(random(1, maxheight));
			var currwidth = floor(random(1, maxheight-30));
			//keep track of widest drawn oval, to help with face placement (flacement)
			if (currwidth > maxwidth){
			  maxwidth = currwidth;
			}
			ellipse(0, 0, currwidth, currheight);
			rotate(PI/(ovalnum/2));
		}
		  
		//draw face
		var eyeheight = floor(random(-maxheight+10, 20));
		var eyespacing = floor(random(10, maxwidth/2));
		var jitter = floor(random(-20, 10));
		//print(eyeheight);
		fill(0);
		//eyes
		ellipse(eyespacing, eyeheight+jitter, 10, 10);
		ellipse(-eyespacing, eyeheight-jitter, 10, 10);
		//mouth
		var mouthheight = floor(random(eyeheight-jitter, -10))
		arc(0+jitter, mouthheight, 20, 10, TWO_PI, PI);
		  
		var pant;
		if (pantsrise === "saggy"){
			pant = 3*maxheight/4;
		}
		else if (pantsrise === "low-rise"){
			pant = maxheight/2;
		}
		else if (pantsrise === "medium"){
			pant = 0;
		}
		else if (pantsrise === "high-waisted"){
			pant = -maxheight/2;
		}
		else{
			pant = -3*maxheight/4;
		}
		//console.log(pant);
		  
		//draw "pants"
		blendMode(BURN);
		//translate(-width/2, -height/2);
		fill(225, 25, 25);
		rect(-width/2, pant, width, height);
	  }
	}
	
	var savebutton = select("#saveButton");
	savebutton.mousePressed(ajaxsave);
	
	
}