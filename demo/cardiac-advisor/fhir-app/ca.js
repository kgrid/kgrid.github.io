function calculateAge(birthday)
	{
		var today = new Date();
		var birthDate = new Date(birthday);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if(m < 0 || (m == 0 && today.getDate() < birthDate.getDate()))
			age--;

		return age;
	}

  function get_patient_name(patient)
  {
	  if(patient.name)
	  {
		  var names = patient.name.map(function(name)
		  {
			  return name.given.join(" ") + " " + name.family.join(" ");
		  })
		  return names.join("/");
	  }
	  else return "anonymous";
  }

  function getButtonValue(inputName)
  {
	  alert($('input[name="yes/no"]:checked').val())
  }
  

  function get_stent_data(pt)
  {
  	 var set = 
  	 {
		  "url": "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/99999/fk45m6gq9t/result",
		  "method": "POST",
		  "headers": {
			  "content-type": "application/json",
		  }
	 }

 	var keyDict = {0: 'DAPT', 4: 'infar', 5: 'priorPCI', 6: 'CHF', 7: 'veinGraft', 8: 'stentDiameter', 
 				9: 'pac', 10: 'cigSmoker', 11: 'diabetes', 1: 'periphDisease',  2: 'hypertension', 3: 'renal'};


  	var data = {'DAPT': -1, 'infar': -1,  'priorPCI': -1, 'CHF': -1, 'veinGraft': -1, 'stentDiameter': -1, 'pac': -1, 'cigSmoker': -1, 
  	'diabetes': -1, 'periphDisease': -1, 'hypertension': -1,  'renal': -1};


  	var checkedValues = $("input[name='yes/no']:checked").map(function()
  	{
  		return this.value;
  	}).get();

  	console.log("got checked values: ", checkedValues);

  	//populate data dictionary
  	for(var i = 0; i < checkedValues.length; ++i)
  	{
  		data[keyDict[i]] = checkedValues[i];
  	}

  	console.log("populated data: ", data);

  	//data['age'] = "" + calculateAge(pt.birthDate);

  	set['data'] = JSON.stringify(data);

  	console.log("AJAX settings: ", set);

  	var res = null;
  	$.ajax(set).done(function(response) {
					if(response.result)
					{
						console.log('got value from stent object');
						res = response.result;
						$("#stent-risk").text((res * 100).toFixed(2) + '%');

					}
				   else
				   {
				   		res = "ERROR";
						console.log('got error in stent msg');

					   console.log(response.errorMessage);
					}
					//createGage(divID, response.result * 100);
				});

  	console.log("result from bleeding object: ", res);
  	return res;
  }

  function get_ischemic_data(pt)
  {
  	var settings = {
	  "url": "http://dlhs-fedora-dev-a.umms.med.umich.edu:8080/ExecutionStack/knowledgeObject/ark:/67034/k47c7m/result",
	  "method": "POST",
	  "headers": {
		  "content-type": "application/json",
	  },
  }
  	var checkedValues = $("input[name='yes/no']:checked").map(function()
				{
					return this.value;

				}).get()

  	var keyDict = {0: 'DAPT', 1: 'periphDisease',  2: 'hypertension', 3: 'renal'};

	var data = {'DAPT': -1, 'periphDisease': -1, 'hypertension': -1, 'renal': -1};

	var i = 0;

	for(var i = 0; i < checkedValues.length; ++i)
  	{
  		if(i in keyDict)
  			data[keyDict[i]] = checkedValues[i];
  	}

	console.log(pt);
	var patientAge = calculateAge(pt.birthDate);
	$("#patient-age").text(patientAge);
	data['age'] = "" + patientAge;
	console.log(data);
	settings['data'] =  JSON.stringify(data);
	console.log('ischemic settings: ', settings)

	$.ajax(settings).done(function (response) {
		if(response.result)
		{
			console.log('result  ' + response.result);
			$("#bleed-risk").text("" + (response.result * 100).toFixed(2) + '%');
		}
	   else
	   {
		   console.log(response.errorMessage);
		   $("#bleed-vis").css("display", "none");
		   $("#bleed-risk").text(response.errorMessage);

	   }
		//createGage(divID, response.result * 100);
	});

  }


  $(document).ready(function()
  {
	
	$("#get_data").click(function()
	{
	  //alert('yo');
		FHIR.oauth2.ready(function(smart)
		{
		   // alert("whoa")
			var patient = smart.patient.read()
			$.when(patient).done(function(pt)
			{
				console.log("PATIENT RESOURCE: ", pt);
			   // alert('got yo patient')
				patientInfo = pt;
				console.log(patientInfo);

				get_ischemic_data(pt);
				get_stent_data();
				$(".visual-field").slideDown("slow");

			})
		})

	})

	$("input:radio[name='yes/no']").change(function()
	{
		//alert("!");
		$("#bleeding-icon").slideUp("slow");
		$("#bleeding-icon").html("");
		$("#stent-gage").slideUp("slow");
		$("#stent-gage").html("");
		if($("input[name='yes/no']:checked").length == 12)
		{
			$("#get_data").slideDown("slow");
		}

	})

	$("#sample1").click(function()
	{
		$(".no-btn").each(function(index)
		{
			if(index % 2)
			{
				$(this).prop("checked", true);
			}

		})

		$(".yes-btn").each(function(index)
		{
			if(!(index % 2))
			{
				$(this).prop("checked", true);
			}
		})

		$("#get_data").slideDown("slow");

	})

	$("#sample2").click(function()
	{
		$(".no-btn").each(function(index)
		{
			if(!(index % 3))
				$(this).prop("checked", true);
		})
		$(".yes-btn").each(function(index)
		{
			if(index % 3)
				$(this).prop("checked", true);
		})

		$("#get_data").slideDown("slow")
	})

	$("#sample3").click(function()
	{
		$(".yes-btn").each(function()
		{
			if(!$(this).is(":checked"))
				$(this).prop("checked", true);
		})

		$("#get_data").slideDown("slow")
	});

	$("#sample4").click(function()
	{
		$(".no-btn").each(function()
		{
			if(!$(this).is(":checked"))
				$(this).prop("checked", true);
		})

		$("#get_data").slideDown("slow")

	});


	$(".show_gage").click(function()
	{
		$div = $(this).parent("div");
		id = $div.attr("id");
		text = $div.find("span").text();
		text = text.substr(0, text.length - 1);

		//alert(text);
		var divID_ = this.name;
		console.log("divID: ", divID_);
		var domObj = $("#" + divID_);
		
		if(!domObj.is(":visible"))
		{
			draw_array({divID: divID_, count: parseFloat(text), gridWidth: 10, gridHeight: 10, personFill: "steelblue",
					backgroundFill: "#FFFFFF", key: true})
			$("#" + divID_).slideDown("slow");
		}

	})
	  
  })

  $("#start").click(function()
  {
  	$("#input_div").slideDown("slow");
  })