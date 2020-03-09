module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const artMuseumControllerCallbacks = require('./controllers/museum')(allModels)

  app.get('/artmuseums', artMuseumControllerCallbacks.artMuseums);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
