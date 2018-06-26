var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  //Heroku deployment
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    var connection = mysql.createConnection({
        root: 8889,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db",
    });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
