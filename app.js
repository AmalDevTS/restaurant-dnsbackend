require('dotenv').config();

const express = require('express');
const cors = require('cors');
const menuRoutes = require("./Routes/menuRoutes");
require('./DB/connection');


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", menuRoutes);


const PORT = 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/',(req,res)=>{
    res.send("Server is running successfully")
})