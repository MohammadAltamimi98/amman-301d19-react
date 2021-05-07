'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
const inMemory = {};
// { 'chicken' : {}, 'mansaf':{},}

app.get('/recipes', getRecipes);


// our caching process:

// 1 - we are going to check if we have the information cached 
// 2 - send back the information if we have cached
// 3 - if not in cache, cache the data after we get it from our api

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const url = `https://api.edamam.com/search`;

  const queryParams = {
    q: ingredient,
    app_id: process.env.FOOD_APP_ID,
    app_key: process.env.FOOD_APP_KEY
  };

  // console.log(inMemory);
  superagent.get(url).query(queryParams).then(res => {
    if (inMemory[ingredient] !== undefined) { // return cached data only when that ingredient is a key in our memory obj
      console.log(' we got the ingredients from the cache');
      response.send(inMemory[ingredient])
    } else {
      console.log('getting the data from the API');
      const recipeArr = res.body.hits.map(recipe => new Recipe(recipe.recipe));
      console.log('storing data into the cache');
      inMemory[ingredient] = recipeArr;
      response.send(recipeArr);
    }
  }).catch(err => {
    console.log('error', err);
    response.status(500).send('error', err);
  })
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
