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
		var time  = Math.abs(endDate.getTime() - startDate.getTime());
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
		let currTime = new Date();
		timer = Math.abs(currTime.getTime() - startDate.getTime())
		register.records.push({
			acceleration: {x: event.acceleration.x, y: event.acceleration.y , z : event.acceleration.z},
			rotation: {alpha: event.rotation.alpha, beta: event.rotation.beta, gamma: event.rotation.gamma},
			time: timer
		})
	}
}

function processData() {
	var dataToPost = {datas: {},cookies: {}};
	dataToPost.datas = register.records;
	dataToPost.cookies = getCookiesData();
	//$('.container').append("<div> " + JSON.stringify(dataToPost) + "</div>");
	//$('.container').append("<div> " + JSON.stringify(dataToPost.cookies) + "</div>");

	$.ajax({
		type: 'POST',
		url: "../php/savingRecords.php",
		data : "data=" +  JSON.stringify(dataToPost),
		success: function(data) {
			alert("Vos données ont bien été envoyées au serveur");
			$('.container').append(data);
			window.location.replace('./form_registration.html');
		},
		error: function(xhr,textStatus,err)
        {
            alert("readyState: " + xhr.readyState +"\n"+ "responseText: "+ xhr.responseText +"\n" + "status: " + xhr.status +"\n" + "text status: " + textStatus + "\n" + "error: " + err);
        }
	})
}

