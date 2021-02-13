const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { ensureAuthenticated } = require("../config/auth.js");

//api routes
router.use("/api", apiRoutes);

//login
router.get("/", (req, res) => {
  res.render("welcome");
});

//register
router.get("/register", (req, res) => {
  res.render("register");
});

//dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });

  //module.exports = router;
});

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
