var recording = false;
			var register = {records:[]};
			var timeout;	

			if(window.DeviceMotionEvent) { 
				window.addEventListener("devicemotion", motion, false); 
			} else {
			 	window.alert("DeviceMotionEvent is not supported"); 
			}

			function switchRecord() {
				if (recording) {
					$('#switcher').text("Enregistrer");
					recording = false;
					clearTimeout(timeout);
				} else {
					$('#switcher').text("STOP");
					recording = true;
					timeout = setTimeout(switchRecord,15000);
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