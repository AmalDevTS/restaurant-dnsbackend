const Menu = require("../Models/menuSchema");

exports.createMenu = async (req, res) => {
    try {

        let { menuname, description } = req.body;

        if (!menuname) {
            return res.status(400).json({ message: "Menu name is required" });
        }

        menuname = menuname.trim().toLowerCase();

        const newMenu = await Menu.create({ menuname, description });

        return res.status(201).json({ message: "Menu created successfully", data: newMenu });

    } catch (error) {
        console.error("Error creating menu:", error);

        if (error.code === 11000) {
            return res.status(400).json({ message: "Menu with this name already exists" });
        }

        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
