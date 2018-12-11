function setCookieID() {
		Cookies.set('readID1',1,{expires: 1});
}

function display1Canva() {
	let id = Cookies.get().readID1;
	console.log("Id : " + id + "\n");
	$.getJSON("../json/" + id + ".json",function(data){
		//console.log("Data : " + data + "\n"+id);
		$.each( data , function(key,val){
			
		})
	}).done(function() {
    	console.log( "second success" );
  	}).fail(function() {
    	console.log( "error" );
  	}).always(function() {
    	console.log( "complete" );
  	});;

}