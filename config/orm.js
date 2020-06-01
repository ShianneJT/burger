var connection = require('../config/connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO' + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
    });
},
    updateOne: function(table, vals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += vals;
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;
