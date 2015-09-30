function getRoot() {
	var rootPackage = PARAMS.ROOT_PACKAGE;
	var root;
	for (i in rootPackage.split(".")) {
		if (i == 0) {
			root = window;
		}
		if (root[rootPackage] == undefined) {
			root[rootPackage] = {};
		}
		root = root[rootPackage];
	}
	return root;
}

function getBean(params) {
	var bean = getRoot();
	for (i in params.split(".")) {
		if (bean[params[i]] == undefined) {
			bean[params[i]] = {};
		}
		bean = bean[params[i]];
	}
	return bean;
}

function getStorage() {

}