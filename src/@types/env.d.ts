declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
  }
}
