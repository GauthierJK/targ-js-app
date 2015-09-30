function init(register) {
	register.registerHelper("profileEvents", "saveProfile", function() {
		eventRegister.on("save", 'click', function() {
			var name = _$('name input').value;
			var adress = _$('adress input').value;
			var role = _$('role input').value;
			var company = _$('company input').value;

			var p = {user : {name : name, adress : adress}, role : role, company : company};

			profileController.createProfile(p);
			profileRendering.display();
		});
	});

	register.registerHelper("profileEvents", "resetProfiles", function() {
		eventRegister.on("reset", 'click', function() {
			profileController.deleteAllProfiles();
			profileRendering.display();
		});
	});

	eventRegister.binding();
}