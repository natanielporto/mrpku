import { TouchableOpacity, Image, Linking, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AdCard = () => {
  function handleSponsorSite() {
    Linking.openURL('https://www.danone.com/')
  }
  
  return (
    <TouchableOpacity
    className="flex-1 flex-row items-center justify-center rounded-3xl bg-green-50 h-[140] w-[93%] mx-auto relative shadow-sm" onPress={handleSponsorSite}>
        <Image
          source={require("../../../assets/danone-logo.webp")}
        />
   </TouchableOpacity>
  );
};



