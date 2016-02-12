var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];
var $list = $('#namePhoneTable');
var $idiotSection = $('#idiot')

people.forEach(function(persInfo){
	$list.append('<tr>\
					<td>' + persInfo.firstName + '\
					</td>\
					<td>' + persInfo.lastName + '\
					</td>\
					<td>' + persInfo.phoneNumber + '\
					</td>\
				</tr>');
})

function infoToTable(event){
	event.preventDefault();
	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input')
	var firstName = $("#first").val();
	var lastName = $("#last").val();
	var phoneNumber = $("#phone").val();
	var numberCheck = /^[0-9]\d{2}-\d{3}-\d{4}/;

	function appendHandler(){
		if(firstName && phoneNumber) {
			$list.append('<tr>\
							<td>' + firstName + '\
							</td>\
							<td>' + lastName + '\
							</td>\
							<td>' + phoneNumber + '\
							</td>\
						</tr>');			
		}
	}

	if(numberCheck.test(phoneNumber)){
		appendHandler();
	} else {
		alert("Please enter phone number in the following format:\n\
			000-000-0000");
		$idiotSection.append('<section>\
								<div class="container idiot">\
									<h1>YOU MIGHT BE AN IDIOT IF...</h1>\
									<p>you can\'t follow directions</p>\
								</div>\
							</section>');
	};



}

function clearInputs(){
		$('input').val('')
	}

 $("#submit-button").on('click', infoToTable);
 $("#submit-button").on('click', clearInputs);