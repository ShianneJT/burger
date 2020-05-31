var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput, colInput], function(err,res) {
            if (err) throw err;
        });
        console.log(cb(res));
    }
}

// insertOne()
// updateOne()

module.exports = orm;
