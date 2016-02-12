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