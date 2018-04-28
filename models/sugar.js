// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// Object containing orm functions

const sugar = {
  all: function(cb) {
    orm.all("goods", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("goods", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(val, condition, cb) {
    orm.update("goods", val, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("goods", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = sugar;
