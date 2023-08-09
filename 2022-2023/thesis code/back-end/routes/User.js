const UserController = require('../controllers/UserController');
const router = require('express').Router();


// create a new user
router.post('/register', UserController.register);

// login
router.post('/login', UserController.login);

// logout
router.get('/', UserController.logout);

// check login status
router.get('/status', UserController.status);

module.exports = router;
