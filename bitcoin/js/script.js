Skip to content
This repository
Search
Pull requests
Issues
Gist
 @fantadans
 Sign out
 Watch 0
  Star 0
  Fork 0 MarinaAbdou/MarinaAbdou.github.io
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathMarinaAbdou.github.io/bitcoin/js/script.js
cc2a68e  14 days ago
@MarinaAbdou MarinaAbdou Update script.js
1 contributor
RawBlameHistory
28 lines (26 sloc)  882 Bytes
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
    xmlhttp.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
    xmlhttp.send();
}
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
