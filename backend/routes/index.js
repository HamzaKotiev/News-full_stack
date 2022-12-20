const {Router} = require('express');

const router = Router()

router.use(requir('./admin.route.js'));
router.use(requir('./news.route.js'));
router.use(requir('./user.route.js'));

module.exports = router