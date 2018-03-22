function test() {
    console.log("Hello World!");
}

var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function trigger_lambda() {
    const url = 'http://localhost:3000/hello';
    const uri = encodeURI(url);
    
    var client = new HttpClient();

    client.get(uri, function (response) {
        console.log(response);
    });
}