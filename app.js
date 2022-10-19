const express = require('express');
const { MongoDBNamespace } = require('mongodb');
const app = express();
const morgan = require('morgan');
const path = require('path');
app.use(express.json())
const { connect } = require("./db/connect");



const port = 3000

 //log  requests
app.use(morgan('tiny'));
const admineroutes = require("./Routes/admineroutes");





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", admineroutes);


connect("mongodb://localhost:27017/", (err) => {
  if (err) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données établie");
    app.listen(3000);
    console.log("Attente des requêtes au port 3OOO");
  }
});



