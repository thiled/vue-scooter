export default (currentPath, relativePath) => {
  // relativePath
  // 去掉./
  relativePath = relativePath.replace(/^\.\//, '');
  // 拆分'../'
  let match = relativePath.match(/\.\.\//g);
  let count = (match && match.length) || 0;
  // 去掉相对路径后的剩余路径
  let cleanPath = relativePath.replace(/\.\.\//g, '');
  // currentPath
  // 拆分'.+/'
  let currentPathArr = currentPath.match(/.+?\/+/g);
  // 移除相对路径层级
  currentPathArr.splice(currentPathArr.length - count, count);
  return currentPathArr.join('') + cleanPath;
};
