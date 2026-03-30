const express = require("express");
const { addProd, getAllProd, getOneProd, getMyProd, updateProd } = require("../controllers/product.controller");
const isAuth = require("../middlewares/isAuth");


const router = express.Router()

// test
// router.get('/test', (req, res) => {
//     res.status(200).json({msg:"hello test product!"})
// })
//creation de produit (rajout dans la BD)
router.post('/addProd',isAuth, addProd)
//read de tous les produits (lister tous les prod)
router.get("/allProd", getAllProd)
//get d'un produit
router.get("/prod/:id", getOneProd)
//get de mes produits
router.get('/me',isAuth,  getMyProd)
//update du produit
router.put('/:id',isAuth, updateProd )
//suppression



module.exports = router