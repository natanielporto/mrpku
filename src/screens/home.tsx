import { SafeAreaView } from "react-native-safe-area-context";
import { Recipe } from "../components/recipe";

export function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Recipe />
    </SafeAreaView>
  );
}
