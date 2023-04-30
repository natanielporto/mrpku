import "react-native-url-polyfill/auto";
import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../@types/supabase";

const SUPABASE_URL = Constants.expoConfig?.extra?.SUPABASE_URL;
const SUPABASE_ANON_KEY = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
