var moveContainer = document.getElementById("panelMoves");
var myRequest = new XMLHttpRequest();

myRequest.open('GET', '../json/records.json');

myRequest.onload = function(){
	var myData = JSON.parse(myRequest.responseText);
	renderHTML(myData);
	console.log("mes datas");
	console.log(myData);
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


function filterMoves(){
	var moveSB = document.getElementById("SBmove").value;
	var pseudoSB = document.getElementById("SBpseudo").value; 
	var keywordSB = document.getElementById("SBKeyword").value;
	var dateSB = document.getElementById("SBDate").value;
	console.log(pseudoSB+" "+keywordSB+" "+dateSB+" ");
	var moves = $(".movebox");
	moves.each(function(index){
		console.log(jQuery(this));
		var currElem = jQuery(this)[0];
		console.log(currElem.children);
		var moveName = currElem.children[0].innerHTML.toUpperCase();
		var userName = currElem.children[1].innerHTML.toUpperCase();
		var moveKW  = currElem.children[2].innerHTML.toUpperCase();
		var moveDate = currElem.children[3];
		var moveDuration = currElem.children[4];
		var found = (moveName.indexOf(moveSB.toUpperCase())>-1) && (userName.indexOf(pseudoSB.toUpperCase())>-1) && (moveKW.indexOf(keywordSB.toUpperCase())>-1);
		if(found){
			currElem.style.display = "";
		}
		else{
			currElem.style.display =  "none";
		}
	})

}

function filterDisplay(){
	var moveSB = document.getElementById("SBmove").value;
	var pseudoSB = document.getElementById("SBpseudo").value; 
	var keywordSB = document.getElementById("SBKeyword").value;
	var dateSB = document.getElementById("SBDate").value;

	console.log(pseudoSB+" "+moveSB+" "+keywordSB+" "+dateSB+" ");

	var moves = $(".movebox");
	moves.each(function(index){
		console.log(jQuery(this));
		var currElem = jQuery(this)[0];
		currElem.remove();
	})
	var find = JSON.parse(myRequest.responseText);
	if(pseudoSB != ""){
		find = JSON.parse(myRequest.responseText).filter(function(move){
			console.log(move.User);
			return move.User === pseudoSB;
		});
	}	
	if(moveSB != ""){
		find = JSON.parse(JSON.stringify(find)).filter(function(move){
		console.log(move.Name);
		return move.Name === moveSB;
		});
	}
	if(keywordSB != ""){
		find = JSON.parse(JSON.stringify(find)).filter(function(move){
		console.log(move.KeyWords);
		return move.KeyWords.includes(keywordSB);
		});
	}
	if(dateSB != ""){
		find = JSON.parse(JSON.stringify(find)).filter(function(move){
		console.log(move.Date);
		return move.Date === dateSB;
		});
	}
	console.log(find);

	renderHTML(find);
}