const Prueba = require("../models/prueba")

const cosa = require("../data/prueba.json")

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

// Setting dotenv file
dotenv.config({ path: 'api/config/config.env' });

connectDatabase();

const addInfo = async () => {
  try {
    await Prueba.deleteMany()
    console.log("Prueba deleted")
    await Prueba.insertMany(cosa)
    console.log("Prueba added")
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

addInfo();
