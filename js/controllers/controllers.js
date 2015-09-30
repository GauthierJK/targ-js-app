var profileController = getBean("controllers.profile");
profileController.createProfile = function (obj) {
    profileService.createProfile(obj);
};
profileController.getAllProfiles = function () {
    return profileService.getAllProfiles();
};
profileController.deleteAllProfiles = function () {
    profileService.deleteAllProfiles();
};