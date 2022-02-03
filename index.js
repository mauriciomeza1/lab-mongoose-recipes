const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://mauriciomeza:Taquito2021!@cluster0.rgjhw.mongodb.net/test';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });



  Recipe.create({
    name: "Burguer",
    level: "Easy Peasy",
    ingredients: ['bread', 'lettuce', 'meat', 'salt', 'pepper', 'tomatoes', 'ketchup'],
    dishType: 'main_course',
    duration: 35,
    creator: 'Ronald McDonald'
  })
  .then((r) => console.log(r))
  .catch((e) => console.log(e))

  Recipe.insertMany(data).then(res =>console.log(res)).catch(e =>console.log(e))