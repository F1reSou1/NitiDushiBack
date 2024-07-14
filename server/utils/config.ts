declare global {
    interface ImportMeta {
      env: Record<string, string>;
    }
  }  
  export interface AppConfig {
    DATABASE_URL: string;
  }
  
  const env = import.meta.env as Record<string, string>;
  
  export const config: AppConfig = {
    DATABASE_URL: env.DATABASE_URL!,
  };
  