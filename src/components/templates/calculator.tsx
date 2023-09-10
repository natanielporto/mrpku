import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export function CalculatorScreen() {
  const items = ["Leucina", "Tirosina", "Fenilalanina", "Metiotina"];
  const [protein, setProtein] = useState<string>("");
  const [aminoacid, setAminoacid] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string | undefined>();

  const onChangeProtein = (value: string) => {
    setProtein(value);
    if (!isNaN(+value) && value.trim() !== "") {
      if (selectedItem === "Leucina")
        setAminoacid(String((+value * 1.5).toFixed(2)));
      if (selectedItem === "Tirosina")
        setAminoacid(String((+value * 0.7).toFixed(2)));
      if (selectedItem === "Fenilalanina")
        setAminoacid(String((+value * 0.8).toFixed(2)));
      if (selectedItem === "Metiotina")
        setAminoacid(String((+value * 0.4).toFixed(2)));
    }
    if (value.trim() === "") {
      setAminoacid("");
    }
  };
  const onChangeAminoacid = (value: string) => {
    setAminoacid(value);
    if (!isNaN(+value) && value.trim() !== "") {
      if (selectedItem === "Leucina")
        setProtein(String((+value / 1.5).toFixed(2)));
      if (selectedItem === "Tirosina")
        setProtein(String((+value / 0.7).toFixed(2)));
      if (selectedItem === "Fenilalanina")
        setProtein(String((+value / 0.8).toFixed(2)));
      if (selectedItem === "Metiotina")
        setProtein(String((+value / 0.4).toFixed(2)));
    }
    if (value.trim() === "") {
      setProtein("");
    }
  };

  return (
    <TemplateWrapper>
      <View className="flex flex-row mx-8 flex-wrap gap-y-4 justify-between my-10">
        {items.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => [
              setSelectedItem(item),
              setProtein(""),
              setAminoacid(""),
            ]}
            className={`flex items-center p-4 w-36 rounded-lg ${
              selectedItem === item ? "bg-[#0C6941]" : "bg-green-50"
            } `}
          >
            <Text
              className={`font-bold ${
                selectedItem === item ? "text-white" : ""
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="flex w-full justify-center">
        <View className="bg-green-50 flex justify-center items-center h-32 my-4 mx-8 rounded-2xl">
          <Text className="text-xl">Proteína/g</Text>
          <TextInput
            onPressIn={() => [setProtein(""), setAminoacid("")]}
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
            onPressIn={() => [setProtein(""), setAminoacid("")]}
            onChangeText={(value) => onChangeAminoacid(value)}
            value={String(aminoacid)}
            keyboardType="numeric"
            className="h-10 m-3 border-2 p-2 w-64 rounded-2xl text-center"
          />
          <Text className="text-xl">
            {selectedItem !== undefined
              ? `${selectedItem}/mg`
              : "Selecione um aminoácido"}
          </Text>
        </View>
      </View>
    </TemplateWrapper>
  );
}
