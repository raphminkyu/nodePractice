const fs = require("fs");


var x = fs.readFileSync("1-json.json");
x = JSON.parse(x);

x.name = "hey";



