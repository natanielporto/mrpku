declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  }
}
