'use strict';

const should        = require('chai').should(),
      NodeBootstrap = require('../../src/node-bootstrap');

/**
 *  NodeBootstrap Specs
 *  Integration tests shouldn't require mocked components
 *  
 */

describe('NodeBootstrap', function(){
  
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
      let t = true;
      t.should.be.true;
    });
    
  });
});