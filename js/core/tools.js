function _$(selector) {
    return document.querySelector(selector);
};

function _merge(source, destination) {
	for (i in source) {
		destination[i] = source[i];
	}
}