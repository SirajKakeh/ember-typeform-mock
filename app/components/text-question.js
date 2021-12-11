import Component from '@glimmer/component';
// import { action } from '@ember/object';

export default class TextQuestionComponent extends Component {
  constructor() {
    super(...arguments);
  }

  /**
   * @returns {import('../helpers/data').TextQuestion}
   */
  get question() {
    return this.args.question;
  }

  get questionNumber() {
    return this.args.index + 1;
  }
}
