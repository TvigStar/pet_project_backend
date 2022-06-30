import { ActionEnum } from '../constants';

export const htmlTemplates: {[index: string]: {subject: string, templateFileName: string}} = {
  [ActionEnum.USER_REGISTER]: {
    subject: 'Welcome',
    templateFileName: 'userWelcome'
  },
  [ActionEnum.FORGOT_PASSWORD]: {
    subject: 'wuups u lost your password',
    templateFileName: 'forgotPassword'
  }
};
