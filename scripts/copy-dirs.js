const copydir = require('copy-dir');

const DIST_FOLDER = 'dist';
const NODE_MODULES = 'node_modules';

const DIRS = [
  '@angular/animations',
  '@angular/common',
  '@angular/core',
  '@angular/router',
  '@angular/http',
  '@angular/forms',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  'reflect-metadata',
  'zone.js',
  'core-js',
  'rxjs'
];

DIRS.forEach(dirPath => {
  copydir(`./${NODE_MODULES}/${dirPath}`, `./${DIST_FOLDER}/${NODE_MODULES}/${dirPath}`, function(err) {
    const path = `./${DIST_FOLDER}/${NODE_MODULES}/${dirPath}`;
    if(err){
      console.log(`${path}: `, err);
    } else {
      console.log(`${path}: OK!`);
    }
  });
});
