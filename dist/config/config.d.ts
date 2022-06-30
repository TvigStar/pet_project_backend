export declare const config: {
    PORT: string | number;
    HOST: string;
    FRONTEND_URL: string;
    ALLOWED_ORIGIN: string;
    CRON_JOB_PERIOD: string;
    JWT_SECRET: string;
    JWT_SECRET_ADMIN: string;
    ACCESS_TOKEN_LIFETIME: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_SECRET_ADMIN: string;
    REFRESH_TOKEN_LIFETIME: string;
    JWT_CONFIRM_EMAIL_SECRET: string;
    JWT_CONFIRM_EMAIL_LIFETIME: string;
    JWT_PASS_RESET_SECRET: string;
    JWT_PASS_RESET_LIFETIME: string;
    serverRateLimits: {
        period: number;
        maxRequests: number;
    };
    MONGODB_URL: string;
    ROOT_EMAIL: string;
    ROOT_EMAIL_PASSWORD: string;
    ROOT_EMAIL_SERVICE: string;
    SUPPORT_EMAIL: string;
};
