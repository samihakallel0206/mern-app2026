const jwt= require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
    //récupérer le token
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).json({ errors: [{ msg: "Pas de token" }] });
      }
      
      //user qui correspond a ce token
      const decode = jwt.verify(token, process.env.SECRET_KEY)
      // console.log(decode)
      const foundUser = await User.findOne({ _id: decode.id })
      if (!foundUser) {
          return res.status(404).json({ errors: [{ msg: "Utilisateur non trouvé" }] })
      }
      req.user = foundUser
      next()
  } catch (error) {
      res.status(500).json({errors:[{msg:"Impossible de vérifier"}], error})
  }
};

module.exports = isAuth;
