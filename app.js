const Koa = require('koa');
const mysql = require('mysql');
const routes = require('./routes/poi');


const app = new Koa();
const PORT = process.env.PORT || 3000;



app.use(routes.routes());
app.use(routes.allowedMethods());
app.use(require('koa-body')());


const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

