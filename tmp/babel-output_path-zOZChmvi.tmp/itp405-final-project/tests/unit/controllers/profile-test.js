define('itp405-final-project/tests/unit/controllers/profile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:profile', 'Unit | Controller | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('set current action should set tabs to current events', function (assert) {
    assert.expect(3);

    // get the controller instance
    var ctrl = this.subject();

    ctrl.send('setCurrent');

    assert.equal(ctrl.get('current'), true);
    assert.equal(ctrl.get('created'), false);
    assert.equal(ctrl.get('past'), false);
  });
});