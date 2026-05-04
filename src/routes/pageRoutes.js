const express = require("express");
const router = express.Router();

const pageController = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.get("/", pageController.homePage);
router.get("/login", pageController.loginPage);
router.get("/register", pageController.registerPage);
router.get("/dashboard", protect, pageController.dashboardPage);

module.exports = router;