import {LogModel} from '../../database';
import {ILogs} from '../../models';

class LogService {
  createLog(log: Partial<ILogs>): Promise<ILogs> {
    const logToCreate = new LogModel(log);

    return logToCreate.save();
  }
}

export const logService = new LogService();
