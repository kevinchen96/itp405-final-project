QUnit.module('JSHint - controllers/admin/edit/events.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/admin/edit/events.js should pass jshint.\ncontrollers/admin/edit/events.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/edit/events.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/edit/events.js: line 15, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/edit/events.js: line 19, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/edit/events.js: line 57, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
