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
	setCookie("user" , "kiwi", 365);
	setCookie("name" , "firstRegistration",365);
	var date = new Date();
	setCookie("date" , date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),365);
	setCookie("keyWords", JSON.stringify( ["mot666", "mot2", "mot3"]), 365);
	setCookie("timeDuration", -1, 365);
}

function getCookiesData() {
	var tab;
	var decodedCookie = decodeURIComponent(document.cookie);
	var datas = decodedCookie.split(';');
	var cookiesData = [];
	for (var i = 0; i < datas.length ; i++) {
		var item = datas[i].split('=');
		
        if (item[0].includes("user"))
<<<<<<< HEAD
        	//finalData.records.push({user: item[1]});
        	cookiesData.push(item[1]);
        else if (item[0].includes("name"))
        	//finalData.records.push({name:  item[1]});
        	cookiesData.push(item[1]);
        else if (item[0].includes("date"))
        	//finalData.records.push({date : item[1]});
        	cookiesData.push(item[1]);
        else if (item[0].includes("keyWords"))
        	//finalData.records.push({keyWords: item[1]});
        	cookiesData.push(item[1]);
        else if (item[0].includes("timeDuration")) {
        	//finalData.records.push({timeDuration: item[1]});
        	cookiesData.push(item[1]);
		}
	}
	console.log(cookiesData);
	return {User: cookiesData[0], Name: cookiesData[1], Date : cookiesData[2], Keywords: cookiesData[3],Duration : cookiesData[4]};
=======
        	tab.push(item[1]);
        else if (item[0].includes("name"))
        	tab.push(item[1]);
        else if (item[0].includes("date"))
        	tab.push(item[1]);
        else if (item[0].includes("keyWords"))
        	tab.push(item[1]);
        else if (item[0].includes("timeDuration")) {
        	tab.push(item[1]);
		}
	}
	return {user : tab[0], name : tab[1], date : tab[2], keyWords : tab[3], duration : tab[4]};
>>>>>>> 30dc231fe9679f411e0148d68a63f9471ffeff4f
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