define('itp405-final-project/tests/unit/controllers/results/events-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:results/events', 'Unit | Controller | results/events', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)("should split queries", function (assert) {
    assert.expect(1);

    // get the controller instance
    var ctrl = this.subject();

    ctrl.set('q', "my name i s kevin");

    var x = ['my', 'name', 'i', 's', 'kevin'];
    assert.deepEqual(ctrl.get('queries'), x);
  });
});