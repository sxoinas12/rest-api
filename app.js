const Koa = require('koa');
const app = new Koa();


//const routes = require('./routes/index');

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);