import { SafeAreaView } from "react-native-safe-area-context";
import { Recipe } from "../components/recipe";

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Recipe />
    </SafeAreaView>
  );
}
