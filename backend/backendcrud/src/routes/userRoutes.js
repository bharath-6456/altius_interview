const express=require('express');

const UserController = require('./UserController');
const { authenticate } = require('../middleware/auth.js');



const router = express.Router();
const userController = new UserController();

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', authenticate, userController.getUser);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;