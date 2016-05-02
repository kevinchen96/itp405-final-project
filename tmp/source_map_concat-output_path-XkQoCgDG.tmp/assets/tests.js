define('itp405-final-project/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('itp405-final-project/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'itp405-final-project/tests/helpers/start-app', 'itp405-final-project/tests/helpers/destroy-app'], function (exports, _qunit, _itp405FinalProjectTestsHelpersStartApp, _itp405FinalProjectTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp405FinalProjectTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _itp405FinalProjectTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('itp405-final-project/tests/helpers/resolver', ['exports', 'itp405-final-project/resolver', 'itp405-final-project/config/environment'], function (exports, _itp405FinalProjectResolver, _itp405FinalProjectConfigEnvironment) {

  var resolver = _itp405FinalProjectResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp405FinalProjectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405FinalProjectConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('itp405-final-project/tests/helpers/start-app', ['exports', 'ember', 'itp405-final-project/app', 'itp405-final-project/config/environment'], function (exports, _ember, _itp405FinalProjectApp, _itp405FinalProjectConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp405FinalProjectConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp405FinalProjectApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('itp405-final-project/tests/test-helper', ['exports', 'itp405-final-project/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp405FinalProjectTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp405FinalProjectTestsHelpersResolver['default']);
});
define('itp405-final-project/tests/unit/controllers/create-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:create-event', 'Unit | Controller | create event', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)("date correct on create event", function (assert) {
    assert.expect(2);

    // get the controller instance
    var ctrl = this.subject();
    var date = moment(moment()).add('days', 1).format('YYYY-MM-DD');
    assert.equal(ctrl.createEventTest(), date);

    date = moment("2016-01-01");
    ctrl.set('mydate', date);
    assert.equal(ctrl.createEventTest(), "2016-01-01");
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('reformat time on start time change', function (assert) {
    assert.expect(2);

    // get the controller instance
    var ctrl = this.subject();
    var hacktime = "2015-01-01 23:30";
    var x = moment(hacktime);
    ctrl.set('startTime', x);
    ctrl.send('timeChanged');
    assert.equal(ctrl.get('time'), "23:30");

    hacktime = "2015-01-01 13:30";
    x = moment(hacktime);
    ctrl.set('startTime', x);
    ctrl.send('timeChanged');
    assert.equal(ctrl.get('time'), "13:30");
  });
});
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
define('itp405-final-project/tests/unit/controllers/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:register', 'Unit | Controller | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('should update emailValid and emailInvalid on email change', function (assert) {
    assert.expect(4);

    // get the controller instance
    var ctrl = this.subject();

    ctrl.set('email', "notavalidemail.com");
    // check the properties before the action is triggered
    assert.equal(ctrl.get('emailValid'), false);
    assert.equal(ctrl.get('emailInvalid'), true);

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    ctrl.set('email', "validemail@email.com");

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(ctrl.get('emailValid'), true);
    assert.equal(ctrl.get('emailInvalid'), false);
  });
});
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
/* jshint ignore:start */

require('itp405-final-project/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map