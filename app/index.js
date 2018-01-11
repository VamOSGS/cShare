const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router');
const views = require('koa-views');
const path = require('path');
const hbs = require('koa-hbs');
const connect_db = require('./db');
require('dotenv').config();

const { PORT } = process.env;
const app = new Koa();

connect_db();

app.use(
  hbs.middleware({
    viewPath: __dirname + '/views',
    layoutsPath: __dirname + '/views/layouts',
    partialsPath: __dirname + '/views/partials',
    defaultLayout: 'main'
  })
);
app.use(router);

app.listen(PORT, () => console.log(`Started on ${PORT}`));
