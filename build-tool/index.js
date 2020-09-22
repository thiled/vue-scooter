const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const createHash = require('crypto').createHash;
const filewalker = require('filewalker');

function copyDir(src, dist) {
  childProcess.spawnSync('cp', ['-r', src + '/*', dist]);
}
//
let started = Date.now();

let fileChangeDict = {};

/**
 *  generate file names with hash
 * @param {*} targetDir
 */
function generateHashPath(targetDir) {
  return new Promise((resolve, reject) => {
    let options = {
      maxPending: 10, // throttle handles
    };
    filewalker(targetDir, options)
      .on('stream', function (rs, p, s, fullPath) {
        let hash = createHash('md5');
        rs.on('data', function (data) {
          hash.update(data);
        });
        rs.on('end', function (data) {
          let hashValue = hash.digest('hex');
          let originPath = path.resolve(targetDir, p);
          let extname = path.extname(originPath);
          let hashPath = path.resolve(
            path.dirname(originPath),
            path.basename(originPath, extname) + '-' + hashValue + extname
          );
          // fs.renameSync(originPath, hashPath);
          fileChangeDict[originPath] = hashPath;
        });
      })
      .on('error', function (err) {
        console.error(err);
      })
      .on('done', function () {
        resolve();
      })
      .walk();
  });
}

function correctRelativePath(targetDir) {
  for (let filePath in fileChangeDict) {
    if (path.extname(filePath).match(/js|html|vue|css/)) {
      let fileStr = fs.readFileSync(filePath, { encoding: 'utf-8' });
      fileStr = fileStr.replace(/(?<=['"])[^'"]*?\.[\w-]+(?=['"])/g, ($0) => {
        let tmpPath = path.resolve(path.dirname(filePath), $0);
        let matchPath = fileChangeDict[tmpPath];
        if (matchPath) {
          return path.dirname($0) + '/' + path.basename(matchPath);
        } else {
          return $0;
        }
      });
      fs.writeFileSync(filePath, fileStr);
    }
    if (filePath !== path.resolve(targetDir, 'index.html')) {
      // rename except dist/index.html
      fs.renameSync(filePath, fileChangeDict[filePath]);
    }
  }
}
exports.run = async (src, target) => {
  try {
    if (fs.existsSync(target)) {
      childProcess.spawnSync('rm', ['-rf', target]);
    }
    fs.mkdirSync(target);
  } catch (err) {
    console.log(err);
  }
  // copy src files to target dir
  copyDir(src, target);
  await generateHashPath(target);
  correctRelativePath(target);
  let duration = Date.now() - started;
  console.log('%d ms, done!', duration);
};
