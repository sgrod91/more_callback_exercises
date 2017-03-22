var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

function transform (filename, callback) {
  var contents = 'Hello, world!';
  fs.writeFile(filename, contents, function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback(null);
        });
}

var async = require('async');
var fs = require('fs');
async.map(filenames, transform, function(err){
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
});
