console.log("--------------");
var singl = function (pp) {
  var prop = pp || 'Hello, World';
  this.setProp = function(pr) {
	prop = pr || "Что то";
  };
  this.getProp = function() {
	return prop;
  }
  return this;
};
module.exports.singl = new singl();
module.exports.fc = function(){
	console.log("-----fc-----");
};