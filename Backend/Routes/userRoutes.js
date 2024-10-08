const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const requireAuth = require("../Middleware/authMiddleware");

router.use(requireAuth);

// Routes
router.get('/AllUser', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
