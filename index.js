const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRouts = require('./routes/home');
const appRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use('/' ,homeRouts);
app.use('/courses', coursesRoutes);
app.use('/add', appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});