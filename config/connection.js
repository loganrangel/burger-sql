var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Broketoe1.",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.log("error connecting");
    }
    console.log("connected");
});

module.exports = connection;