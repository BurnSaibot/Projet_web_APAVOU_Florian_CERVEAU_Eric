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
	$.each( data , function(key,val){
		console.log("Acceleration : \n\t-x : " + val.acceleration.x + "\n\t-y : " + val.acceleration.y + "\n\t-z : " + val.acceleration.z)
	})
	$.(".canvasContainer").append('<canvas id="myCanvas" width="200" height="100"></canvas>');
}