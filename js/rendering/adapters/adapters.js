var profileAdapter = getBean("adapters.profile");
profileAdapter.renderProfiles = function(table) {
	var source = $("#profiles").html();
	var template = Handlebars.compile(source);

    var htmlTable = [];
    for (i in table) {
        htmlTable.push({name : table[i].user.name, adress : table[i].user.adress, role : table[i].role, company : table[i].company});
    }

    return template({profiles : htmlTable});
};