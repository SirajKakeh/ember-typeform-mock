import Component from '@glimmer/component';

export default class MultiSelectQuestionComponent extends Component {
  constructor() {
    super(...arguments);
  }

  /**
   * @returns {import('../helpers/data').MultipleChoiceQuestion}
   */
  get question() {
    return this.args.question;
  }

  get questionNumber() {
    return this.args.index + 1;
  }
}
