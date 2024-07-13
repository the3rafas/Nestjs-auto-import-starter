declare type ProjectConfigType = Partial<{
   environment: typeof process.env.NODE_ENV= process.env.NODE_ENV,
  jwtSecret: string;
  authentication: {
    strategy: 'email' | 'phone' = "email";
  };
}> & { barnd: string };
