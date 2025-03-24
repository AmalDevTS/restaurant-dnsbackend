const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
    name: { type: String, required: true, unique:true },
    description: { type: String },
    price: { type: Number, required: true },
}, { timestamps: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
