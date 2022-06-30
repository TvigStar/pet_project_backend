import { ActionEnum } from '../../constants';
export declare class MailService {
    sendEmail(email: string, action: ActionEnum, context?: any): Promise<void>;
}
export declare const emailService: MailService;
