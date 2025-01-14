const express = require('express')
const app = express();
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto= require('crypto')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const AdminRouter=require("./routers/AdminRouter");
const UserRouter=require("./routers/UserRouter");
const FlightModel = require('./models/FlightModel');
const BookingModel = require('./models/BookingModel');
const ContactModel = require('./models/ContactModel');
const DestinationModel = require('./models/DestinationModel');


app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
    }));
 
mongoose.connect('mongodb://localhost:27017/Airline_Management_System')

app.use('/admin',AdminRouter   )
app.use('/user',UserRouter)


app.get("/",async(req,res)=>{
    res.json("Priyanshu server startted")
})

const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Server start at PORT ${PORT}`);
});
