const router = require('express').Router();
const controller = require('./Controllers/index')

router.get('/', controller.getAllUsers)
router.post('/', controller.postNewUser)


module.exports = router;