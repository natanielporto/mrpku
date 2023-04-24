import React, { FC } from "react";
import { View, Text, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  data: string[];
  iconName: keyof typeof Feather.glyphMap;
  iconSize?: number;
  iconColor?: string;
  listTitle?: string;
  lessTopMargin?: boolean;
}

export const List: FC<Props> = ({
  data,
  listTitle,
  iconName,
  iconSize = 14,
  iconColor = "green",
  lessTopMargin,
}) => {
  const marginClasses = lessTopMargin ? "mt-2 mr-three" : "mt-three mr-three";

  return (
    <View>
      {listTitle ? (
        <Text className="text-base font-bold mb-ten mt-10">{listTitle}</Text>
      ) : (
        <Text />
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="flex flex-row max-w-ninetyFive">
            <View className={marginClasses}>
              <Feather name={iconName} size={iconSize} color={iconColor} />
            </View>
            <Text className="leading-5">{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
