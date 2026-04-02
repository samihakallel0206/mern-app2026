const Product = require("../models/Product");
//!CREATE
exports.addProd = async (req, res) => {
  try {
    const newProd = new Product({ ...req.body, addedBy: req.user._id });
    await newProd.save();
    res.status(201).json({
      msg: "Produit rajouté avec succès",
      newProd,
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Problème lors du rajout de ce produit", error });
  }
};

//!READ
// All
exports.getAllProd = async (req, res) => {
  try {
    const listProd = await Product.find();
    res.status(200).json({ msg: "Liste de tous les produits", listProd });
  } catch (error) {
    res.status(500).json({ msg: "Impossible d'afficher les produits ", error });
  }
};
//one
exports.getOneProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prodToGet = await Product.findById(id);
    if (!prodToGet) return res.status(404).json({ msg: "Produit non trouvé" });
    res.status(200).json({ msg: "Le produit recherhé est: ", prodToGet });
  } catch (error) {
    res.status(500).json({ msg: "Impossible de trouver le produit ", error });
  }
};
//ses prod
exports.getMyProd = async (req, res) => {
  try {
    const maListProd = await Product.find({ addedBy: req.user._id });
    if (!maListProd)
      return res.status(404).json({ msg: "Vous n'avez pas de produits" });
    res.status(200).json({ msg: "Liste de vos produits", maListProd });
  } catch (error) {
    res.status(500).json({ msg: "Impossible de trouver vos produits ", error });
  }
};
//!UPDATE
exports.updateProd = async (req, res) => {
  try {
    // récupérer le id de la requete
    const { id } = req.params;
    // chercher le prod
    const prodToFind = await Product.findById(id);
    if (!prodToFind)
      return res.status(404).json({ msg: "Produit non trouvé!" });
    //vérifier si le propriétaire du produit est le meme que celui qui veut le modifier
    if (prodToFind.addedBy.toString() !== req.user._id.toString())
      return res
        .status(403)
        .json({ msg: "Tu n'as pas le droit de mettre à jour ce produit" });
    // const { title, description, price, image, duree } = req.body;
    const prodToUpdate = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true },
    );
    res.status(200).json({ msg: "Produit mis à jour", prodToUpdate });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Impossible mettre à jour ce produit ", error });
  }
};

//!DELETE
exports.deleteProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prodToFind = await Product.findById(id);
    if (!prodToFind) {
      return res.status(404).json({ msg: "Le produit n'existe pas " });
    }
    if (prodToFind.addedBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ msg: "Tu n'as pas le droit de supprimer ce produit!" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "Produit supprimé!", prodToFind });
  } catch (error) {
    res.status(500).json({ msg: "Impossible de supprimer ce produit ", error });
  }
};
