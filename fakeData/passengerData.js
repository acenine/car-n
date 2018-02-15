
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var zips = [ 
  94102,
  94103,
  94104,
  94105,
  94107,
  94108,
  94109,
  94110,
  94111,
  94112,
  94114,
  94115,
  94116,
  94117,
  94118,
  94121,
  94122,
  94123,
  94124,
  94127,
  94129,
  94131,
  94132,
  94133,
  94134,
  94143,
  94158
]

module.exports = getZip = () => {
  var i = getRandom(0, 27);
  return zips[i]; 
}