import Route from '@ember/routing/route';
import { questionnaireData } from '../helpers/data';

export default class QuestionnaireRoute extends Route {
  model() {
    return questionnaireData;
  }
}
