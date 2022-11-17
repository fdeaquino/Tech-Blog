const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

// express handlebars
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Express.js middleware that takes the contents of this folder and serves them as static assets
app.use(express.static(path.join(__dirname, 'public')));

// express handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})