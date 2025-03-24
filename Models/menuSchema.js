const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    menuname: { type: String, required: true, unique: true }, 
    description: { type: String },
}, { timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
