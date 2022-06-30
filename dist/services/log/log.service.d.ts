import { ILogs } from '../../models';
declare class LogService {
    createLog(log: Partial<ILogs>): Promise<ILogs>;
}
export declare const logService: LogService;
export {};
