var updateRedis = async (data) => {
  data.forEach((item) => {
    client.set(item.zipcode, item.surge);
  });
}

var findDistance = (zip1, zip2) => {
  var c1 = {latitude: zip_loc[zip1][0], longitude: zip_loc[zip1][1]};
  var c2 = {latitude: zip_loc[zip2][0], longitude: zip_loc[zip2][1]};
  var dist = geolib.getDistance(c1, c2, 1, 1);
  return dist;
}

var updateSurgeData = () => {
  axios.get('/fares/data')
    .then(driverRes => { // {zipcode: integer, ...}
      axios.get('/dataForFares')
        .then(eventRes => { // [{zipOrigin: '94117', rides: '54', views: '0' }, ...]
          var surgeDate = []; 
          var timestamp = new Date(); 
          for (var i = 0; i < eventRes.length; i++) {
            var {zipOrigin, rides, views} = eventRes[i];
            var drivers = driverRes[zipOrigin];
            var ratio = (rides-views)/drivers;
            var surge = ratio > 1 ? ratio : 1;
            surgeData.push({zipcode: zipOrigin, surge: surge, updated: timestamp})
          }
          updateRedis(surgeData);
          db.updatePG(surgeData);
        })
        .catch(err => {
          console.error('Error retrieving Event data: ', err);
        })
    })
    .catch(err => {
      console.error('Error retrieving Event data: ', err);
    })
}
// updateSurgeData();
// setInterval(updateSurgeData, 60000);

