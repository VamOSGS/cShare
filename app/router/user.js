const Router = require('koa-router');
const user = new Router();

user.get('/login', async ctx => {
    ctx.body = 'ok'
})

module.exports = user;

