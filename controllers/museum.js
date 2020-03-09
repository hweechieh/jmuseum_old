module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let artMuseumControllerCallback = (request, response) => {
        db.museum.getArtMuseums((error, artMuseums) => {
          response.render('artmuseums', { artMuseums });
        });
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      artMuseums: artMuseumControllerCallback,
    };
  
  }
  