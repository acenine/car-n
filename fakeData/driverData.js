// module.exports = {
//   94102: 42,
//   94103: 27,
//   94104: 18,
//   94105: 6,
//   94107: 13,
//   94108: 30,
//   94109: 9,
//   94110: 22,
//   94111: 14,
//   94112: 20,
//   94114: 11,
//   94115: 24,
//   94116: 16,
//   94117: 8,
//   94118: 30,
//   94121: 17,
//   94122: 22,
//   94123: 12,
//   94124: 10,
//   94127: 29,
//   94129: 56,
//   94131: 5,
//   94132: 17,
//   94133: 33,
//   94134: 14,
//   94143: 44,
//   94158: 23
// }

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

module.exports = {
  94102: getRandom(5, 40),
  94103: getRandom(5, 40),
  94104: getRandom(5, 40),
  94105: getRandom(5, 40),
  94107: getRandom(5, 40),
  94108: getRandom(5, 40),
  94109: getRandom(5, 40),
  94110: getRandom(5, 40),
  94111: getRandom(5, 40),
  94112: getRandom(5, 40),
  94114: getRandom(5, 40),
  94115: getRandom(5, 40),
  94116: getRandom(5, 40),
  94117: getRandom(5, 40),
  94118: getRandom(5, 40),
  94121: getRandom(5, 40),
  94122: getRandom(5, 40),
  94123: getRandom(5, 40),
  94124: getRandom(5, 40),
  94127: getRandom(5, 40),
  94129: getRandom(5, 40),
  94131: getRandom(5, 40),
  94132: getRandom(5, 40),
  94133: getRandom(5, 40),
  94134: getRandom(5, 40),
  94143: getRandom(5, 40),
  94158: getRandom(5, 40)
}