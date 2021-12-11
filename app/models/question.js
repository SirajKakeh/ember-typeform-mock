import Model, { attr, belongsTo } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr question_type;
  @attr identifier;
  @attr headline;
  @attr description;
  @attr required;
  @attr jumps;
  @attr multiple; /** only for multi-choice questions */
  @attr choices; /** only for multi-choice questions */
  @attr multiline; /** only for text questions */

  @belongsTo('questionnaire') questionnaire;
}
