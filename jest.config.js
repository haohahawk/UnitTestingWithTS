// jest.config.js
// const { defaults: tsjPreset } = require('ts-jest/presets');
// const { jsWithTs: tsjPreset } = require('ts-jest/presets');
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  // transform: {
  //   ...tsjPreset.transform,
  // },
  testEnvironment: 'node',
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */ )
};
