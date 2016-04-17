
var singl = require('./sing.js').singl;
console.log("я в сингл 2 вызываю сингл1 " + singl.getProp());
singl.setProp("я поменял свойство сингл 1 в сингл2");

var singl2 = function () {
  var prop = 'Singl2-----';
  this.setProp = function(pr) {
	this.prop = pr;
  };
  this.getProp = function() {
	return prop;
  }
};

module.exports = new singl2();
