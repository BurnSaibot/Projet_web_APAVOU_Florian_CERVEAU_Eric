var moveContainer = document.getElementById("panelMoves");
var pageContainer = document.getElementById("pagesMoves");
var pseudoContainer = document.getElementById("pseudoContainer");
var myRequest = new XMLHttpRequest();
var page = 1;

myRequest.open('GET', '../json/records.json');

myRequest.onload = function(){
	console.log(Cookies.get().user);
	var user = Cookies.get().user;
	pseudoContainer.insertAdjacentHTML('beforeend', user);
	var myData = JSON.parse(myRequest.responseText);
	if(findGetParameter("page")!=null){
		page = findGetParameter("page");
	};
	fillSB();
	filterDisplay(page);
	console.log(page);
	//renderHTMLbyPage(myData,page);
	console.log("mes datas");
	console.log(myData);
};

myRequest.send();

function findGetParameter(parameterName) {
		var result = null,
				tmp = [];
		location.search
				.substr(1)
				.split("&")
				.forEach(function (item) {
					tmp = item.split("=");
					if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
				});
		return result;
}

function renderHTMLbyPage(data, page){
	var nbBlock = 5;
	var nbPage = Math.ceil(data.length/nbBlock);
	for(j=0; j<nbPage; j++){
		pageContainer.insertAdjacentHTML('beforeend', '<a class="numPage" href = "menu.html?page='+(j+1)+'">	'+(j+1)+'	</a>');
	}
	var moves = $(".movebox");
	var limit = data.length;
	console.log(limit);
	console.log(nbBlock*page);
	if(limit>nbBlock*page){
		limit = nbBlock*page;
	}
	console.log("Limite" + limit);
	for(i=nbBlock*(page-1); i < limit; i++){

		var kw = "";
		id = data[i].id;
		user = data[i].User;
		name = data[i].Name;
		url = data[i].URL;
		date = data[i].Date;
		duration = data[i].Duration;
		for(ii=0; ii < data[i].KeyWords.length; ii++){
			kw += data[i].KeyWords[ii] +" ";
			console.log(data[i].KeyWords.length);
		}
		if(moves.length > 0){
			var here = false;
			moves.each(function(index){
				var currElem = jQuery(this)[0];
				if(currElem.id == id){
					here = true;
				}
			});
			if(!here){
				console.log("id :" + id);
				moveContainer.insertAdjacentHTML('beforeend', '<div class="col-sm-5 col-md-4 col-lg-2 movebox" id="'+id+'"> <h2 id ="nameMove">'+ name + '</h2> '
					+ '<h3 id="userMove"> '+ user + '</h3>'
					+ '<p id="kwMove"> '+ kw + '</p>'
					+ '<p id="dateMove"> '+ date +' </p>'
					+'<p id="durationMove" > ' + duration +' ms </p>'
					+'<input type="checkbox" name="moveID" value="'+id+'" onclick="chkboxControl()" ></div>');
			}
		}
		else{
			console.log("id :" + id);
			moveContainer.insertAdjacentHTML('beforeend', '<div class="col-sm-5 col-md-4 col-lg-2 movebox" id="'+id+'"> <h2 id ="nameMove">'+ name + '</h2> '
				+ '<h3 id="userMove"> '+ user + '</h3>'
				+ '<p id="kwMove"> '+ kw + '</p>'
				+ '<p id="dateMove"> '+ date +' </p>'
				+'<p id="durationMove" > ' + duration +' ms </p>'
				+'<input type="checkbox" name="moveID" value="'+id+'" onclick="chkboxControl()" ></div>');
		}

		}

}

function filterDisplay(page){
	var moveSB = document.getElementById("SBmove").value;
	var pseudoSB = document.getElementById("SBpseudo").value;
	var keywordSB = document.getElementById("SBKeyword").value;
	var dateSB = document.getElementById("SBDate").value;

	var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
	Cookies.set('nameMove', moveSB, {expires: inFifteenMinutes });
	Cookies.set('pseudoSB',pseudoSB, {expires: inFifteenMinutes });
	Cookies.set('kwSB', keywordSB, {expires: inFifteenMinutes });
	Cookies.set('dateSB', dateSB, {expires: inFifteenMinutes });

	console.log(pseudoSB+" "+moveSB+" "+keywordSB+" "+dateSB+" ");
	var pageDisplay = $(".numPage");
	pageDisplay.remove();

	var moves = $(".movebox");
	moves.each(function(index){
		console.log(jQuery(this));
		var currElem = jQuery(this)[0];
		if(currElem.children[5].checked == false){
			currElem.remove();
		}
	})
	var find = JSON.parse(myRequest.responseText);
	if(pseudoSB != ""){
		find = JSON.parse(myRequest.responseText).filter(function(move){
			console.log(move.User);
			return move.User.includes(pseudoSB);
		});
	}
	if(moveSB != ""){
		find = JSON.parse(JSON.stringify(find)).filter(function(move){
			console.log(move.Name);
			return move.Name.includes(moveSB);
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

	renderHTMLbyPage(find,page);
}

function chkboxControl(){
	var limit = 2;
	$('input[type=checkbox]').on('click', function(evt) {
			console.log($("input[type=checkbox]:checked").length);
		  if($("input[type=checkbox]:checked").length > limit) {
	       this.checked = false;
	       alert("Please Select only two")
	   }
	});
}

function fillSB() {
	$('#SBmove').val(Cookies.get().nameMove);
	$('#SBpseudo').val(Cookies.get().pseudoSB);
	$('#SBKeyword').val(Cookies.get().kwSB);
	$('#SBDate').val(Cookies.get().dateSB);
}
