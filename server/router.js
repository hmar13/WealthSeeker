const router = require('express').Router();
const controller = require('./Controllers/index');

router.post('/login', controller.checkUserInformation);
router.post('/signup', controller.postNewUser);
router.post('/addtowatchlist', controller.postToWatchlist);
router.post('/deleteticker', controller.deleteTicker);


module.exports = router;