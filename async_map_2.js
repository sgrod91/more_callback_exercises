var fs = require('fs');
path = require("path");
var files = [
  'assault_rifle.png',
  'cat.png',
  'js-logo.png',
  'lion.png'
];

var p = "../";
// fs.readdir(p, function (err, files) {
//     if (err) {
//         throw err;
//     }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});

      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback(null);
        });
    });
  });
}

// downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('It worked');
// });


//steps for resizing all images

//step 1 read dir to get the files
//step 2 async.each/map - transform each files
//step 3 in function transform
  //a. prepend directory name to filename
  //b. gm to resize and write the thumbnail (call the callback)
