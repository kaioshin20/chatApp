const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'
const url = dburl
console.log(url)

const connectdb = (dbname) => {
    return MongoClient.connect(url)
    .then(client => client.db(dbname))
}

module.exports = {
    connectdb
}