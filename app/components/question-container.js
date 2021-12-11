import Component from '@glimmer/component';

export default class QuestionContainerComponent extends Component {
  constructor() {
    super(...arguments);
  }

  /**
   * @returns {import('../helpers/data').TextQuestion | import('../helpers/data').MultipleChoiceQuestion}
   */
  get question() {
    return this.args.question;
  }

  get isTextQuestion() {
    return this.question.question_type === 'text';
  }

  get questionIndexId() {
    return 'question-' + this.args.index;
  }

  get submitText() {
    return this.args.index === this.args.numberOfQuestions - 1
      ? 'Submit'
      : 'Next';
  }
}
