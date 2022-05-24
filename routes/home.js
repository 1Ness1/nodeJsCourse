const {Router} = require('express')
const router = Router();

router.get('/', (req, responce) => {
    responce.render('index', {
        title: 'Home page',
        isHome: true,
    });
})

module.exports = router