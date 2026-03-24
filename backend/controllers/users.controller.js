const User = require("../models/User");
//afficher tout les users
exports.getAllUsers = async (req, res) => {
  try {
    const listUsers = await User.find().select("-password");
    res.status(200).json({ msg: "liste des utilisateurs", listUsers });
  } catch (error) {
    res.status(500).json(error);
  }
};

//un user
exports.getOneUser = async (req, res) => {
    try {
      const { id } = req.params;
      const userToGet = await User.findById(id).select("-password")
      if (!userToGet) {
        return res.status(404).json({msg: "Cet utilisateur n'existe pas! "})
      }
     res.status(200).json({msg:"l'utilisateur est:", user:userToGet})
    } catch (error) {
        res.status(500).json(error);
    }
}

//delete User 
exports.deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}