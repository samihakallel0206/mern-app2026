const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// ------------------------------------------REGISTER-----------------------------------
exports.register = async (req, res) => {
  try {
    //récupérer la requête
    const { name, email, password, image } = req.body;
    // console.log("req.body", req.body);
    //chercher le user avec cet email
    const foundUser = await User.findOne({ email });
    // si email trouvé je sors : message d'erreur
    if (foundUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Utilisateur existe déja!!!" }] });
    }
    //je trouve pas le user dans ma BD: crypte son mot de passe
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    //créer le nouveau document en se basant sur le model
    const newUser = new User({ name, email, password: hashPassword, image });
    // sauveagrde dans la BD
    await newUser.save();
    //token: jeton pour dire que la personne est connecté et aussi mesure de sécurité
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    // console.log(token);
    res.status(201).json({
      success: [{ msg: "Utilisateur créer avec succès." }], ///message destine pour le client
      user: newUser, // crée
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ errors: [{ msg: "Echec d'enregistrement..." }], error });
  }
};

// --------------------------------LOGIN-------------------------------------

exports.login = async (req, res) => {
  try {
    //recevoir une requête
    // console.log(req.body)
    const { email, password } = req.body;
    //chercher par email? je dois trouver le email sinon redireger vers le register
    const foundUser = await User.findOne({ email });
    //verifier ? le bon mot de passe.
    //erreur email
    if (!foundUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Erreur d'authentification " }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    //mot de passe
    if (!checkPassword) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Erreur d'authentification " }] });
    }
    //token
    const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    // response :connecté
    res.status(200).json({
      success: [{ msg: "Succès de connexion!!!" }],
      user: foundUser,
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ errors: [{ msg: "Impossible de se connecter" }, error] });
  }
};
