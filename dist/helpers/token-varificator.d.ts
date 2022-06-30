import { VerifyErrors } from 'jsonwebtoken';
import { ActionEnum } from '../constants';
export declare const tokenVerification: (action: ActionEnum, token: string) => Promise<VerifyErrors | null>;
