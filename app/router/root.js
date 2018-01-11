const Router = require('koa-router');
const root = new Router();

root.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'cShare'
  };
  return ctx.render('index');
});


module.exports = root;
