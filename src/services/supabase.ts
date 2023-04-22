import "react-native-url-polyfill/auto";
import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../@types/supabase";

const SUPABASE_URL = Constants.expoConfig?.extra?.SUPABASE_URL;
const SUPASEANON_KEY = Constants.expoConfig?.extra?.SUPABASEANON_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPASEANON_KEY);
