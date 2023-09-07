import { Text, TextInput, View } from "react-native";
import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export function CalculatorScreen() {
  const [protein, setProtein] = useState<string>("");
  const [fenil, setFenil] = useState<string>("");

  const onChangeProtein = (value: string) => {
    setProtein(value);
    if (!isNaN(+value) && value.trim() !== "") {
      setFenil(String(+value * 50));
    }
    if (value.trim() === "") {
      setFenil("");
    }
  };
  const onChangeFenil = (value: string) => {
    setFenil(value);
    if (!isNaN(+value) && value.trim() !== "") {
      setProtein(String(+value / 50));
    }
    if (value.trim() === "") {
      setProtein("");
    }
  };

  return (
    <TemplateWrapper>
      <View className="flex w-full h-full  justify-center">
        <View className="bg-green-50 flex justify-center items-center h-32 my-4 mx-8 rounded-2xl">
          <Text className="text-xl">Proteína/g</Text>
          <TextInput
            onPressIn={() => [setProtein(""), setFenil("")]}
            onChangeText={(value) => onChangeProtein(value)}
            value={String(protein)}
            keyboardType="numeric"
            className="h-10 m-3 border-2 p-2 w-64 rounded-2xl text-center"
          />
        </View>
        <View className="flex justify-center items-center h-15 my-5">
          <AntDesign name="sync" size={60} />
        </View>
        <View className="bg-green-50 flex justify-center items-center h-32 my-4 mx-8 rounded-2xl">
          <TextInput
            onPressIn={() => [setProtein(""), setFenil("")]}
            onChangeText={(value) => onChangeFenil(value)}
            value={String(fenil)}
            keyboardType="numeric"
            className="h-10 m-3 border-2 p-2 w-64 rounded-2xl text-center"
          />
          <Text className="text-xl">Fenilalanina/mg</Text>
        </View>
      </View>
    </TemplateWrapper>
  );
}
