const router = require('express').Router();
const controller = require('./Controllers/index')

router.post('/login', controller.checkUserInformation)
router.post('/signup', controller.postNewUser)


module.exports = router;