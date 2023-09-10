import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";
import { GraphInfo } from "../../../services/recipe/types";

export const Chart = ({
  graphInformation,
}: {
  graphInformation: GraphInfo[];
}) => {
  const widthAndHeight = 200;
  const series = [
    graphInformation[0].leucine,
    graphInformation[1].tirosine,
    graphInformation[2].fenil,
    graphInformation[3].metiotine,
  ];
  const sliceColor = ["#003b15", "#139a3a", "#65f97d", "#b6fcc3"];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      margin: 10,
    },
  });

  return (
    <View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Aminoácidos</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
        </View>

        <View className="flex flex-row flex-wrap gap-4 justify-around mt-2">
          <View className="bg-white w-5/12 p-3 rounded-lg">
            <Text className="font-bold text-[#003b15]">
              Leucina: {graphInformation[0].leucine}%
            </Text>
            <Text>{graphInformation[0].totalLeucine}mg total</Text>
            <Text>{graphInformation[0].servingLeucine}mg a porção</Text>
          </View>
          <View className="bg-white w-5/12 p-3 rounded-lg">
            <Text className="font-bold text-[#139a3a]">
              Tirosina: {graphInformation[1].tirosine}%
            </Text>
            <Text>{graphInformation[1].totalTirosine}mg total</Text>
            <Text>{graphInformation[1].servingTirosine}mg a porção</Text>
          </View>
          <View className="bg-white w-5/12 p-3 rounded-lg">
            <Text className="font-bold text-[#65f97d]">
              Fenilalanina: {graphInformation[2].fenil}%
            </Text>
            <Text>{graphInformation[2].totalFenil}mg total</Text>
            <Text>{graphInformation[2].servingFenil}mg a porção</Text>
          </View>
          <View className="bg-white w-5/12 p-3 rounded-lg">
            <Text className="font-bold text-[#b6fcc3]">
              Metiotina: {graphInformation[3].metiotine}%
            </Text>
            <Text>{graphInformation[3].totalMetiotine}mg total</Text>
            <Text>{graphInformation[3].servingMetiotine}mg a porção</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
