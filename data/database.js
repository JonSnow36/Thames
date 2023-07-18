if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}



const mongodb = require('mongodb');
const dbURL = process.env.DB_URL;
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(dbURL);
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};