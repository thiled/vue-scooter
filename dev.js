const fs = require('fs');
let lastChangeTime;
fs.watch(
  './src/',
  {
    recursive: true,
  },
  (event, filename) => {
    if (lastChangeTime) {
      if (+new Date() - +lastChangeTime < 1000) {
        return;
      }
    }
    lastChangeTime = new Date();
    console.warn(new Date(), 'npm run build..');
    const exec = require('child_process').exec;
    const cmdStr = 'npm run build';
    exec(cmdStr, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        console.warn(new Date(), 'build fail');
      } else {
        console.log(stdout);
        console.warn(new Date(), 'build success');
      }
    });
  }
);
