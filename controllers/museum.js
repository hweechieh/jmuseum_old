module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    const artMuseumControllerCallback = (request, response) => {
        db.museum.getArtMuseums((error, result) => {
          if (error) {
            console.error('there is an error:', error);
            response.sendStatus(500);
          } else {
            response.send(result);
          }
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
  