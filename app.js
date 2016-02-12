var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];
var $list = $('#namePhoneTable');

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
	return false;
}








 $("#submit-button").on('click', infoToTable);