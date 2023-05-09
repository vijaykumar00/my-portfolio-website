const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all projects
router.get('/projects', authMiddleware, adminController.getAllProjects);

// Add a new project
router.post('/projects', authMiddleware, adminController.addProject);

// Edit a project
router.put('/projects/:id', authMiddleware, adminController.editProject);

// Delete a project
router.delete('/projects/:id', authMiddleware, adminController.deleteProject);

module.exports = router;
