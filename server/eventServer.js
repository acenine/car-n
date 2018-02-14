
const Koa = require('koa');
const event = new Koa();
const Router = require('koa-router');
const router = new Router(); 
const eventData = require('../fakeData/eventData.js');
router.get('/dataForFares', async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = eventData;
  } catch(error) {
    console.error(error)
  }
})
event
  .use(router.routes())
  .use(router.allowedMethods());


// app.use(ctx => {
//   // console.log(router)
//   ctx.body = 'Hello Koa';
// });

var port = process.env.PORT || 9002;

event.listen(port, () => {
  console.log(`Koa server start listening on port ${port}`)
});