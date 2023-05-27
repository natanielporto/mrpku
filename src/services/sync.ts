import NetInfo from "@react-native-community/netinfo";
import * as Sentry from "@sentry/react-native";
import { Asset } from "expo-asset";
import { Database } from "./database";
import { supabase } from "./supabase";

type Config = {
  version: string;
};

export class Sync {
  private isSyncNeeded(local: string, remote: string) {
    const [localMajor, localMinor, localPatch] = local.split(".").map(Number);
    const [remoteMajor, remoteMinor, remotePatch] = remote
      .split(".")
      .map(Number);

    if (localMajor < remoteMajor) return true;
    if (localMinor < remoteMinor) return true;
    if (localPatch < remotePatch) return true;

    return false;
  }

  async execute(): Promise<void> {
    try {
      const network = await NetInfo.fetch();

      if (!network.isConnected) return;

      const { data, error } = await supabase
        .from("MRPKU_config")
        .select("version")
        .single();

      if (error) return;

      const remote = data?.version;
      const config = await Database.instance.sql<Config>(
        "SELECT version FROM config"
      );

      const local = config.length === 0 ? "0.0.0" : config[0].version;

      if (!this.isSyncNeeded(local, remote)) return;

      const { data: recipes, error: recipesError } = await supabase
        .from("MRPKU_recipe")
        .select("*");

      if (recipesError) return;

      console.log("Syncing...");
      await Database.instance.sql("DELETE FROM recipe");

      await Promise.all(
        recipes?.map(async (recipe) => {
          Asset.fromModule(recipe.image as string).downloadAsync();
          Database.instance.sql(
            `INSERT INTO recipe (id, name, image, ingredients, preparation, category, extra) 
           VALUES (
            '${recipe.id}', 
            '${recipe.name}', 
            '${recipe.image || ""}',
            '${JSON.stringify(recipe.ingredients)}', 
            '${recipe.preparation}', 
            '${recipe.category}', 
            '${recipe.extra}'
          )`
          );
        })
      );

      await Database.instance.sql(
        local === "0.0.0"
          ? `INSERT INTO config (version, last_update) values ('${remote}', '${new Date().toISOString()}')`
          : `UPDATE config SET version = '${remote}' where version = '${local}'`
      );

      console.log(`Synced to version ${remote}`);
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  }
}
