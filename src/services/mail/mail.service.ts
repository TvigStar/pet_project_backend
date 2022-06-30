import * as EmailTemplates from 'email-templates';
import * as nodeMailer from 'nodemailer';
import * as path from 'path';

import { config } from '../../config';
import { ActionEnum, ResponseStatusCodesEnum } from '../../constants';
import { htmlTemplates } from '../../email-templates';
import { ErrorHandler } from '../../errors';

if (
  !config.ROOT_EMAIL
  || !config.ROOT_EMAIL_PASSWORD
) {
  throw Error('Root email credentials are not defined!');
}

const contextExtantion = {
  frontendUrl: config.FRONTEND_URL
};

const transporter = nodeMailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'yazmin.hintz45@ethereal.email',
    pass: 'De6pdcyPpMRjPkFAdw'
  }
});

const emailTemplate = new EmailTemplates({
  message: {},
  views: {
    root: path.resolve(__dirname, '../../', 'email-templates')
  }
});

export class MailService {
  async sendEmail(email: string, action: ActionEnum, context: any = {}): Promise<void> {
    const templateInfo = htmlTemplates[action];

    if (!templateInfo) {
      throw new ErrorHandler(ResponseStatusCodesEnum.SERVER,'Template not found');
    }

    Object.assign(context, contextExtantion);

    const html = await emailTemplate.render(templateInfo.templateFileName, context);

    await transporter.sendMail({
      from: `NOREPLY <${config.ROOT_EMAIL}>`,
      to: email,
      subject: templateInfo.subject,
      html
    });
  }
}

export const emailService = new MailService();

