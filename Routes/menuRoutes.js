const express = require("express");
const router = express.Router();
const menuController = require("../Controllers/menuController");
const menuItemController = require("../Controllers/menuItemController");

router.post("/menus", menuController.createMenu); 
router.get("/getmenus", menuController.getMenus); 

router.post("/menu-items", menuItemController.createMenuItem);
router.get("/menu-items/:menuId", menuItemController.getMenuItems); 

module.exports = router;
