var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT ?? FROM burgers WHERE ??";

        console.log(queryString);

        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            console.log(result);
        });
        updateOne()
    }
}