'use strict';

const should    = require('chai').should(),
      scaffold  = require('../../src/index');

/**
 *  NodeBootstrap Specs
 *  Integration tests shouldn't require mocked components
 *  
 */

describe('Scaffold System', function(){
  
  before(function() {
    // setup all tests
  });

  beforeEach(function() {
    // setup single test
  });

  after(function() {
    // cleanup & close connections
  });
  
  describe('its many components', function(){
    
    it('should play along nicely', function() {
      let answer = scaffold.myFunction();
      answer.should.be.equal("42!");
    });
    
  });
});