'use strict';

/**
 *  Entry point to your node module
 *  @module NodeScaffold
 * 
 */
module.exports = {

  /**
   *  Placeholder function 
   * 
   *  @param {string} question - optional (default=None) 
   *    A meaningfull question about life and the universe
   *  
   *  @return {string} - returns the string "42!"
   *    
   *  @example
   *  >>> const scaffold = require('node-scaffold');
   *  >>> scaffold.myFunction("What is the Answer to the Ultimate Question of 
   *  ... Life, the Universe, and Everything?");
   * 
   *  "42!"
   * 
   */
  myFunction: function myFunction(question) {
    
    console.log("Tough question!.. come back in 7.5 million years");
    
    let answer = 42 + "!";
    return answer;
  }
};