function info()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("contenu").innerHTML = jsonPretty;
    }
    };
    xmlhttp.open("GET", "http://bitcoin.mubiz.com/info", true);
    xmlhttp.send();
}

function blockchaininfo()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("contenu").innerHTML = jsonPretty;
    }
    };
    xmlhttp.open("GET", "http://bitcoin.mubiz.com/blockchaininfo", true);
    xmlhttp.send();
}

function mininginfo()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("contenu").innerHTML = jsonPretty;
    }
    };
    xmlhttp.open("GET", "http://bitcoin.mubiz.com/mininginfo", true);
    xmlhttp.send();
}

function peerinfo()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("contenu").innerHTML = jsonPretty;
    }
    };
    xmlhttp.open("GET", "https://www.youtube.com/watch?v=FrLequ6dUdM", true);
    xmlhttp.send();
}
