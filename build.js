const path = require('path');
const buildTool = require('./build-tool');
let buildSrc = path.resolve(__dirname, './demo/');
let buildTarget = path.resolve(__dirname, './dist/');
buildTool.run(buildSrc, buildTarget);
