import Model, { attr, hasMany } from '@ember-data/model';

export default class QuestionnaireModel extends Model {
  @attr description;
  @attr category_name_hyphenated;
  @attr id;
  @attr identifier;
  @attr name;

  @hasMany('question') questions;
}
