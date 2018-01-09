const Koa =  require('koa');
const koaBody = require('koa-body');
const router = require('./router');
require('dotenv').config();

const { PORT } = process.env;
const app = new Koa;

app.use(router);

app.listen(PORT, () => console.log(`Started on ${PORT}`));