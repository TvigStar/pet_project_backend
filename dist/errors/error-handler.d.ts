export declare class ErrorHandler extends Error {
    name: string;
    status: number;
    message: string;
    code?: number;
    constructor(status: number, message: string, code?: number);
}
