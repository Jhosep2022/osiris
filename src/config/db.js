const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

let mongoClient;

async function connectToMongoClient() {
  if (!mongoClient) {
    mongoClient = await MongoClient.connect(process.env.URI);
  }
  return mongoClient;
}

async function connectToMongoose() {
  try {
    await mongoose.connect(process.env.URI);
    console.log('MongoDB conectado con Mongoose');
  } catch (error) {
    console.error('Error al conectar a MongoDB con Mongoose', error);
    process.exit(1);
  }
}

module.exports = {
  connectToMongoClient,
  connectToMongoose,
};
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
