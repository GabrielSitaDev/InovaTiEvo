var cname = "cookie-consent-banner";
var domain = ".sp.senai.br";
var exdays = 90;

if (window.location.hostname == "localhost")
    domain = window.location.hostname;

if (Boolean(getCookie("cookie-consent-banner")) != true) {
    var x = document.getElementById("cookie-consent");
    x.className = "show";
}

function fnCookieConsent() {
    var x = document.getElementById("cookie-consent");
    x.className = "show";

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + true + ";" + expires + ";path=/;domain=" + domain;
    x.classList.remove("show");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}