var profileService = getBean("services.profile");
var profileServiceTmp = (function() {
    var dao = getBean("genericDao");
    return {
        createProfile : function(obj) {
            dao.create(obj);
        },
        getAllProfiles : function() {
            return dao.readAll();
        },
        deleteAllProfiles : function() {
            dao.deleteAll();
        }
    };
})();
_merge(profileServiceTmp, profileService);