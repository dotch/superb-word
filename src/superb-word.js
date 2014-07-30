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
