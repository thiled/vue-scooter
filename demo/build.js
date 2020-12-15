const path = require('path');
const buildTool = require('./build-tool');
let buildSrc = path.resolve(__dirname, './src/');
let buildTarget = path.resolve(__dirname, './dist/');
buildTool.run(buildSrc, buildTarget);
