var sing = require('./sing.js');
sing.fc();
console.log(sing.singl.getProp());
sing.singl.setProp();
console.log(sing.singl.getProp());

var sing2 = require('./sing2.js');
//sing2.setProp("xnj pf abuyz");
console.log("я в сервере вызываю синг 1 " + sing2.getProp());
console.log("я в сервере вызываю синг 1 " + sing.singl.getProp());

//delete require.cache[ './sing.js' ];
var singg = require('./sing.js');
console.log("3---", singg.singl.getProp());
sing.fc();