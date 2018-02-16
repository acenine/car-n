//require('newrelic');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router(); 
//const db = require('../database/surges.js');
//const zip_loc = require('../fakeData/zips.js').zip_locs;
//const redis = require('redis');
//const client = redis.createClient(process.env.REDIS);
const bluebird = require('bluebird');
const geolib = require('geolib');
const axios = require('axios'); 
//const driverData = require('../fakeData/driverData.js');
//const eventData = require('../fakeData/eventData.js');
//const getZip = require('../fakeData/passengerData.js');

//const basePrice = 2;
//const baseRate = 2;

//bluebird.promisifyAll(redis.RedisClient.prototype);
//bluebird.promisifyAll(redis.Multi.prototype);

//client.on("error", function (err) {
//    console.log("Error " + err);
//});
// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);


 
<<<<<<< HEAD
router.get('/', (ctx, next) => {
  ctx.body = "Hello KOA";
});
var updateRedis = async (data) => {
  data.forEach((item) => {
    client.set(item.zipcode, item.surge);
  });
}
router.get('/get/surges', async (ctx) => { //gets last surge values from postgres and updates redis with these values
  try {
    var data = await db.getMostRecentSurges();
    updateRedis(data);
    ctx.status = 200;
    ctx.body = "did it!";
  } catch(error) {
    console.error(error);
  }
});

var findDistance = (zip1, zip2) => {
  var c1 = {latitude: zip_loc[zip1][0], longitude: zip_loc[zip1][1]};
  var c2 = {latitude: zip_loc[zip2][0], longitude: zip_loc[zip2][1]};
  var dist = geolib.getDistance(c1, c2, 1, 1);
  return dist;
}
=======
 router.get('/', (ctx, next) => {
   ctx.body = "Hello KOA";
 });
//var updateRedis = async (data) => {
//  data.forEach((item) => {
//    client.set(item.zipcode, item.surge);
//  });
//}
//router.get('/get/surges', async (ctx) => { //gets last surge values from postgres and updates redis with these values
//  try {
//    var data = await db.getMostRecentSurges();
//    updateRedis(data);
//    ctx.status = 200;
//    ctx.body = "did it!";
//  } catch(error) {
//    console.error(error);
//  }
//});

//var findDistance = (zip1, zip2) => {
//  var c1 = {latitude: zip_loc[zip1][0], longitude: zip_loc[zip1][1]};
//  var c2 = {latitude: zip_loc[zip2][0], longitude: zip_loc[zip2][1]};
//  var dist = geolib.getDistance(c1, c2, 1, 1);
//  return dist;
//}
>>>>>>> 5e9394320779bdf2f2f901143ef2f36a910d1a67

// passenger service calls this 
//router.get('/request/fare', async (ctx) => {
//  try {
//    var {loc_zip, loc_lat, loc_lon, dest_zip, dest_lat, dest_lon, date_ms} = ctx.query;
//    var dist = geolib.getDistance(
//      {latitude: loc_lat, longitude: loc_lon}, 
//      {latitude: dest_lat, longitude: dest_lon}, 1, 1) * 0.000621371;

    // var loc_zip = getZip();
    // var dest_zip = getZip();
    // var dist = findDistance(loc_zip, dest_zip);
    // dist = dist * 0.000621371; // meters to miles
//    const now = Date.now();
   // var surge = await client.getAsync(loc_zip.toString());


<<<<<<< HEAD
    // var surge = await db.getMostRecentSurge(loc_zip);
    // surge = surge[0].surge;
    console.log(Date.now() - now);
=======
//    var surge = await db.getMostRecentSurge(loc_zip);
//    surge = surge[0].surge;
//    console.log(Date.now() - now);
>>>>>>> 5e9394320779bdf2f2f901143ef2f36a910d1a67
    //var surge = await db.getRawSurge(loc_zip);

//    var fare = basePrice + (dist * baseRate * surge);
//    ctx.status = 200; 
//    ctx.body = fare;
//  } catch(error) {
//    console.error("Error retrieving from redis database: ", error);
//  }
//});

//var updateSurgeData = () => {
//  axios.get('http://ec2-18-219-125-116.us-east-2.compute.amazonaws.com:9000/fares/data')
//    .then(driverRes => { // {zipcode: integer, ...}
//      axios.get('http://ec2-18-219-125-116.us-east-2.compute.amazonaws.com:9000/dataForFares')
//        .then(eventRes => { // [{zipOrigin: '94117', rides: '54', views: '0' }, ...]
//          var surgeData = [];
//          var timestamp = new Date(); 
//          for (var i = 0; i < eventRes.length; i++) {
//            var {zipOrigin, rides, views} = eventRes[i];
//            var drivers = driverRes[zipOrigin];
//            var ratio = (rides-views)/drivers;
//            var surge = ratio > 1 ? ratio : 1;
//            surgeData.push({zipcode: zipOrigin, surge: surge, updated: timestamp})
//          }
//          updateRedis(surgeData);
//          db.updatePG(surgeData);
//        })
//        .catch(err => {
//          console.error('Error retrieving Event data: ', err.message);
//        })
//    })
//    .catch(err => {
//      console.error('Error retrieving Driver data: ', err);
//    })
//}
//updateSurgeData();
//setInterval(updateSurgeData, 60000);


// ------- fake endpoints for fake data ------- //
//router.get('/fares/data', async (ctx) => {
//  try {
//    ctx.status = 200;
//    ctx.body = driverData;
//  } catch(error) {
//    console.log('got here')
//    console.error(error)
//  }
//})

router.get('/dataForFares', async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = eventData;
  } catch(error) {
    console.error(error)
  }
})
// -------------------------------------------- //

////////////////////////////////////////////////////////////////////////
// DID WORK WITH ALTERNATE ANDREW METHOD
// router.get('/get/surge/:zip', async (ctx) => {
//   try{ 
//     var result = await getAsync(ctx.params.zip);
//     console.log("result", result)
//     ctx.status = 200;
//     ctx.body = result;
//   } catch(error) {
//     console.error(error);
//   }
// });

router.get('/get/surge/:zip', async (ctx) => {
  try { 
    var result = await client.getAsync(ctx.params.zip);
    ctx.status = 200;
    ctx.body = result;
    // what i really want to do is use this result to calculate 
    // the fare price and send the price back to the user
    // maybe the end point that receives the request from 
    // passenger service will call this endpoint and do the calulations 
    // on its end with the result response
  } catch(error) {
    console.error("Error retrieving from redis database: ", error);
  }
});

// DID NOT WORK
// router.get('/get/surge/:zip', (ctx, next) => {
//   client.get(ctx.params.zip, (err, reply) => {
//     if (err) {
//       console.error("Error retrieving from database: ", err);
//     } else {
//       console.log(ctx.params.zip, reply);
//       ctx.status = 200;
//       ctx.body = reply;
//     }
//   })
// });
////////////////////////////////////////////////////////////////////////

// router.post('/post/surges', (res, req) => {})

app
  .use(router.routes())
  .use(router.allowedMethods());


// app.use(ctx => {
//   // console.log(router)
//   ctx.body = 'Hello Koa';
// });

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Koa server start listening on port ${port}`)
});
