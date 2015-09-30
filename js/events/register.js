var eventRegister = getBean("events.register");

eventRegister.on = function(selector, event, callback) {
    _$(selector).addEventListener(event, callback);
};
eventRegister.off = function(selector, event) {
    _$(selector).removeEventListener(event);
};

eventRegister.registerHelper = function(register, event, callback) {
	var reg = eventRegister[register];
	if (reg == undefined) {
		eventRegister[register] = {};
	}
	eventRegister[register][event] = callback;
};

eventRegister.binding = function() {
	for (i in this) {
		if (typeof this[i] !== "function") {
			eventRegister.subBinding(this[i]);
		}
	}
};

eventRegister.subBinding = function(elt) {
	for (i in elt) {
		if (typeof elt[i] === "function") {
			elt[i]();
		} else {
			this.subBinding(elt[i]);
		}
	}
};