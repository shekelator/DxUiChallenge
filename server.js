var http = require('http');
var express = require('express');

var app = express();

app.use("/", express.static("public"));
app.use(require("json-middleware").middleware());

app.get("/api/data", function(req, res) {
	var data = [{
				"lastName": "Consalves",
				"firstName": "Bobby",
				"age": "36",
				"email": "bc@me.org",
				"createdOn": "2004-06-19",
				"lastEdited": "2011-11-09",
				"active": true
			},
			{
				"lastName": "Bar-Jaffa",
				"firstName": "Roni",
				"age": "77",
				"email": "rbj@netco.co.il",
				"createdOn": "2006-06-19",
				"lastEdited": "2011-11-07",
				"active": false
			},
			{
				"lastName": "Cosgrove",
				"firstName": "Jack",
				"age": "3",
				"email": "jack@billyc.net",
				"createdOn": "2012-01-07",
				"lastEdited": "2014-01-12",
				"active": true

			}
			];
	res.setHeader("Content-Type", "application/json");
	res.send(data);
});

var server = http.createServer(app);
var port = process.env.PORT || 8083;
server.listen(port);

console.log("server starting");