const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/userController");

router
  .route("/")
  // Get all users
  .get(handleGetAllUsers)
  // create user
  .post(handleCreateNewUser);

router
  .route("/:id")
  // Get user by id
  .get(handleGetUserById)
  // Edit/Update user by id
  .patch(handleUpdateUserById)
  // Delete user by id
  .delete(handleDeleteUserById);

// ;

module.exports = router;
