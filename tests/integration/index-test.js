import {
  render,
  getByTextWithHtml,
  getAllByTextWithHtml,
  queryByTextWithHtml,
  queryAllByTextWithHtml,
  findByTextWithHtml,
  findAllByTextWithHtml,
} from '@1024pix/ember-testing-library';
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

  module('#getByTextWithHtml', function () {
    test('should return element which contain string with html in it', async function (assert) {
      await render(hbs`<div>
      Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.
{{!----}}
</div>`);

      assert.ok(
        getByTextWithHtml(
          'Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.',
        ),
      );
    });

    test('should throw an error', async function (assert) {
      await render(hbs`<div>
      Le niveau 7 est enfin disponible ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.
{{!----}}
</div>`);

      try {
        getByTextWithHtml(
          `Cette chaîne n'est pas présente ! Vous pouvez en apprendre plus via <a href="https://pix.fr/actualites/decouvrez-le-niveau-7-des-maintenant-sur-pix" class="link" target="_blank" rel="noopener noreferrer">cette actualité</a>.`,
        );
      } catch (err) {
        assert.ok(err);
      }
    });
  });

  module('#getAllByTextWithHtml', function () {
    test('should return an array of element which contain string with html in it', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Admin <a href="#">voir profil</a></li>
</ul>`);

      const result = getAllByTextWithHtml('Membre <a href="#">voir profil</a>');
      assert.strictEqual(result.length, 2);
    });

    test('should throw an error', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
</ul>`);

      try {
        getAllByTextWithHtml('Admin <a href="#">voir profil</a>');
      } catch (err) {
        assert.ok(err);
      }
    });
  });

  module('#queryByTextWithHtml', function () {
    test('should return element which contain string with html in it', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Admin <a href="#">voir profil</a></li>
</ul>`);

      assert.ok(queryByTextWithHtml('Admin <a href="#">voir profil</a>'));
    });

    test('should return null if element is not present', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
</ul>`);

      const result = queryByTextWithHtml('Admin <a href="#">voir profil</a>');
      assert.strictEqual(result, null);
    });
  });

  module('#queryAllByTextWithHtml', function () {
    test('should return element which contain string with html in it', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Admin <a href="#">voir profil</a></li>
</ul>`);

      assert.ok(queryAllByTextWithHtml('Membre <a href="#">voir profil</a>'));
    });

    test('should return null if elements are not present', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
</ul>`);

      const result = queryAllByTextWithHtml(
        'Admin <a href="#">voir profil</a>',
      );
      assert.strictEqual(result.length, 0);
    });
  });

  module('#findByTextWithHtml', function () {
    test('should return element which contain string with html in it', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Admin <a href="#">voir profil</a></li>
</ul>`);

      assert.ok(await findByTextWithHtml('Admin <a href="#">voir profil</a>'));
    });

    test('should return null if element is not present', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
</ul>`);

      try {
        await findByTextWithHtml('Admin <a href="#">voir profil</a>');
      } catch (err) {
        assert.ok(err);
      }
    });
  });

  module('#findAllByTextWithHtml', function () {
    test('should return element which contain string with html in it', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Admin <a href="#">voir profil</a></li>
</ul>`);
      const result = await findAllByTextWithHtml(
        'Membre <a href="#">voir profil</a>',
      );
      assert.strictEqual(result.length, 2);
    });

    test('should return null if element is not present', async function (assert) {
      await render(hbs`<ul>
  <li>Membre <a href="#">voir profil</a></li>
  <li>Membre <a href="#">voir profil</a></li>
</ul>`);

      try {
        await findAllByTextWithHtml('Admin <a href="#">voir profil</a>');
      } catch (err) {
        assert.ok(err);
      }
    });
  });
});
