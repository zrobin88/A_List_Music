const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 3001;
const app = express();



const mongoose = require("mongoose")
const profileRouter = require('./routes/profile');
const queryString = require('query-string');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// api routes
app.use('/api/profiles', profileRouter);









// Connect to the Mongo DB
const databaseUri = (process.env.MONGODB_URI || "mongodb://localhost/AlistDB");
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}
else{
  mongoose.connect("mongodb://localhost/AlistDB");
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });