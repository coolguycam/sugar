const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
