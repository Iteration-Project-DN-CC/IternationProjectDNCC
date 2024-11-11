const models = require('../models/recipeModel.js');

const recipeController = {};

// Get all recipes

// Get Recipe by liquor name
recipeController.getRecipesByLiquor = async (req, res, next) => {
  // get params
  console.log(req.query);
  let { liquor, limit } = req.query;
  console.log('Liquor type: ', liquor);
  if (!liquor) {
    return next({
      log: 'no liquor query param',
      status: 400,
      message: { err: 'server says: you have to specify a liquor query parameter.' },
    });
  }
  if (!limit) {
    limit = 20;
  }

  // Logic to fetch
  try {
    const data = await models.Recipe.find({ liquor: liquor }).limit(limit).exec();
    console.log('Data: ', data);
    // const data = await response.json();
    // console.log(data);
    res.locals.queryResults = data;
    return next();
  } catch (error) {
    return next({
      log: 'Error in recipeController.getAllRecipes' + error,
      status: 500,
      message: { err: 'An error occurred while retrieving characters.' },
    });
  }
};

module.exports = recipeController;
