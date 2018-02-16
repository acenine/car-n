const pg = require('./index.js').pg;
const { Pool, Client } = require('pg')


const pool = new Pool({
  user: 'acenine',
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: 5432
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})


// callback - checkout a client
// pool.connect((err, client, done) => {
//   if (err) throw err
//   client.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
//     done()

//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows[0])
//     }
//   })
// })

// // promise - checkout a client
// pool.connect()
//   .then(client => {
//     return client.query('SELECT * FROM users WHERE id = $1', [1])
//       .then(res => {
//         client.release()
//         console.log(res.rows[0])
//       })
//       .catch(e => {
//         client.release()
//         console.log(err.stack)
//       })
//   })

// // async/await - check out a client
// (async () => {
//   const client = await pool.connect()
//   try {
//     const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
//     console.log(res.rows[0])
//   } finally {
//     client.release()
//   }
// })().catch(e => console.log(e.stack))

module.exports = {

  getMostRecentSurges: () => {
    return pg.table('surgebyzip')
      .select('zipcode', 'surge')
      .orderBy('id', 'desc')
      .limit(27)
  },
  getMostRecentSurge: (zipcode) => {
    return pg.table('surgebyzip')
      .where({zipcode: zipcode})
      .select('surge')
      .orderBy('id', 'desc')
      .limit(1)
      
  },
  getRawSurge: async (zipcode) => {
    return pool.query('SELECT surge FROM surgebyzip WHERE zipcode = $1 ORDER BY id desc LIMIT 1', [zipcode])
      .then(res => {
        return res.rows[0].surge;
      })
  },
  updatePG: (data) => {
    pg.insert(data)
      .into('surgebyzip')
      .returning('id')
      .catch((error) => {
        console.error(error);
      })
  },
  updateRedis: (data, callback) => {

  }
}

//after either of these functions is called, the data should be added to the redis. 
