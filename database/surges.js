const pg = require('./index.js').pg;

module.exports = {

  getMostRecentSurges: () => {
    return pg.table('surgebyzip')
      .select('zipcode', 'surge')
      .orderBy('id')
      .limit(27)
  },
  updatePG: (data) => {
    pg.table('surgebyzip')
      .insert(data)
      .catch((error) => {
        console.error(error);
      })
  },
  updateRedis: (data, callback) => {

  }
}

//after either of these functions is called, the data should be added to the redis. 
