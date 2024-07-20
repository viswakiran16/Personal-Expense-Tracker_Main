const router = express.Router();
// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post("/logoudt", authMiddleware, (req, res) => {
  // Invalidate token logic here if using sessions or token invalidation
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
