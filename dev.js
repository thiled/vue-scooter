const fs = require('fs');
const exec = require('child_process').exec;

let lastChangeTime;
fs.watch(
  './src/',
  {
    // recursive: true,
  },
  (event, filename) => {
    if (lastChangeTime) {
      if (+new Date() - +lastChangeTime < 1000) {
        return;
      }
    }
    lastChangeTime = new Date();
    console.warn(new Date(), 'npm run dev-build..');
    runBuild();
  }
);

function runBuild() {
  const cmdStr = 'npm run dev:build';
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
runBuild();
