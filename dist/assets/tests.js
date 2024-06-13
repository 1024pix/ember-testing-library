'use strict';

define("dummy/tests/integration/index_test", ["@1024pix/ember-testing-library", "qunit", "ember-qunit", "@ember/template-factory"], function (_emberTestingLibrary, _qunit, _emberQunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"qunit",0,"ember-qunit",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | testing-library', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('#render', function () {
      (0, _qunit.test)('it should render and return screen', async function (assert) {
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div>Hello</div>
        */
        {
          "id": "57oVwQY5",
          "block": "[[[10,0],[12],[1,\"Hello\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        assert.ok(screen.getByText('Hello'));
      });
    });
    (0, _qunit.module)('#getByTextWithHtml', function () {
      (0, _qunit.test)('should return element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div>
              Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.
        {{!----}}
        </div>
        */
        {
          "id": "37wEIz7X",
          "block": "[[[10,0],[12],[1,\"\\n      Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via \"],[10,3],[14,6,\"https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix\"],[14,0,\"link\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"cette actualité\"],[13],[1,\".\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        assert.ok((0, _emberTestingLibrary.getByTextWithHtml)('Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.'));
      });
      (0, _qunit.test)('should throw an error', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div>
              Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.
        {{!----}}
        </div>
        */
        {
          "id": "37wEIz7X",
          "block": "[[[10,0],[12],[1,\"\\n      Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via \"],[10,3],[14,6,\"https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix\"],[14,0,\"link\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"cette actualité\"],[13],[1,\".\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        try {
          (0, _emberTestingLibrary.getByTextWithHtml)(`Cette chaîne n'est pas présente ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.`);
        } catch (err) {
          assert.ok(err);
        }
      });
    });
    (0, _qunit.module)('#getAllByTextWithHtml', function () {
      (0, _qunit.test)('should return an array of element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Admin <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "w9sN6A6r",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Admin \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        const result = (0, _emberTestingLibrary.getAllByTextWithHtml)('Membre <a href="#">voir profil</a>');
        assert.equal(result.length, 2);
      });
      (0, _qunit.test)('should throw an error', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "PwMnNs7L",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        try {
          (0, _emberTestingLibrary.getAllByTextWithHtml)('Admin <a href="#">voir profil</a>');
        } catch (err) {
          assert.ok(err);
        }
      });
    });
    (0, _qunit.module)('#queryByTextWithHtml', function () {
      (0, _qunit.test)('should return element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Admin <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "w9sN6A6r",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Admin \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        assert.ok((0, _emberTestingLibrary.queryByTextWithHtml)('Admin <a href="#">voir profil</a>'));
      });
      (0, _qunit.test)('should return null if element is not present', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "PwMnNs7L",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        const result = (0, _emberTestingLibrary.queryByTextWithHtml)('Admin <a href="#">voir profil</a>');
        assert.equal(result, null);
      });
    });
    (0, _qunit.module)('#queryAllByTextWithHtml', function () {
      (0, _qunit.test)('should return element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Admin <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "w9sN6A6r",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Admin \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        assert.ok((0, _emberTestingLibrary.queryAllByTextWithHtml)('Membre <a href="#">voir profil</a>'));
      });
      (0, _qunit.test)('should return null if elements are not present', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "PwMnNs7L",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        const result = (0, _emberTestingLibrary.queryAllByTextWithHtml)('Admin <a href="#">voir profil</a>');
        assert.equal(result.length, 0);
      });
    });
    (0, _qunit.module)('#findByTextWithHtml', function () {
      (0, _qunit.test)('should return element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Admin <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "w9sN6A6r",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Admin \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        assert.ok(await (0, _emberTestingLibrary.findByTextWithHtml)('Admin <a href="#">voir profil</a>'));
      });
      (0, _qunit.test)('should return null if element is not present', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "PwMnNs7L",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        try {
          await (0, _emberTestingLibrary.findByTextWithHtml)('Admin <a href="#">voir profil</a>');
        } catch (err) {
          assert.ok(err);
        }
      });
    });
    (0, _qunit.module)('#findAllByTextWithHtml', function () {
      (0, _qunit.test)('should return element which contain string with html in it', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Admin <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "w9sN6A6r",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Admin \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        const result = await (0, _emberTestingLibrary.findAllByTextWithHtml)('Membre <a href="#">voir profil</a>');
        assert.equal(result.length, 2);
      });
      (0, _qunit.test)('should return null if element is not present', async function (assert) {
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <ul>
          <li>Membre <a href="#">voir profil</a></li>
          <li>Membre <a href="#">voir profil</a></li>
        </ul>
        */
        {
          "id": "PwMnNs7L",
          "block": "[[[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Membre \"],[10,3],[14,6,\"#\"],[12],[1,\"voir profil\"],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
          "moduleName": "/Users/yannbertrand/Developer/1024pix/ember-testing-library/dummy/tests/integration/index_test.js",
          "isStrictMode": false
        }));
        try {
          await (0, _emberTestingLibrary.findAllByTextWithHtml)('Admin <a href="#">voir profil</a>');
        } catch (err) {
          assert.ok(err);
        }
      });
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/app",0,"dummy/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
