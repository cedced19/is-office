'use strict';

var isOffice = require('./');
var assert = require('assert');

describe('isOffice', function () {

  it('should say docx is an Office file', function () {
    assert.equal(isOffice('application/vnd.openxmlformats-officedocument.wordprocessingml.document'), true, 'should be true');
  });

});
