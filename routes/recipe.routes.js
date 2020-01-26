const { Router } = require('express');
const Recipe = require('../models/Recipe');
const PreviousRecipe = require('../models/PreviousRecipe');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const recipe = await Recipe.find({}).populate('versions');
    res.json(recipe);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('versions');
    res.json(recipe);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      recipe: { name, description }
    } = req.body;
    const date = new Date();

    const recipe = new Recipe({
      name,
      description,
      date
    });

    await recipe.save();
    res.status(201).json({ recipe });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.put('/', async (req, res) => {
  try {
    const {
      recipe: { _id, name, description, date }
    } = req.body;

    const recipeOld = await Recipe.findOne({ _id });

    const updateDate = new Date();
    const previousRecipe = new PreviousRecipe({
      name: recipeOld.name,
      description: recipeOld.description,
      date: recipeOld.date,
      update: updateDate,
      owner: recipeOld._id
    });
    await previousRecipe.save();

    const recipeNew = await Recipe.findOneAndUpdate(
      { _id },
      {
        name,
        description,
        date,
        versions: [previousRecipe._id, ...recipeOld.versions]
      },
      { new: true, useFindAndModify: false }
    ).populate('versions');

    res.status(201).json({ recipe: recipeNew });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
