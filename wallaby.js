module.exports = function () {
  return {
    files: [
      'lib/*.js'
    ],

    tests: [
      'test/*Spec.js'
    ],

    env: {
      type: 'node',
      // if runner property is not set, then wallaby.js embedded node/io.js version is used
      // you can specifically set the node version by specifying 'node' (or any other command)
      // that resolves your default node version or just specify the path your node installation, like
      // runner: 'node'
      // or
      // runner: 'path to the desired node version'
      params: {
        runner: '--harmony --harmony_arrow_functions'
      }
    }
  };
};