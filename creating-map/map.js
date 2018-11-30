function map(array, callback) {
  var output = [];
  for(var i = 0; i < array.length; i++) {
    var word = array[i];
    output.push(callback(word));
  }

  console.log(output);
}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});