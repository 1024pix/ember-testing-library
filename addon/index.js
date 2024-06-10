import {
  getRootElement,
  click,
  fillIn,
  render as renderHbs,
  visit as visitUrl,
} from '@ember/test-helpers';
import { within as withinTL } from '@testing-library/dom/dist/@testing-library/dom.umd.js';

export * from '@testing-library/dom/dist/@testing-library/dom.umd.js';

/**
 * Wrap the EmberJS container with DOM testing library.
 * https://testing-library.com/docs/queries/about
 *
 * @returns The EmberJS container wrapped by the DOM testing library.
 */
export function getScreen() {
  return withinTL(getRootElement());
}

/**
 * Wrap the Testing-Library within function.
 *
 * @param element: DOM tree.
 * @returns The inner DOM of the provided element.
 */
export function within(element) {
  return withinTL(element);
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
  const { queryByRole } = getScreen();
  const buttonElement = queryByRole('button', { ...options, name });
  if (buttonElement !== null) {
    return click(buttonElement);
  }

  const linkElement = queryByRole('link', { ...options, name });
  if (linkElement !== null) {
    return click(linkElement);
  }

  const radioElement = queryByRole('radio', { ...options, name });
  if (radioElement !== null) {
    return click(radioElement);
  }
  const checkboxElement = queryByRole('checkbox', { ...options, name });
  if (checkboxElement !== null) {
    return click(checkboxElement);
  }
  const comboboxElement = queryByRole('combobox', { ...options, name });
  if (comboboxElement !== null) {
    return click(comboboxElement);
  }

  throw new Error(`Element with name "${name}" could not be found`);
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

/**
 * Select an option in a dropdown with DOM element selected by a label.
 *
 * @param {string} label Label linked to the dropdown.
 * @param {string} option Option value.
 * @param {*} options Testing library getByRole options.
 * @returns Promise of the filling.
 */
export function selectByLabelAndOption(label, option, options) {
  const { getByRole } = getScreen();
  const element = getByRole('combobox', { ...options, name: label });
  return fillIn(element, option);
}

/**
 * Select a radio button part of a radio group identified by its label .
 *
 * @param {string} label Label linked to the radio group.
 * @param {string} option The radio button label.
 * @param {*} options Testing library getByRole options.
 * @returns Promise of the filling.
 */
export function selectOptionInRadioGroup(label, option, options) {
  const { getByRole } = getScreen();
  const parent = getByRole('radiogroup', { ...options, name: label });
  const element = withinTL(parent).getByRole('radio', { name: option });
  return click(element);
}

function _cleanHtml(html) {
  return html.replace('<!---->', '').trim();
}

/**
 * Return an HTML element matching the string containing HTML passed as param
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns HTMLElement.
 */
export function getByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { getByText } = getScreen();
  return getByText(matcherFunction);
}

/**
 * Return an array of HTML element matching the string containing HTML passed as param
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns Array<HTMLElement>.
 */
export function getAllByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { getAllByText } = getScreen();
  return getAllByText(matcherFunction);
}

/**
 * Return HTML element matching the string containing HTML passed as param or nothing
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns HTMLElement.
 */
export function queryByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { queryByText } = getScreen();
  return queryByText(matcherFunction);
}

/**
 * Return an array of HTML element matching the string containing HTML passed as param or nothing
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns Array<HTMLElement>.
 */
export function queryAllByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { queryAllByText } = getScreen();
  return queryAllByText(matcherFunction);
}

/**
 * Return a Promise of HTML element matching the string containing HTML passed as param
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns Promise(HTMLElement).
 */
export function findByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { findByText } = getScreen();
  return findByText(matcherFunction);
}

/**
 * Return a Promise of HTML element array matching the string containing HTML passed as param
 *
 * @param {string} string containing HTML to look for in the DOM.
 * @param {*} options Testing library getByText options.
 * @returns Promise(Array<HTMLElement>).
 */
export function findAllByTextWithHtml(html) {
  const matcherFunction = (_, element) => {
    return _cleanHtml(element.innerHTML) === html;
  };
  const { findAllByText } = getScreen();
  return findAllByText(matcherFunction);
}
