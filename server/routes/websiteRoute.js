const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/websiteController');

// Routes
router.get('/', websiteController.home);

module.exports = router;