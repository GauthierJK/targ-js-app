var genericDao = getBean("genericDao");
var tmp = {
    create : function(obj) {
        var table = this.readAll();
        table.push(obj);
        localStorage.setItem("profiles", JSON.stringify(table));
    },
    read : function(profileId) {
        this.readAll();
    },
    readAll : function() {
        var tableProfiles = JSON.parse(localStorage.getItem("profiles"));
        if (!tableProfiles) {
            tableProfiles = [];
        }
        return tableProfiles;
    },
    update : function(profileId) {

    },
    delete : function(profileId) {

    },
    deleteAll : function() {
        localStorage.removeItem("profiles");
    }
};
_merge(tmp, genericDao);