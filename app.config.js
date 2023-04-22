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
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASEANON_KEY: process.env.SUPABASEANON_KEY,
    },
  },
};