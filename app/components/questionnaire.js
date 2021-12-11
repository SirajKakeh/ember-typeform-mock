import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class QuestionnaireComponent extends Component {
  heightOffset = 0;
  touchStartScreenY = 0;
  touchThreshold = 100;
  @tracked activeQuestionIndex = -1;

  constructor() {
    super(...arguments);

    document.addEventListener('keyup', this.handleArrowScrolling.bind(this));
    document.addEventListener('touchstart', this.handleTouchStart.bind(this));
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  handleArrowScrolling(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      this.scrollToQuestion(event.key === 'ArrowDown' ? 'next' : 'prev');
    }
  }

  /**
   * @param {'next' | 'previous'} eventName
   */
  scrollToQuestion(eventName) {
    if (
      (eventName === 'next' && this.isLastQuestion) ||
      (eventName === 'prev' && this.isFirstQuestion)
    ) {
      return;
    }
    const questionnaire = document.getElementById('questionnaire');
    this.heightOffset +=
      eventName === 'next'
        ? -document.body.offsetHeight
        : document.body.offsetHeight;

    questionnaire.style.transform = `translateY(${this.heightOffset}px)`;
    this.activeQuestionIndex += eventName === 'next' ? 1 : -1;
  }

  willDestroy() {
    super.willDestroy();

    document.removeEventListener('keyup', this.handleArrowScrolling);
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }

  /**
   *
   * @param {TouchEvent} event
   */
  handleTouchStart(event) {
    this.touchStartScreenY = event.touches[0].screenY;
  }

  /**
   *
   * @param {TouchEvent} event
   */
  handleTouchEnd(event) {
    const { screenY } = event.changedTouches[0];

    if (Math.abs(screenY - this.touchStartScreenY) < this.touchThreshold)
      return;

    if (screenY > this.touchStartScreenY) {
      /** swipe up */ this.scrollToQuestion('prev');
    } else {
      /** swipe down */
      this.scrollToQuestion('next');
    }
  }

  @action
  beginForm() {
    this.activeQuestionIndex = 0;
  }

  handleSubmit(question, questionIndex) {
    if (questionIndex < this.numberOfQuestions) {
      this.scrollToQuestion('next');
    } else {
      // submit logic here
    }
  }

  get questions() {
    return this.args.questionnaire.questions;
  }

  get isFirstQuestion() {
    return this.activeQuestionIndex === 0;
  }

  get isLastQuestion() {
    return this.activeQuestionIndex === this.questions.length - 1;
  }

  get isStartPage() {
    return this.activeQuestionIndex === -1;
  }

  get numberOfQuestions() {
    return this.questions.length;
  }
}
