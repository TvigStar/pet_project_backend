import { IAccessToken, IUser } from '../../models';
declare class AuthService {
    createTokenPair(tokenObject: Partial<IAccessToken>): Promise<IAccessToken>;
    findUserByToken(findObject: {
        accessToken?: string;
        refreshToken?: string;
    }): Promise<IUser | null>;
    findRefreshToken(refreshToken?: string): Promise<IAccessToken | null>;
    removeToken(removeObject: {
        accessToken?: string;
        refreshToken?: string;
    }): Promise<IAccessToken | null>;
}
export declare const authService: AuthService;
export {};
