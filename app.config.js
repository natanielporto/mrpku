import "dotenv/config";

export default {
  expo: {
    name: "mrpku",
    slug: "mrpku",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.mrpku",
    },
    android: {
      package: "com.mrpku",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      SENTRY_DSN: process.env.SENTRY_DSN,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
      eas: {
        projectId: "d4a14fc6-ac46-4f33-b182-9ad819913afd",
      },
    },
    plugins: ["sentry-expo"],
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
          },
        },
      ],
    },

    updates: {
      url: "https://u.expo.dev/d4a14fc6-ac46-4f33-b182-9ad819913afd",
    },
    runtimeVersion: "1.0.0",
  },
};
