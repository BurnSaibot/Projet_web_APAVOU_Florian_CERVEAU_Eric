/*function setCookie(cname, cvalue, exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires="+ d.toUTCString();
			    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}*/

function testCookies() {
	Cookies.set('user', 'Kiwi', { expires: 7 });
	Cookies.set("name" , "Twerk",{ expires: 7 });
	var date = new Date();
	Cookies.set("date" , date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),{ expires: 7 });
	Cookies.set("keyWords", JSON.stringify( ["mot666", "mot2", "mot3"]), { expires: 7 });
	Cookies.set("timeDuration", -1, { expires: 7 });
}

function getCookiesData() {
	return {User: Cookies.get().user, Name: Cookies.get().name, Date : Cookies.get().date, KeyWords: JSON.parse(Cookies.get().keyWords),Duration : Cookies.get().timeDuration};
}

function displayCookies() {
	let cookies = getCookiesData();
	$('.container').append("<div> " + JSON.stringify(cookies) + "</div>");

}

function display(){
	var records = register.records;
	console.log("Taille du tableau : " + register.records.length );
	for(var i = 0;i< records.length; i++) {
		$('.container').append(
			'<tr>  \n' +
			'<td>' + records[i].acceleration.x + '</td>' +
			'<td>' + records[i].acceleration.y + '</td>' +
			'<td>' + records[i].acceleration.z + '</td>' +
			'<td>' + records[i].rotation.alpha + '</td>' +
			'<td>' + records[i].rotation.beta  + '</td>' +
			'<td>' + records[i].rotation.gamma + '</td>' +
			'</tr>'
		)
	}
}

function registerCookies(){
	Cookies.set('user', $('.name').val(), {expires: 7 });
	Cookies.set('name', $('.title').val(), {expires: 7 });
	var date = new Date();
	var currDay = date.getDate();
	var currMonth = date.getMonth()+1;
	//alert( ((currDay < 10) ? '0' + currDay : currDay) + "/" + ((currMonth < 10) ? '0' + currMonth : currMonth) + "/" + date.getFullYear());
	Cookies.set("date" , ((currDay < 10) ? '0' + currDay : currDay) + "/" + ((currMonth < 10) ? '0' + currMonth : currMonth) + "/" + date.getFullYear(),{ expires: 7 });
	Cookies.set('keyWords', JSON.stringify( [$('.k-word1').val(),$('.k-word2').val(),$('.k-word3').val()]), {expires: 7 });

	//console.log( "Cookies : \n \t-user : " + Cookies.get().user + "\n \t-title : " + Cookies.get().name + "\n \t-keyWords : " + Cookies.get().keyWords + "\n \t-date : " + Cookies.get().date);
	window.location.replace('./record.html');
}

function registerPseudo(){
	var pseudo = document.getElementById("pseudo").value;
	console.log(pseudo);
	Cookies.set('user',pseudo,{expires: 7 });
	console.log(Cookies.get().user);
}

function fillName() {
	$('.name').val(Cookies.get().user);
}

function testContent() {
	if ($(".name").val.length > 0 && $(".title").val.length > 0 && $(".k-word1").val.length > 0 ) {
		$(':input[type=submit]').attr("disabled","disabled");
	} else {
		$(':input[type=submit]').attr("disabled",false);
	}
}