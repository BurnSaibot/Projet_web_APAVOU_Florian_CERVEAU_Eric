//import { setCookie } from './helper';

var recording = false;
var register = {records:[]};
var buttonTimeout;	
var cookiesData = getCookiesData();
var startDate;
var endDate;

if(window.DeviceMotionEvent) { 
	window.addEventListener("devicemotion", motion, false); 
} else {
 	window.alert("DeviceMotionEvent is not supported"); 
}

function switchRecord() {
	
	if (recording) {
		$('#switcher').text("Enregistrer");
		endDate = new Date();
		recording = false;
		clearTimeout(buttonTimeout);
		var time  = Math.abs(endDate.getTime() - startDate.getTime());;
		Cookies.set("timeDuration", time, { expires: 7 });
		processData();
					
	} else {
		$('#switcher').text("STOP");
		startDate = new Date();
		recording = true;
		buttonTimeout = setTimeout(switchRecord,15000);
	}
}

function motion(event){
	if (recording) {
		register.records.push({
			acceleration: {x: event.acceleration.x, y: event.acceleration.y , z : event.acceleration.z},
			rotation: {alpha: event.rotationRate.alpha, beta: event.rotationRate.beta, gamma: event.rotationRate.gamma}	
		})
	}
}

function processData() {
	var dataToPost = {datas: {},cookies: {}};
	dataToPost.datas = register.records;
	dataToPost.cookies = getCookiesData()
	//$('.container').append("<div> " + JSON.stringify(dataToPost) + "</div>");
	//$('.container').append("<div> " + JSON.stringify(dataToPost.cookies) + "</div>");

	$.ajax({
		type: 'POST',
		url: "https://tp-ssh1.dep-informatique.u-psud.fr/~eric.cerveau/Projet_web_APAVOU_Florian_CERVEAU_Eric/php/savingRecords.php",
		data : "data=" +  JSON.stringify(dataToPost),
		success: function(data) {
			alert("Vos données ont bien été envoyées au serveur");
			$('.container').append(data);
		},
		error: function(xhr,textStatus,err)
        {
            alert("readyState: " + xhr.readyState +"\n"+ "responseText: "+ xhr.responseText +"\n" + "status: " + xhr.status +"\n" + "text status: " + textStatus + "\n" + "error: " + err);
        }
	})
}

function testCookies() {
	Cookies.set('user', 'Kiwi', { expires: 7 });;
	Cookies.set("name" , "Twerk",{ expires: 7 });
	var date = new Date();
	Cookies.set("date" , date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),{ expires: 7 });
	Cookies.set("keyWords", JSON.stringify( ["mot666", "mot2", "mot3"]), { expires: 7 });
	Cookies.set("timeDuration", -1, { expires: 7 });
}

function getCookiesData() {
	console.log(JSON.parse(Cookies.get().keyWords))
	return {User: Cookies.get().user, Name: Cookies.get().name, Date : Cookies.get().date, KeyWords: JSON.parse(Cookies.get().keyWords),Duration : Cookies.get().timeDuration};
}

function displayCookies() {
	let cookies = getCookiesData();
	console.log("Contenu du cookie avec Json.stringify : " + JSON.stringify(cookies));
	for(var i = 0;i< cookies.length; i++) {
		console.log(cookies[i]);
	}
	$('.container').append("<div> " + JSON.stringify(cookies) + "</div>");

}

function display(){
	var records = register.records;
	console.log("Taille du tableau : " + register.records.length );
	for(var i = 0;i< records.length; i++) {
		console.log(records[i]);
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