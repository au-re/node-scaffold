'use strict';

/**
 *  Generate samples of synthetic data sets. 
 *  Ported from scikit-learn (https://github.com/scikit-learn/scikit-learn)
 *  @module SampleGenerator
 * 
 */
module.exports = {
  
  /**
   * @typedef Blobs
   * @type Object
   * 
   * @property {array} X - array of shape [nSamples, nFeatures]
   *  The generated samples.
   * 
   * @property {array} y - array of shape [nSamples]
   *  The integer labels for cluster membership of each sample.
   *
   */
    
  /**
   *  Generate isotropic Gaussian blobs for clustering. 
   * 
   *  @param {number} nSamples - optional (default=100) 
   *    The total number of points equally divided among clusters.
   * 
   *  @param {number} nFeatures - optional (default=2)
   *    The number of features for each sample.
   * 
   *  @param {number | array} centers - number or array of shape [n_centers, n_features], optional (default=3)
   *    The number of centers to generate, or the fixed center locations.
   * 
   *  @param {number} cluster_std - optional (default=1.0)
   *    The standard deviation of the clusters.
   * 
   *  @param {numbers} center_box - (min, max), optional (default=(-10.0, 10.0))
   *    The bounding box for each cluster center when centers are
   *    generated at random.
   * 
   *  @param {boolean} shuffle - boolean, optional (default=True)
   *    Shuffle the samples.
   * 
   *  @param {number} random_state - optional (default=None)
   *    If int, random_state is the seed used by the random number generator
   *  
   * 
   *  @return {Blobs} {X,y} - An object containing two arrays:
   *    the generated samples and their cluster membership.
   *    
   *  
   *  @example
   *  >>> const makeBlobs = require('sample-generator').makeBlobs;
   *  >>> let blobs = makeBlobs(n_samples=10, centers=3, n_features=2,
   *  ...                   random_state=0);
   *  >>> print(X.shape)
   *  (10, 2)
   *  >>> y
   *  array([0, 0, 1, 0, 2, 2, 2, 1, 1, 0])
   * 
   */
  makeBlobs : function makeBlobs( ){
      return "ok";
  }
};