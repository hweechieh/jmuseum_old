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
  const artMuseumControllerCallbacks = require('./controllers/museum')(artMuseums)

  app.get('/jmuseum', artMuseumControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
