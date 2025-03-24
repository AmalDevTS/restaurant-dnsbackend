const MenuItem = require("../Models/menuItemSchema");
const mongoose = require("mongoose")

exports.createMenuItem = async (req, res) => {
    try {
        const { menuId, name, description, price } = req.body;

        if (!menuId || !name || !price) {
            return res.status(400).json({ message: "Menu ID, item name, and price are required" });
        }

        const lowerCaseName = name.toLowerCase();

        const existingItem = await MenuItem.findOne({ menuId, name: lowerCaseName });

        if (existingItem) {
            return res.status(400).json({ message: "MenuItem with this name already exists" });
        }

        const newItem = new MenuItem({ menuId, name: lowerCaseName, description, price });

        await newItem.save();

        res.status(201).json({ message: "Menu item added successfully", data: newItem });
    } catch (error) {
        console.error("Error creating menu:", error);

        if (error.code === 11000) {
            return res.status(400).json({ message: "MenuItem with this name already exists" });
        }

        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.getMenuItems = async (req, res) => {
    try {
        const { menuId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(menuId.trim())) {
            return res.status(400).json({ message: "Invalid menu ID format" });
        }

        const items = await MenuItem.find({ menuId: menuId.trim() });

        res.status(200).json({
            message: "Menu items fetched successfully",
            data: items
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


