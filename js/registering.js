//import { setCookie } from './helper';

var recording = false;
var register = {records:[]};
var buttonTimeout;	
var cookiesData = getCookiesData();

if(window.DeviceMotionEvent) { 
	window.addEventListener("devicemotion", motion, false); 
} else {
 	window.alert("DeviceMotionEvent is not supported"); 
}

function switchRecord() {
	if (recording) {
		$('#switcher').text("Enregistrer");
		recording = false;
		clearTimeout(buttonTimeout);
		processData();
					
	} else {
		$('#switcher').text("STOP");
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
	$.ajax({
		type: 'POST',
		url: "https://tp-ssh1.dep-informatique.u-psud.fr/~eric.cerveau/Projet_web_APAVOU_Florian_CERVEAU_Eric/php/savingRecords.php",
		data : "data=" +  JSON.stringify(register.records),
		success: function(data) {
			alert("Vos données ont bien été envoyées au serveur");
		},
		error: function(xhr,textStatus,err)
        {
            alert("readyState: " + xhr.readyState +"\n"+ "responseText: "+ xhr.responseText +"\n" + "status: " + xhr.status +"\n" + "text status: " + textStatus + "\n" + "error: " + err);
        }
	})
}

function testCookies() {
	setCookie("user" , "kiwi", 365);
	setCookie("name" , "firstRegistration",365);
	let date = new Date();
	setCookie("date" , date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),365);
	setCookie("keyWords", JSON.stringify({keyWords : [{mot : "mot666"}, {mot : "mot2"}, {mot: "mot3"}]}), 365);
	setCookie("timeDuration", -1, 365);
}

function getCookiesData() {
	var finalData = [];
	var decodedCookie = decodeURIComponent(document.cookie);
	var datas = decodedCookie.split(';');
	console.log("datas  \n " + datas)
	for (var i = 0; i < datas.length ; i++) {
		var item = datas[i].split('=');
		console.log("\n Items " + i + ":" + item[0] )
        if (item[0].includes("user"))
        	finalData.push({user : item[1]});
        else if (item[0].includes("name"))
        	finalData.push({name : item[1]});
        else if (item[0].includes("date"))
        	finalData.push({date : item[1]});
        else if (item[0].includes("keyWords"))
        	finalData.push({keyWords: item[1]});
        else if (item[0].includes("timeDuration")) {
        	finalData.push({timeDuration: item[1]});
		}
	}
	console.log("Final Data \n" + finalData);
	return finalData;
}

function displayCookies() {
	let data = getCookiesData();
	console.log("Données supplémentaires : " + data);
	for ( var i = 0; i< data.length;i++) {
		$('.container').append('<p>' + data[i] + '</p> <br/>');
	}
}

function display(){
	var records = register.records;
	console.log("Taille du tableau : " + register.records.length )
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