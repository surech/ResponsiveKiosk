var defaultUrl = "http://www.microsoft.com";

$(document).ready(function () {
    // URL aus der URL auslesen ;-)
    var urlParameter = getUrlParameter("url");
    if(urlParameter) {
        defaultUrl = urlParameter;
    }
    frames[0].location = defaultUrl;
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var goHome = function(){
    frames[0].location = defaultUrl;
};

var goBack = function () {
    //frames[0].contentWindow.history.back();
    kiosk.history.back();
};

var goForward = function () {
    frames[0].contentWindow.history.forward();
};
