'use strict';

const should        = require('chai').should(),
      sinon         = require('sinon'),
      scaffold = require('../../src/index');

/**
 *  NodeBootstrap Specs
 *  Unit tests should not touch database, routes, or non-mocked external classes
 *  
 */

describe('Scaffold Core', function(){
  
  before(function() {
    // setup all tests
  });

  beforeEach(function() {
    // setup single test
  });

  after(function() {
    // cleanup & close connections
  });
  
  describe('when doing something simple', function(){
    
    it('should simply do it', function() {
      let answer = scaffold.myFunction();
      answer.should.be.equal("42!");
    });
    
  });
});