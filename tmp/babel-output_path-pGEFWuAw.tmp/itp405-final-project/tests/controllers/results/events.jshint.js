define('itp405-final-project/tests/controllers/results/events.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/results/events.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/results/events.js should pass jshint.\ncontrollers/results/events.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/results/events.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});