import { render } from '@pix/ember-testing-library';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | testing-library', function (hooks) {
  setupRenderingTest(hooks);

  module('#render', function () {
    test('it should render and return screen', async function (assert) {
      const screen = await render(hbs`<div>Hello</div>`);
      assert.ok(screen.getByText('Hello'));
    });
  });
});
