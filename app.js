
document.onload = checkCookie();


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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


function checkCookie() {
    var username = getCookie("username");
    console.log(username);
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        let button = document.getElementById("close-cookie-warning");
        button.addEventListener('click',function (ev) {
            e.preventDefault();
        })
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

/*
$().ready(function() {
    var sName = "cookiesok";
    $("#close-cookie-warning").click(function(){
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warning").hide("slow");
    });

    if(document.cookie.indexOf(sName) === -1){
        $("#cookie-warning").show();
    }
});
*/
