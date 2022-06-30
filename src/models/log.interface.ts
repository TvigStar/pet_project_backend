import { Types } from 'mongoose';

export interface ILogs {
  event: any,
  userId: Types.ObjectId,
  data: any,
  createAt: string
}
