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
  res.json(req.user);
});
module.exports = router;
