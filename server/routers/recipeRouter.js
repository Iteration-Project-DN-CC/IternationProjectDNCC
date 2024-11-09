const express = require('express');

const router = express.Router();

const recipeController = require('../controllers/recipeController.js');

router.get('/', recipeController.getRecipesByLiquor, (req, res) => {
  res.status(200).json({ recipes: res.locals.queryResults });
});

module.exports = router;
