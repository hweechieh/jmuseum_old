/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
// `dbPoolInstance` is accessible within this function scope


// Selecting museums under Art category
let getArtMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 1';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};
  

// Selecting museums under History category
let getHistoryMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 2';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};


// Selecting museums under War category
let getWarMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 3';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};


// Selecting museums under Science category
let getScienceMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 4';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};


// Selecting museums under Disaster category
let getDisasterMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 5';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};


// Selecting museums under Others category
let getOthersMuseums = (callback) => {

  let query = 'SELECT category_museum.category_id, museum.title, museum.admission, museum.opens, museum.closes, museum.opening_hours, museum.transport, museum.located FROM museum INNER JOIN category_museum ON (category_museum.museum_id = museum.id) WHERE category_museum.category_id = 6';

  dbPoolInstance.query(query, (error, queryResult) => {
    if( error ){

      console.log( "error", error );
      // invoke callback function with results after query has executed
      callback(error, null);

    }else{

      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);

      }else{
        callback(null, null);
      }
    }
  });
};


    return {
      getArtMuseums,
      getHistoryMuseums,
      getWarMuseums,
      getScienceMuseums,
      getDisasterMuseums,
      getOthersMuseums,
    };
  };
  