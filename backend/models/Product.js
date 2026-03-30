const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price: Number,
    image: {
      type: String,
      required: true,
      default:
        "https://www.oit.org.tn/fileadmin/Contenu/Images/Emna/formation.jpg",
    },
    duree: {
      type: String,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
