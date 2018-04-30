const express = require("express");

const router = express.Router();

// Import the model (sugar.js) to use its database functions.
const sugar = require("../models/sugar.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    sugar.all(function(data) {
      var hbsObject = {
        goods: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/goods", function(req, res) {
    sugar.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/goods/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    sugar.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/goods/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    sugar.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  // Export routes for app.js to use.
module.exports = routes;
  