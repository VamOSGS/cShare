const Router = require('koa-router');
const user = new Router();

user.get('/login', async ctx => {
  ctx.state = { title: 'Login your account' };
  return ctx.render('login');
});

user.get('/register', async ctx => {
  ctx.state = { title: 'Register a new account' };
  return ctx.render('register');
});

module.exports = user;
