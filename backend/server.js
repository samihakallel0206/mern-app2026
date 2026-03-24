const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB"); ///import de la fonction de connexion à la BD
const cors = require("cors");

// --------------------------------------------------------------------------
const app = express();
// middleware
// CORS commenté : on utilise le proxy Vite pour les requêtes du frontend
app.use(express.json()); // nécessaire pour parser les requêtes POST
//connexion à la base de données
connectDB(); //l'appel
//route
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/users", require("./routes/user.route"));
// ------------------------------------FIN-------------------------------
const PORT = process.env.PORT || 7550;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Le serveur est sur le : http://localhost:${PORT}`);
});
