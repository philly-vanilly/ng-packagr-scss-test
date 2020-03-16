module.exports = {
  name: 'dummy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dummy',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
