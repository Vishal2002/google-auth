// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get('/google/callback', passport.authenticate('google', {
  scope: ['profile', 'email'],
  successRedirect: 'http://localhost:5173/dashboard',
  failureRedirect: '/login/failed'
}));

module.exports = router;
