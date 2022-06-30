import { Document, Model, model, Schema } from 'mongoose';
import { TableNamesEnum } from '../../constants';

import { ILogs } from '../../models';

export type LogType = ILogs & Document

export const LogSchema: Schema = new Schema<ILogs>({
  event: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  data: Schema.Types.Mixed
}, {
  timestamps: true
});

export const LogModel: Model<LogType> = model<LogType>(TableNamesEnum.LOGS, LogSchema);
