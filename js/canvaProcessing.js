var IDs = findAllGetParameters();
function disableCheckBoxes(){
	if (IDs.length <=1){
		$("input.grp2").attr("disabled",true);
	}
	$("input.grp1").prop("checked",true);
	redrawAccel();
	redrawRota();	
}

function setCookieID() {
	Cookies.set('IDs',JSON.stringify([1,5]),{expires: 1});
}

function isChecked(s){
	return document.getElementById(s).checked;
}

function getMax(a,b) {
	if (a>b) return a;
	return b;
}

function findAllGetParameters() {
	var result = [],
		tmp = [];
	location.search
			.substr(1)
			.split("&")
			.forEach(function (item) {
				tmp = item.split("=");
				result.push(decodeURIComponent(tmp[1]));
			});
	return result;
}

function drawAccelX(stats,color,maxTime){
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastX = 0;
		let lastT = 0;
		let currentX = 0;
		let currentT = 0;
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
				ctx.moveTo((lastT / maxTime)*maxLength,500-(lastX/maxHeight*250 +250));
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,500-(currentX/maxHeight*250 +250));
				ctx.stroke();
			}
		})
}

function drawAccelY(stats,color,maxTime){
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastY = 0;
		let lastT = 0;
		let currentY = 0;
		let currentT = 0;
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
				ctx.moveTo((lastT/maxTime)*maxLength,500-(lastY/maxHeight * 250 + 250));
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,500-(currentY/maxHeight * 250 + 250));
				ctx.stroke();
			}
		}) 	
}

function drawAccelZ(stats,color,maxTime){
		let canvas = document.getElementById("accelCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastZ = 0;
		let lastT = 0;
		let currentZ = 0;
		let currentT = 0;
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
				ctx.moveTo((lastT / maxTime)*maxLength,500-(lastZ/maxHeight * 250 + 250));
				ctx.lineTo((currentT/maxTime)*maxLength,500-(currentZ/maxHeight * 250 + 250));
				ctx.strokeStyle = color ;
				ctx.stroke();
			}
		}) 
}
function drawRotaX(stats,color,maxTime){
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastX = 0;
		let lastT = 0;
		let currentX = 0;
		let currentT = 0;
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
				ctx.moveTo((lastT / maxTime)*maxLength,500-(((lastX)/360)*250 +250));
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,500-(((currentX)/360)*250 +250));
				ctx.stroke();
			}
		})
}

function drawRotaY(stats,color,maxTime){
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastY = 0;
		let lastT = 0;
		let currentY = 0;
		let currentT = 0;
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
				ctx.moveTo((lastT / maxTime)*maxLength,500-((lastY)/180 * 250 +250));
				ctx.strokeStyle = color;
				ctx.lineTo((currentT/maxTime)*maxLength,500-(((currentY)/180) * 250 +250));
				ctx.stroke();
			}
		})  	
}

function drawRotaZ(stats,color,maxTime){
		let canvas = document.getElementById("rotaCanvas"); 
		let ctx = canvas.getContext("2d");
		let lastZ = 0;
		let lastT = 0;
		let currentZ = 0;
		let currentT = 0;
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
				ctx.moveTo( (lastT / maxTime)*maxLength,500-(((lastZ)/90) * 250 +250));
				ctx.lineTo( (currentT/maxTime)*maxLength,500-(((currentZ)/90) * 250 +250));
				ctx.strokeStyle = color ;
				ctx.stroke();
			}
		})   	
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
		maxX = getMax(max, -1 * min );
		max = data[0].acceleration.y;
		min = data[0].acceleration.y;
			$.each( data , function(key,val){
				if (max < val.acceleration.y)
					max = val.acceleration.y
				else if (min > val.acceleration.y)
					min = val.acceleration.y
			})
		maxY = getMax(max, -1 * min );
		max = data[0].acceleration.z;
		min = data[0].acceleration.z; 
			$.each( data , function(key,val){
				if (max < val.acceleration.z)
					max = val.acceleration.z
				else if (min > val.acceleration.z)
					min = val.acceleration.z
			})	
		maxZ =  getMax(max, -1 * min);
		let res = getMax(getMax(maxX,maxY),maxZ);
		console.log("max : "+ res)
		return res;	
}

function redrawAccel() {
	//let maxTime = (IDs.length >1) ? getMax(IDs[0][IDs[0].length-1].time,IDs[1][IDs[1].length-1].time) : IDs[0][IDs[0];
	let canvas = document.getElementById("accelCanvas");
	canvas.width = window.innerWidth
	IDs = findAllGetParameters();
	if (IDs.length > 1 ) {
		console.log("2 à afficher");
		$.getJSON("../json/" + IDs[0] + ".json",function(data1){
		}).done(function( stats1) {
			$.getJSON("../json/" + IDs[1] + ".json",function(data2){
			}).done(function( stats2) {
				let maxTime = getMax(stats1[stats1.length-1].time,stats2[stats2.length-1].time)
				if (isChecked('x1Accel')) 
					drawAccelX(stats1,'#ff0000',maxTime);
				if (isChecked('y1Accel')) 
					drawAccelY(stats1,'#00ff00',maxTime);
				if (isChecked('z1Accel')) 
					drawAccelZ(stats1,'#0000ff',maxTime);
				if (IDs.length > 1 ) {
					if (isChecked('x2Accel',)) 
						drawAccelX(stats2,'#ff46af',maxTime);
					if (isChecked('y2Accel')) 
						drawAccelY(stats2,'#ffcb46',maxTime);
					if (isChecked('z2Accel')) 
						drawAccelZ(stats2,'#46ffdd',maxTime);
				}
		  	}).fail(function() {
		    	console.log( "error" );
		  	}).always(function() {
		    	console.log( "Drawing Accel X complete" );
			});
	  	}).fail(function() {
	    	console.log( "error" );
	  	}).always(function() {
	    	console.log( "Drawing Accel X complete" );
		});
	} else {
		console.log("1 a afficher");
		$.getJSON("../json/" + IDs[0] + ".json",function(data){
		}).done(function( stats) {
			let maxTime = stats[stats.length-1].time;
			if (isChecked('x1Accel')) 
				drawAccelX(stats,'#ff0000',maxTime);
			if (isChecked('y1Accel')) 
				drawAccelY(stats,'#00ff00',maxTime);
			if (isChecked('z1Accel')) 
				drawAccelZ(stats,'#0000ff',maxTime);
	  	}).fail(function() {
	    	console.log( "error" );
	  	}).always(function() {
	    	console.log( "Drawing Accel X complete" );
		});
	}
}

function redrawRota() {
	//let maxTime = (IDs.length >1) ? getMax(IDs[0][IDs[0].length-1].time,IDs[1][IDs[1].length-1].time) : IDs[0][IDs[0];
	let canvas = document.getElementById("rotaCanvas");
	canvas.width = window.innerWidth
	IDs = findAllGetParameters();
		
	if (IDs.length > 1 ) {
		console.log("2 à afficher");
		$.getJSON("../json/" + IDs[0] + ".json",function(data1){
		}).done(function( stats1) {
			$.getJSON("../json/" + IDs[1] + ".json",function(data2){
			}).done(function( stats2) {
				console.log(stats1);
				console.log(stats2);
				let maxTime = getMax(stats1[stats1.length-1].time,stats2[stats2.length-1].time)
				if (isChecked('x1Rota')) 
					drawRotaX(stats1,'#ff0000',maxTime);
				if (isChecked('y1Rota')) 
					drawRotaY(stats1,'#00ff00',maxTime);
				if (isChecked('z1Rota')) 
					drawRotaZ(stats1,'#0000ff',maxTime);
				if (IDs.length > 1 ) {
					if (isChecked('x2Rota',)) 
						drawRotaX(stats2,'#ff46af',maxTime);
					if (isChecked('y2Rota')) 
						drawRotaY(stats2,'#ffcb46',maxTime);
					if (isChecked('z2Rota')) 
						drawRotaZ(stats2,'#46ffdd',maxTime);
				}
		  	}).fail(function() {
		    	console.log( "erreur lors de la lecture du 1er fichier" );
		  	}).always(function() {
		    	console.log( "Drawing Rota X complete" );
			});
	  	}).fail(function() {
	    	console.log( "erreur lors de la lecture du 2nd fichier" );
	  	}).always(function() {
	    	console.log( "Drawing Rota X complete" );
		});
	} else {
		console.log("1 a afficher");
		$.getJSON("../json/" + IDs[0] + ".json",function(data){
		}).done(function( stats) {
			let maxTime = stats[stats.length-1].time;
			if (isChecked('x1Rota')) 
				drawRotaX(stats,'#ff0000',maxTime);
			if (isChecked('y1Rota')) 
				drawRotaY(stats,'#00ff00',maxTime);
			if (isChecked('z1Rota')) 
				drawRotaZ(stats,'#0000ff',maxTime);
	  	}).fail(function() {
	    	console.log( "error" );
	  	}).always(function() {
	    	console.log( "Drawing Rota X complete" );
		});
	}
}

