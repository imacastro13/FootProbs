const mongoose = require("mongoose");

const pruebaSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

module.exports = mongoose.model("Prueba", pruebaSchema);
