const {Router} = require('express')
const router = Router();

router.get('/', (req, responce) => {
    responce.render('courses', {
        title: 'Courses',
        isCourse: true,
    });
})

module.exports = router