var IDs 

function setCookieID() {
	Cookies.set('IDs',JSON.stringify([1]),{expires: 1});
}

function isChecked(s){
	return document.getElementById(s).checked;
}

function maxInt(a,b) {
	if (a>b) return a;
	return b;
}

function drawAccelX(id,color){
	console.log("Id : " + id + "\n");
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastX = 0;
		let lastT = 0;
		let currentX = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		let maxHeight = getMaxAccel(stats);
		ctx.beginPath();
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentX == 0 && currentT==0){
				currentX = val.acceleration.x;
				currentT = val.time;
			} else {
				lastX = currentX;
				lastT = currentT;
				currentX = val.acceleration.x;
				currentT = val.time;
			}
			if (!(lastX == 0)) {
				ctx.beginPath();
				ctx.moveTo((lastT / maxTime)*maxLength,lastX/maxHeight*250 +250)
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,currentX/maxHeight*250 +250);
				ctx.stroke();
			}
		})
  	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "Drawing Accel X complete" );
	});
}

function drawAccelY(id,color){
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastY = 0;
		let lastT = 0;
		let currentY = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		let maxHeight = getMaxAccel(stats);
		console.log("Hauteur max : " + maxHeight)
		ctx.beginPath();
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentY == 0 && currentT==0){
				currentY = val.acceleration.y;
				currentT = val.time;
			} else {
				lastY = currentY;
				lastT = currentT;
				currentY = val.acceleration.y;
				currentT = val.time;
			}
			if (!(lastY == 0)) {
				ctx.beginPath();
				ctx.moveTo((lastT/maxTime)*maxLength,lastY/maxHeight * 250 + 250)
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,currentY/maxHeight * 250 + 250);
				ctx.stroke();
			}
		})  	
	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "Drawing Accel Y complete" );
	});		
}

function drawAccelZ(id,color){
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastZ = 0;
		let lastT = 0;
		let currentZ = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		let maxHeight = getMaxAccel(stats);
		ctx.beginPath();	
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentZ == 0 && currentT==0){
				currentZ = val.acceleration.z;
				currentT = val.time;
			} else {
				lastZ = currentZ;
				lastT = currentT;
				currentZ = val.acceleration.z;
				currentT = val.time;
			}
			if (!(lastZ == 0)) {
				ctx.beginPath();
				ctx.moveTo((lastT / maxTime)*maxLength,lastZ/maxHeight * 250 + 250)
				ctx.lineTo((currentT/maxTime)*maxLength,currentZ/maxHeight * 250 + 250);
				ctx.strokeStyle = color ;
				ctx.stroke();
			}
		})   	
	}).fail(function() {
		console.log( "error" );
	}).always(function() {
		console.log( "Drawing Accel Z complete" );
	});
}
function drawRotaX(id,color){
	console.log("Id : " + id + "\n");
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastX = 0;
		let lastT = 0;
		let currentX = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		ctx.beginPath();
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentX == 0 && currentT==0){
				currentX = val.rotation.alpha;
				currentT = val.time;
			} else {
				lastX = currentX;
				lastT = currentT;
				currentX = val.rotation.alpha;
				currentT = val.time;
			}
			if (!(lastX == 0)) {
				ctx.beginPath();
				ctx.moveTo((lastT / maxTime)*maxLength,(lastX/360)*250 +250)
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,(currentX/360)*250 +250);
				ctx.stroke();
			}
		})
  	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "Drawing Rota X complete" );
	});
}

function drawRotaY(id,color){
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastY = 0;
		let lastT = 0;
		let currentY = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		ctx.beginPath();
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentY == 0 && currentT==0){
				currentY = val.rotation.beta;
				currentT = val.time;
			} else {
				lastY = currentY;
				lastT = currentT;
				currentY = val.rotation.beta;
				currentT = val.time;
			}
			if (!(lastY == 0)) {
				ctx.beginPath();
				ctx.moveTo((lastT / maxTime)*maxLength,lastY/360 * 250 +250)
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,currentY/360 * 250 +250);
				ctx.stroke();
			}
		})  	
	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "Drawing Rota Y complete" );
	});		
}

function drawRotaZ(id,color){
	$.getJSON("../json/" + id + ".json",function(data){
	}).done(function( stats) {
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastZ = 0;
		let lastT = 0;
		let currentZ = 0;
		let currentT = 0;
		let maxTime = stats[stats.length-1].time;
		let maxLength = canvas.width;
		ctx.beginPath();		
		ctx.moveTo(0,160);
		$.each( stats , function(key,val){
			if (currentZ == 0 && currentT==0){
				currentZ = val.rotation.gamma;
				currentT = val.time;
			} else {
				lastZ = currentZ;
				lastT = currentT;
				currentZ = val.rotation.gamma;
				currentT = val.time;
			}
			if (!(lastZ == 0)) {
				ctx.beginPath();
				ctx.moveTo( (lastT / maxTime)*maxLength,(lastZ/360) * 250 +250);
				ctx.lineTo( (currentT/maxTime)*maxLength,(currentZ/360) * 250 +250);
				ctx.strokeStyle = color ;
				ctx.stroke();
			}
		})   	
	}).fail(function() {
		console.log( "error" );
	}).always(function() {
		console.log( "Drawing Rota Z complete" );
	});
}

function redrawAccel() {
	let canvas = document.getElementById("accelCanvas");
	canvas.width = window.innerWidth
	IDs = JSON.parse(Cookies.get().IDs);
	if (isChecked('x1Accel')) 
		drawAccelX(IDs[0],'#ff0000');
	if (isChecked('y1Accel')) 
		drawAccelY(IDs[0],'#00ff00');
	if (isChecked('z1Accel')) 
		drawAccelZ(IDs[0],'#0000ff');
	if (IDs.length > 1 ) {
		if (isChecked('x2Accel',)) 
			drawAccelX(IDs[1],'#ff46af');
		if (isChecked('y2Accel')) 
			drawAccelY(IDs[1],'#ffcb46');
		if (isChecked('z2Accel')) 
			drawAccelZ(IDs[1],'#46ffdd');
	}
}

function redrawRota() {
	console.log("redrawRota");
	IDs = JSON.parse(Cookies.get().IDs);
	let canvas = document.getElementById("rotaCanvas");
	canvas.width = window.innerWidth
	if (isChecked('x1Rota')){
		console.log("Drawing rotaX");
		drawRotaX(IDs[0],'#ff0000');
	}	
	if (isChecked('y1Rota')){
		console.log("Drawing rotaY");
		drawRotaY(IDs[0],'#00ff00');
	}
	if (isChecked('z1Rota')){
		console.log("Drawing rotaZ");
		drawRotaZ(IDs[0],'#0000ff');
	}
	if (IDs.length > 1 ) {
		if (isChecked('x2Rota',)) 
			drawRotaX(IDs[1],'#ff46af');
		if (isChecked('y2Rota')) 
			drawRotaY(IDs[1],'#ffcb46');
		if (isChecked('z2Rota')) 
			drawRotaZ(IDs[1],'#46ffdd');
	}
}

function getMaxAccel(data){
	let max,min;
		if (data.length <= 0) return 0

		max = data[0].acceleration.x;
		min = data[0].acceleration.x;
		let maxX,maxY,maxZ;

			$.each( data , function(key,val){
				if (max < val.acceleration.x)
					max = val.acceleration.x
				else if (min > val.acceleration.x)
					min = val.acceleration.x
			})  
		maxX = maxInt(max, -1 * min );
		max = data[0].acceleration.y;
		min = data[0].acceleration.y;
			$.each( data , function(key,val){
				if (max < val.acceleration.y)
					max = val.acceleration.y
				else if (min > val.acceleration.y)
					min = val.acceleration.y
			})
		maxY = maxInt(max, -1 * min );
		max = data[0].acceleration.z;
		min = data[0].acceleration.z; 
			$.each( data , function(key,val){
				if (max < val.acceleration.z)
					max = val.acceleration.z
				else if (min > val.acceleration.z)
					min = val.acceleration.z
			})	
		maxZ =  maxInt(max, -1 * min);
		let res = maxInt(maxInt(maxX,maxY),maxZ);
		console.log("max : "+ res)
		return res;	
}

