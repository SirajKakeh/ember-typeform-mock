import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Component | submit-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);

    this.set('type', 'button');

    await render(hbs`<SubmitButton @type={{this.type}} />`);

    assert.equal(
      this.element.querySelector('button').getAttribute('type'),
      'button',
      'set type to incoming type'
    );

    this.set('type', 'submit');

    assert.equal(
      this.element.querySelector('button').getAttribute('type'),
      'submit',
      'updates to "submit"'
    );
  });

  test('should have default classes', async function (assert) {
    assert.expect(1);

    await render(hbs`<SubmitButton />`);

    assert.equal(
      this.element.querySelector('button').getAttribute('class'),
      'bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded ',
      'has default classes'
    );
  });

  test('should add argument classes to already defined classes', async function (assert) {
    assert.expect(1);

    this.set('class', 'text-lg');

    const outputClass =
      'bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded text-lg';

    await render(hbs`<SubmitButton @class={{this.class}} />`);

    assert.equal(
      this.element.querySelector('button').getAttribute('class'),
      outputClass,
      'adds argument classes to default classes'
    );
  });
});
