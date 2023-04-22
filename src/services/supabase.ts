import "react-native-url-polyfill/auto";
import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = Constants.expoConfig?.extra?.SUPABASE_URL;
const SUPASEANON_KEY = Constants.expoConfig?.extra?.SUPABASEANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPASEANON_KEY);
