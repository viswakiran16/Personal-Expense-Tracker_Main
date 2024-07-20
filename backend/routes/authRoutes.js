// routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post("/register", register);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post("/login", login);

// router.post('/logout', login);

// @route    POST api/auth/logout
// @desc     logout user
// @access   Public
router.post("/logout", (req, res) => {
  // Invalidate token logic here if using sessions or token invalidation
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
