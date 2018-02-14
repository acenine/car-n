
const Koa = require('koa');
const driver = new Koa();
const Router = require('koa-router');
const router = new Router(); 
const driverData = require('../fakeData/driverData.js');

router.get('/fares/data', async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = driverData;
  } catch(error) {
    console.log('got here')
    console.error(error)
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

var port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Koa server start listening on port ${port}`)
});