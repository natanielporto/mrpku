import { View, Text } from "react-native";
import { Title } from "../../atoms/Title/Title";
import { NutritionalInfo } from "../../../services/recipe/types";

export const Table = ({
  nutritionalInformation,
}: {
  nutritionalInformation: NutritionalInfo[];
}) => {
  const classCenter = "flex-1 pl-2";
  const classRight = "flex-1 text-right";
  const classRow = "flex flex-row justify-between w-full pr-2";

  return (
    <View>
      <Title title={"Informações nutricionais"} underline />
      <View className="flex flex-row justify-between w-full">
        <Text className="flex-1 text-center"></Text>
        <Text className={`${classCenter} text-right`}>Total</Text>
        <Text className="flex-1 text-right pr-2">Unidade</Text>
      </View>
      <View className={`${classRow} bg-white`}>
        <Text className={classCenter}>Calorias</Text>
        <Text className={classRight}>
          {nutritionalInformation[0].totalEnergy}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[0].servingEnergy}
        </Text>
      </View>
      <View className={classRow}>
        <Text className={classCenter}>Carboidratos</Text>
        <Text className={classRight}>
          {nutritionalInformation[1].totalCarbs}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[1].servingCarbs}
        </Text>
      </View>
      <View className={`${classRow} bg-white`}>
        <Text className={classCenter}>Proteinas</Text>
        <Text className={classRight}>
          {nutritionalInformation[2].totalProteins}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[2].servingProteins}
        </Text>
      </View>
      <View className={classRow}>
        <Text className={classCenter}>Lipídios</Text>
        <Text className={classRight}>
          {nutritionalInformation[3].totalLipids}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[3].servingLipids}
        </Text>
      </View>
      <View className={`${classRow} bg-white`}>
        <Text className={classCenter}>Sódio</Text>
        <Text className={classRight}>
          {nutritionalInformation[4].totalSodium}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[4].servingSodium}
        </Text>
      </View>
      <View className={classRow}>
        <Text className={classCenter}>Potássio</Text>
        <Text className={classRight}>
          {nutritionalInformation[5].totalPotassium}
        </Text>
        <Text className={classRight}>
          {nutritionalInformation[5].servingPotassium}
        </Text>
      </View>
    </View>
  );
};
