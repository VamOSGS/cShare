const Koa =  require('koa');
const koaBody = require('koa-body');
const { PORT } = require('../config');
const router = require('./router');

const app = new Koa;

app.use(router);

app.listen(PORT, () => console.log(`Started on ${PORT}`));