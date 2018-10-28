var mongo = require("mongodb")

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/mydb"

MongoClient.connect(
    url,
    function(err, db) {
        if (err) throw err
        console.log("Database created!")
        // database is not actually created until one collection/table
        // and 1 document is created inside a collection
        db.close()
    }
)
