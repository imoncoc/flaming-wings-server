const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send("Flaming Wings is Running");
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipes = recipe.filter((data) => data.chefId === id);
  if (selectedRecipes.length > 0) {
    const chefData = chef.find((data) => data.id === id);
    const data = {
      chef: chefData,
      recipes: selectedRecipes,
    };
    res.json(data);
  } else {
    res.status(404).send("Recipes not found");
  }
});

app.get("/recipe/allImages", (req, res) => {
  const allImg = recipe.map((data) => data.strMealThumb);
  res.send(allImg)
})

app.listen(port, () => {
    console.log(`Flaming wings is running on port: ${port}`);
})