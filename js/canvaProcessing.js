function setCookieID() {
		Cookies.set('readID1',1,{expires: 1});
}

function display1Canva() {
	let id = Cookies.get().readID1;
	console.log("Id : " + id + "\n");
	$.getJSON("../json/" + id + ".json",function(data){
		//console.log("Data : " + data + "\n"+id);
	}).done(function( data) {
		displayCanva(data);
    	console.log( "second success" );
  	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "complete" );
  	});;

}

function displayCanva(data) {
	$.(".canvasContainer").append('<canvas id="myCanvas" width="200" height="100"></canvas>');
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext("2d");
	let lastX = 0;
	let lastY = 0;
	let lastZ = 0;
	let currentX = 0;
	let currentY = 0;
	let currentZ = 0;
	ctx.moveTo(0,0);
	$.each( data , function(key,val){
		//console.log("Acceleration : \n\t-x : " + val.acceleration.x + "\n\t-y : " + val.acceleration.y + "\n\t-z : " + val.acceleration.z)
		if (currentX == 0 && currentY == 0 && currentZ == 0){
			currentX = val.acceleration.x;
			currentY = val.acceleration.y;
			currentZ = val.acceleration.z;
		} else {
			lastX = currentX;
			lastY = currentY;
			lastZ = currentZ;
			currentX = val.acceleration.x;
			currentY = val.acceleration.y;
			currentZ = val.acceleration.z;
		}
		if (!(lastX == 0 & lastY == 0 & lastZ ==0)) {
			context.strokeStyle = '#ff0000';
			ctx.lineTo(val.time,val.acceleration.x);
			ctx.stroke();
		}
	})
}