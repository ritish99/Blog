//inititalizing the blog controller and express
const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();
//blog routes to all html pages in the project
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router; 