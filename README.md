Nodelib Scaffold
=========

[![TravisCI Build Status][travis-img]][travis-url]
[![Dependency Status][dependencies-img]][dependencies-url]
[![devDependency Status][dev-dependencies-img]][dev-dependencies-url]
[![Commitizen friendly][commitizen-img]][commitizen-url]

A simple node module structure to bootstrap your library developement, without 
any framework.

## Installation
To get the structure run `git clone https://github.com/au-re/nodelib-scaffold.git`.

Install the dependencies by navigating to the root of the folder and running
`npm install`. To make the most out of this scaffold, install the semantic release client
globally as follow: `npm install semantic-release-cli -g`. In the root folder run
`semantic-release-cli setup` and follow the instructions. 

You can find more about semantic-release 
[here](https://github.com/semantic-release/semantic-release).

## Documentation
The documentation uses [JsDoc](http://usejsdoc.org/about-getting-started.html) 
and [Minami](https://github.com/nijikokun/minami) as the template theme.
To generate the documentation run `npm run generate-doc`. You will find it in the 
folder `doc`.
  
## Usage
Feel free to modify the structure according to your needs. Make sure to replace all 
links to TravisCI and Github in the `readme.md` and `package.json` files.

Semantic release uses a specific format for git commits. This scaffold uses 
[commitizen](https://github.com/commitizen/cz-cli) to guarantee the proper format.
To make use of this feature simply run `npm run commit` instead of `git commit`.

You can find more about the git commit convention 
[here](https://gist.github.com/stephenparish/9941e89d80e2bc58a153).

## Tests
The tests are run using [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/). 
To run the tests simply execute `npm test` in the root folder. 

## License
[ISC](LICENSE)

[travis-img]: https://travis-ci.org/au-re/nodelib-scaffold.svg?branch=master
[travis-url]: https://travis-ci.org/au-re/nodelib-scaffold
[dependencies-img]: https://david-dm.org/au-re/nodelib-scaffold.svg
[dependencies-url]: https://david-dm.org/au-re/nodelib-scaffold
[dev-dependencies-img]: https://david-dm.org/au-re/nodelib-scaffold/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/au-re/nodelib-scaffold#info=devDependencies
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/