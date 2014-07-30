(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var words = require('./words.json');
var uniqueRandom = require('unique-random')(0, words.length - 1);

module.exports = function () {
	return words[uniqueRandom()];
};

module.exports.words = words;

},{"./words.json":3,"unique-random":2}],2:[function(require,module,exports){
/*!
	unique-random
	Generate random numbers that are consecutively unique
	https://github.com/sindresorhus/unique-random
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	function uniqueRandom(min, max) {
		var prev;
		return function rand() {
			var num = Math.floor(Math.random() * (max - min + 1) + min);
			return prev = num === prev && min !== max ? rand() : num;
		};
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = uniqueRandom;
	} else {
		window.uniqueRandom = uniqueRandom;
	}
})();

},{}],3:[function(require,module,exports){
module.exports=[
	"ace",
	"amazing",
	"astonishing",
	"astounding",
	"awe-inspiring",
	"awesome",
	"badass",
	"beautiful",
	"bedazzling",
	"best",
	"breathtaking",
	"brilliant",
	"cat's meow",
	"cat's pajamas",
	"classy",
	"cool",
	"dandy",
	"dazzling",
	"delightful",
	"divine",
	"doozie",
	"epic",
	"excellent",
	"exceptional",
	"exquisite",
	"extraordinary",
	"fabulous",
	"fantastic",
	"fine",
	"finest",
	"first-class",
	"first-rate",
	"flawless",
	"funkadelic",
	"glorious",
	"gnarly",
	"good",
	"grand",
	"great",
	"groovy",
	"groundbreaking",
	"hunky-dory",
	"impeccable",
	"impressive",
	"incredible",
	"kickass",
	"killer",
	"kryptonian",
	"laudable",
	"legendary",
	"lovely",
	"luminous",
	"magnificent",
	"majestic",
	"marvelous",
	"mind-blowing",
	"neat",
	"outstanding",
	"peachy",
	"perfect",
	"phenomenal",
	"pioneering",
	"polished",
	"posh",
	"praiseworthy",
	"premium",
	"priceless",
	"prime",
	"primo",
	"rad",
	"remarkable",
	"riveting",
	"sensational",
	"slick",
	"solid",
	"spectacular",
	"splendid",
	"striking",
	"stunning",
	"stupendous",
	"stylish",
	"sublime",
	"super",
	"super-duper",
	"super-excellent",
	"superb",
	"superior",
	"supreme",
	"swell",
	"terrific",
	"tiptop",
	"top-notch",
	"transcendent",
	"ultimate",
	"unreal",
	"well-made",
	"wicked",
	"wonderful",
	"wondrous",
	"world-class"
]

},{}],4:[function(require,module,exports){
(function() {

  var superb = require('superb');

  var SuperbElementPrototype = Object.create(HTMLElement.prototype);

  SuperbElementPrototype.createdCallback = function() {
    this.appendChild(document.createTextNode(superb()));
  };

  window.SuperbElementPrototype = document.registerElement('superb-word', {
    prototype: SuperbElementPrototype
  });

})();

},{"superb":1}]},{},[4])