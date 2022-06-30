import { Types } from 'mongoose';
export interface IProduct {
    _id: Types.ObjectId;
    title: string;
    description: string;
    type: string;
    category: string;
    price: number;
    hasDiscount: boolean;
    oldPrice?: number;
    tags?: [string];
    photos?: [string];
    docs?: [string];
    stockCount: number;
    userId: Types.ObjectId;
    createdAt: any;
    updatedAt: string;
}
