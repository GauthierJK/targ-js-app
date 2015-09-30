var profileRendering = getBean("rendering.profile");
profileRendering.display = function() {
    _$("result").innerHTML = profileAdapter.renderProfiles(profileController.getAllProfiles());
};