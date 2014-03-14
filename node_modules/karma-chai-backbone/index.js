var path = require('path');

var pattern = function(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

var indexOfFile = function(files, name) {
  var file, idx = -1;

  for (var i = 0; i < files.length; i++) {
    file = files[i];
    if (new RegExp('/' + name).test(file.pattern)) {
      idx = i;
      break;
    }
  }

  return idx;
};

var framework = function(files) {
  // make sure karma-sinon-chai is installed
  idxOfKarmaSinonChai = indexOfFile(files, 'karma-sinon-chai/adapter.js');

  if (idxOfKarmaSinonChai < 0) {
    msg =
      'karma-chai-backbone requires karma-sinon-chai to be installed!\n\n' +
      'Please add sinon-chai to karma config frameworks before karma-chai-backbone\n' +
      'and run npm install karma-sinon-chai --save-dev' +
      '\n';
    throw new Error(msg);
  }

  // add chai-backbone dependencies after karma-sinon-chai
  afterKarmaSinonChai = idxOfKarmaSinonChai + 1;

  resolvedChaiBackbone = require.resolve('chai-backbone');

  files.splice(afterKarmaSinonChai, 0, pattern(path.resolve(resolvedChaiBackbone)));
  files.splice(afterKarmaSinonChai, 0, pattern(path.resolve(require.resolve('chai-backbone/node_modules/chai-changes'))));
};

framework.$inject = ['config.files'];

module.exports = {
  'framework:chai-backbone': ['factory', framework]
};
