var http = require('http');
var express = require('express');

var app = express();

app.use("/", express.static("public"));
app.use(require("json-middleware").middleware());

app.get("/api/data", function(req, res) {
	var data = 
		{ 
			"people": [{
				"lastName": "Consalves",
				"firstName": "Bobby",
				"age": "36",
				"email": "bc@me.org",
				"createdOn": "2004-06-19",
				"lastEdited": "2011-11-09",
				"active": true
			}
				]};
	res.setHeader("Content-Type", "application/json");
	res.send(data);
});

var server = http.createServer(app);
server.listen(8083);

console.log("server starting");