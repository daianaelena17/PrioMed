 var firebaseConfig = {
    apiKey: "AIzaSyDVyEh1symKd5DPm8hRfpiVklHzXyoFJ3A",
    authDomain: "priomed-2acc4.firebaseapp.com",
    databaseURL: "https://priomed-2acc4.firebaseio.com",
    projectId: "priomed-2acc4",
    storageBucket: "priomed-2acc4.appspot.com",
    messagingSenderId: "168071157511",
    appId: "1:168071157511:web:a00f006c5eb8a8079c17a2",
    measurementId: "G-V2162NQGJ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('form');

$('#form').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef1 = messagesRef.push();
    var newMessageRef2 = messagesRef.push();
    var newMessageRef3 = messagesRef.push();
    var newMessageRef4 = messagesRef.push();
    var newMessageRef5 = messagesRef.push();
    var newMessageRef6 = messagesRef.push();
    var newMessageRef7 = messagesRef.push();
    var newMessageRef8 = messagesRef.push();
    var newMessageRef9 = messagesRef.push();
    var newMessageRef10 = messagesRef.push();

    newMessageRef1.set({
        hour: $('.hour').val()
    });

    if(document.getElementById('gender_Male').checked) {
		  //Male radio button is checked
		  newMessageRef2.set({
		  	first_name: $('.firstname').val(),
        	last_name: $('.lastname').val(),
        	age: $('.age').val(),
       	 	birthdate: $('.birthdate').val(),
        	id: $('.id').val(),
		  	gender: "male"
		  });
	}else if(document.getElementById('gender_Female').checked) {
  		  //Female radio button is checked
  		  newMessageRef2.set({
  		  	first_name: $('.firstname').val(),
        	last_name: $('.lastname').val(),
        	age: $('.age').val(),
        	birthdate: $('.birthdate').val(),
        	id: $('.id').val(),
  		  	gender: "female"
  		  });
  	} else {
  		 newMessageRef2.set({
  		  	first_name: $('.firstname').val(),
        	last_name: $('.lastname').val(),
        	age: $('.age').val(),
        	birthdate: $('.birthdate').val(),
        	id: $('.id').val()
  		  });
  	}

    newMessageRef3.set({
        state: $('.state').val(),
        city: $('.city').val(),
        street: $('.street').val(),
        number: $('.number').val(),
        telephone_number: $('.telnum').val()
    });

    if(document.getElementById('Ambulance').checked) {
    	newMessageRef4.set({
    		brought_by: "Ambulance"
    	});
    } else {
    	if(document.getElementById('Pers_means').checked) {
    		newMessageRef4.set({
    		brought_by: "Personal means"
    		});
    	}
    }
 
    if(document.getElementById('Home').checked) {
		  //Male radio button is checked
		  newMessageRef5.set({
		  	brought_from: "Home"
		  });
	}else if(document.getElementById('Public_place').checked) {
  		  //Female radio button is checked
  		  newMessageRef5.set({
  		  	brought_from: "Public place"
  		  });
  	} else {
  		  if(document.getElementById('Workplace').checked) {
  		  //Female radio button is checked
  		  newMessageRef5.set({
  		  	brought_from: "Workplace"
  		  });
  		}
  	}

  	if(document.getElementById('Deceased').checked) {
		  //Male radio button is checked
		  newMessageRef6.set({
		  	vital_functions_at_takeover: "Deceased"
		  });
	}else if(document.getElementById('Cardiorespiratory_arrest').checked) {
  		  //Female radio button is checked
  		  newMessageRef6.set({
  		  	vital_functions_at_takeover: "Cardiorespiratory arrest"
  		  });
  	} else {
  		  if(document.getElementById('Resuscitation').checked) {
  		  //Female radio button is checked
  		  newMessageRef6.set({
  		  	vital_functions_at_takeover: "With resuscitation maneuvers in progress"
  		  });
  			} else {
  		  	if(document.getElementById('Trauma').checked) {
  		  	//Female radio button is checked
  		  	newMessageRef6.set({
  		  		trauma: $('.trauma').val()
  		  	});
  			} else {
  				if(document.getElementById('Resuscitation_hour').checked) {
		  		//Male radio button is checked
		  		newMessageRef6.set({
		  		resuscitation_hour: $('.resHour').val()
		 		 });
			}else if(document.getElementById('Successful').checked) {
  		  		//Female radio button is checked
  		  		newMessageRef6.set({
  		  		vital_functions_at_takeover: "Successful"
  		  	});
  			} else {
  		  		if(document.getElementById('Unsuccessful').checked) {
  		 			 //Female radio button is checked
  		  			newMessageRef6.set({
  		  			decease_hour: $('.deceaseHour').val()
  		 		 });
  				} else {
  					  if(document.getElementById('Not_Start_Resuscitation').checked) {
  		  				//Female radio button is checked
  		  				newMessageRef6.set({
  		  				reason_for_not_starting_resuscitation: $('.notStartRes').val()
  		  				});
  					}
  				}
			 }
  			}
		}
	}
  	var favourite = $("input[name='background']:checked").map(function(){
      return $(this).val();
    }).get();
  

    newMessageRef7.set({
       pathological_background: favourite.join(),
       allergic_to: $('.allergies').val()
    });

     newMessageRef8.set({
       height: $('.height').val(),
       weight: $('.weight').val()
    });


    var favourite1 = $("input[name='general']:checked").map(function(){
      return $(this).val();
    }).get();
  
    var favourite2 = $("input[name='general_state']:checked").map(function(){
      return $(this).val();
    }).get();

    newMessageRef9.set({
       general: favourite1.join(),
       general_state: favourite2.join()
    });

    var fav1 = $("input[name='burns']:checked").map(function(){
      return $(this).val();
    }).get();

    var fav2 = $("input[name='psychiatric']:checked").map(function(){
      return $(this).val();
    }).get();

    var fav3 = $("input[name='neurologic']:checked").map(function(){
      return $(this).val();
    }).get();

    var fav4 = $("input[name='skin']:checked").map(function(){
      return $(this).val();
    }).get();

    var fav5 = $("input[name='eyes']:checked").map(function(){
      return $(this).val();
    }).get();

    var fav6 = $("input[name='thorax']:checked").map(function(){
      return $(this).val();
    }).get();

    newMessageRef10.set({
       burns: fav1.join(),
       psychiatric: fav2.join(),
       neurologic: fav3.join(),
       skin: fav4.join(),
       eyes: fav5.join(),
       thorax: fav6.join()
    });

    $('.success-message').show();
 
    $('#form')[0].reset();
});
