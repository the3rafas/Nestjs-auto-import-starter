declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'dev' | 'stg' | 'prod';
    jwtSecret: string;
    APP_URL: string;
    WEB_SITE_YRL: string;
    PORT: string;
  }
}
