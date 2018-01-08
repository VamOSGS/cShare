const Router = require('koa-router');
const root = new Router();

root.get('/', async (ctx, next) => {
    ctx.body = 'Hello'
});

module.exports = root;