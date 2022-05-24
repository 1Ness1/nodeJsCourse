const {Router} = require('express')
const router = Router();

router.get('/', (req, responce) => {
    responce.render('add', {
        title: 'Add courses',
        isAdd: true,
    });
})

router.post('/', (req, res) => {
    console.log(req.body)

    res.redirect('/courses')
})

module.exports = router