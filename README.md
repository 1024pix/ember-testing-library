@1024pix/ember-testing-library
==============================================================================

The Ember Testing Library is a very lightweight solution for testing Ember components. It provides light utility functions on top of Ember built-in helpers, in a way that encourages better testing practices. Its primary guiding principle is:

- The more your tests resemble the way your software is used, the more confidence they can give you.

For more info, please visit [testing library guiding principles](
https://testing-library.com/docs/guiding-principles).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install @1024pix/ember-testing-library
```


Usage
------------------------------------------------------------------------------

Ember testing library gives access to dom testing library queries in an Ember app. For more info on dom testing library queries, follow [Testing library doc](https://testing-library.com/docs/dom-testing-library/api/).

The current API methods that can be used are as follows:

- getScreen
- within
- visit
- render
- clickByName
- clickByText
- fillByLabel
- selectByLabelAndOption
- selectOptionInRadioGroup

Please note that Ember Testing Library does not include the userEvent package, and that you should therefore use Ember built-in test helpers to interact with components and/or DOM nodes in integration/acceptance tests.

### Acceptance test example:
```js
import { visit } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';

test('it should disable the button when clicked', async function (assert) {
  // given
  const screen = await visit('/home');

  // when
  const button = screen.getByRole('button', {name: 'Send message'});
  await click(button);

  // then
  assert.dom(button).isDisabled();
});
```

### Integration test example:
```js
import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';

test('it should disable the button when clicked', async function (assert) {
  // given
  const screen = await render(hbs`<LoginForm />`);

  // when
  const button = screen.getByRole('button', {name: 'Login'});
  await click(button);

  // then
  assert.dom(button).isDisabled();
});
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
