require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const home = require('./src/routes/home.router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', home);

app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('*', (req, res) => { res.redirect('/'); });

app.listen(3000, () => {
  console.log(`Сервер запущен порт: ${3000}`);
});
