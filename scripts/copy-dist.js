const copydir = require('copy-dir');

copydir(`./dist`, `./`, function(err) {
  if(err){
    console.log(`Dist copy: `, err);
  } else {
    console.log(`Dist copy: OK!`);
  }
});
