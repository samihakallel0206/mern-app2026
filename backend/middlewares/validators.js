const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("name", "Nom est obilagtoir").notEmpty(),
  check("email", "Entrer un email Valid").isEmail(),
  check(
    "password",
    "longueur du mot de passe doit etre entre 5 et 15 car"
  ).isLength({ min: 5, max: 15 }),
];
exports.loginValidation = () => [
  check("email", "Entrer un email Valid").isEmail(),
  check(
    "password",
    "longueur du mot de passe doit etre entre 5 et 15 car",
  ).isLength({ min: 5, max: 15 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
