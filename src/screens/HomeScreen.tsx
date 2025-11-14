import { Divider, Text } from "@rneui/themed";
import { View } from "react-native";
import { PressHome } from "../components/PressHomeScreen/PressHome";
import { useStaticData } from "../store/static.data";
import { globalStyles } from "../styles/global.phone.styles";

export const HomeScreen = () => {
  const { appTitle, homePressParams: pressParams } = useStaticData("spanish")();
  const st = globalStyles("HomeScreen")()?.HomeScreenStyles;

  return (
    <View style={st?.mainContainer}>
      <View style={st?.titleContainer}>
        <Text h2 style={st?.title}>
          {appTitle}
        </Text>
      </View>
      <Divider />
      <View style={st?.bodyContainer}>
        <PressHome pressableParams={pressParams.horarios} />
        <PressHome pressableParams={pressParams.rings} />
        <PressHome pressableParams={pressParams.reloj} />
        <PressHome pressableParams={pressParams.bateria} />
      </View>
    </View>
  );
};
