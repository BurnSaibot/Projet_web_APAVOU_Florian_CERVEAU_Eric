function setCookieID() {
		Cookies.set('readID1',1,{expires: 1});
}

function display1Canva() {
	let id = Cookies.get().readID1;
	console.log("Id : " + id + "\n");
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( data) {
		console.log( "second success" );
		displayCanvas(data);
    	
  	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "complete" );
  	});;

}

function displayCanvas(data) {
	$("#canvasContainer").append('<canvas id="myCanvas" width="500" height="500"></canvas>');
	let canvas = document.getElementById("myCanvas"); //
	let ctx = canvas.getContext("2d");
	let lastX = 0;
	let lastY = 0;
	let lastZ = 0;
	let lastT = 0;
	let currentX = 0;
	let currentY = 0;
	let currentZ = 0;
	let currentT = 0;
	ctx.moveTo(0,160);
	$.each( data , function(key,val){
		//console.log("Acceleration : \n\t-x : " + val.acceleration.x + "\n\t-y : " + val.acceleration.y + "\n\t-z : " + val.acceleration.z)
		
		if (currentX == 0 && currentY == 0 && currentZ == 0 && currentT==0){
			//console.log("should be seen once");
			currentX = val.acceleration.x;
			currentY = val.acceleration.y;
			currentZ = val.acceleration.z;
			currentT = val.time;
		} else {
			//console.log("Was passiert ?");
			lastX = currentX;
			lastY = currentY;
			lastZ = currentZ;
			lastT = currentT;
			currentX = val.acceleration.x;
			currentY = val.acceleration.y;
			currentZ = val.acceleration.z;
			currentT = val.time;
		}
		if (!(lastX == 0 && lastY == 0 && lastZ ==0)) {
			console.log("Current time :" + currentT);
			console.log("Current X :" + currentX);
			console.log("Old time :" + lastT);
			console.log("Old X :" + lastX);
			ctx.beginPath();
			ctx.moveTo(lastT,lastX/5*500+250)
			ctx.strokeStyle = '#ff0000';
			ctx.lineTo(currentT,currentX/5*500+250);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(lastT,lastY/5*500+250)
			ctx.strokeStyle = '#00ff00';
			ctx.lineTo(currentT,currentY/5*500+250);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(lastT,lastZ/5*500+250)
			ctx.strokeStyle = '#0000ff';
			ctx.lineTo(currentT,currentZ/5*500+250);
			ctx.stroke();
		}
	})
}