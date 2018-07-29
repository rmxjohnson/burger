// Import the ORM to create functions that will interact with the database.
// this is in the "model" directory
var orm = require("../config/orm.js");

// interacting with the "burgers" table
var tableName = "burgers";

var burger = {
    selectAll: function (cb) {
        //table: burgers
        orm.selectAll(tableName, function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne(tableName, cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne(tableName, objColVals, condition, function (res) {
            cb(res);
        });
    },
    // delete: function (condition, cb) {
    //     orm.delete(tableName, condition, function (res) {
    //         cb(res);
    //     });
    // }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
