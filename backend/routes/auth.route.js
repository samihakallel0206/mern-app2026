const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middlewares/validators");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();
//sign-up : register (joindre les utilisateur de l'app)
router.post("/register", registerValidation(), validation, register);
// sign-in : login (se connecté une fois enregistré)
router.post("/login", loginValidation(), validation, login);
//current: pour savoir ? authentifié
router.get("/current", isAuth, (req, res) => {
  //pour une question de sécurité on ne retourne pas tout l'utilisateur mais juste les infos nécessaires (sans le mot de passe)
  const userToReturn = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    image: req.user.image,
    isAdmin: req.user.isAdmin,
    createdAt: req.user.createdAt,
    updatedAt: req.user.updatedAt,
  };
  res.json(userToReturn);
});
module.exports = router;
