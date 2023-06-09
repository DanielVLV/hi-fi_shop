require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
const path = require('path');

const dbConnect = require('./db/config/dbConnect');
const authRouter = require('./src/routes/authorization.router');
const indexRouter = require('./src/routes/index.router');
const productsRouter = require('./src/routes/products.router');
const cartRouter = require('./src/routes/cart.router');
const ordersRouter = require('./src/routes/orders.router');
const profile = require('./src/routes/profile.router');
const ssr = require('./src/middleware/ssr');

const app = express();
const { PORT, COOKIE_SECRET } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    name: 'Cookie',
    store: new FileStore(),
    secret: COOKIE_SECRET || '123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
      httpOnly: true,
    },
  }),
);

app.use('/', profile);

app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(ssr);

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

dbConnect(); // ? сообщение о подключении к базе данных
app.listen(PORT, () => {
  console.log(`Сервер запущен порт: ${PORT}`);
});
