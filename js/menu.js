var test = document.getElementById("test");
var moveContainer = document.getElementById("panelMoves");
var myRequest = new XMLHttpRequest();

myRequest.open('GET', '../json/sample.json');

myRequest.onload = function(){
	var myData = JSON.parse(myRequest.responseText);
	renderHTML(myData);

	console.log(myData[0].Name);
};

myRequest.send();

function renderHTML(data){

	for(i=0; i < data.length; i++){
		var kw = "";
		id = data[i].ID;
		user = data[i].User;
		name = data[i].Name;
		url = data[i].URL;
		date = data[i].Date;
		duration = data[i].Duration;
		for(ii=0; ii < data[i].KeyWords.length; ii++){
			kw += data[i].KeyWords[ii] +" ";
			console.log(data[i].KeyWords.length);
		}
		moveContainer.insertAdjacentHTML('afterbegin', '<div class="col-sm-5 col-md-4 col-lg-2 movebox" id="movebox"> <h2 id ="nameMove">'+ name + '</h2> '
													  + '<h3 id="userMove"> '+ user + '</h3>'
													  + '<p id="kwMove"> '+ kw + '</p>'
												      + '<p id="dateMove"> '+ date +' </p>'
															+'<p id="durationMove" > ' + duration +' </p></div>');
	}
}
