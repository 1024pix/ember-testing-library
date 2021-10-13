import {
  getRootElement,
  click,
  fillIn,
  render as renderHbs,
  visit as visitUrl,
} from '@ember/test-helpers';
import { within } from '@testing-library/dom';

/**
 * Wrap the EmberJS container with DOM testing library.
 * https://testing-library.com/docs/queries/about
 *
 * @returns The EmberJS container wrapped by the DOM testing library.
 */
export function getScreen() {
  return within(getRootElement());
}

/**
 * Visit the given URL in the EmberJS testing server and returns DOM testing library helpers.
 *
 * @param {string} url URL of the page to visit.
 * @returns DOM testing library helpers for the given page URL.
 */
export async function visit(url) {
  await visitUrl(url);
  return getScreen();
}

/**
 * Renders a EmberJS component template and returns DOM testing library helpers.
 *
 * @param {string} template EmberJS component template.
 * @returns DOM testing library helpers for the given component.
 */
export async function render(template) {
  await renderHbs(template);
  return getScreen();
}

/**
 * Click on a DOM element selected by a name.
 *
 * @param {string} name Name of the clickable DOM element.
 * @param {*} options Testing library getByRole options.
 * @returns Promise of the click.
 */
export function clickByName(name, options = {}) {
  const { getByRole } = getScreen();
  const element = getByRole(/button|link|radio|checkbox/, { ...options, name });
  return click(element);
}

/**
 * Click on a DOM element selected by a text.
 *
 * @param {string} text Text of the clickable DOM element.
 * @param {*} options Testing library getByText options.
 * @returns Promise of the click.
 */
export function clickByText(text, options) {
  const { getByText } = getScreen();
  const element = getByText(text, options);
  return click(element);
}

/**
 * Fill with the given value a DOM element selected by a label.
 *
 * @param {string} label Label linked to the control to fill.
 * @param {*} options Testing library getByLabelText options.
 * @returns Promise of the filling.
 */
export function fillByLabel(label, value, options) {
  const { getByLabelText } = getScreen();
  const element = getByLabelText(label, options);
  return fillIn(element, value);
}
