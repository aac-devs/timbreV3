import { View } from "react-native";

import { Divider, Text } from "@rneui/themed";

import { PressHome } from "../components/PressHomeScreen/PressHome";
import { useStaticData } from "../store/static.data";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";

export const HomeScreen = () => {
  const { appTitle, homePressParams: pressParams } = useStaticData("spanish")();
  const style = globalStylesComp("Home");

  // const staticD = staticText();
  // console.log("----------", staticD("screenTitle"));
  const staticText = useStaticText();

  // staticText()('scrHome')('btnBateria')
  console.log(
    "&&&&&&",
    staticText("scrHome")("btnReloj"),
    "------------ en la pantalla HomeScreen"
  );

  console.log("hola aacxxxx");
  return (
    <View style={style("mainCont")}>
      <View style={style("titleCont")}>
        <Text h2 style={style("titleText")}>
          {appTitle}
        </Text>
      </View>
      <Divider />
      <View style={style("bodyCont")}>
        <PressHome pressableParams={pressParams.horarios} />
        <PressHome pressableParams={pressParams.rings} />
        <PressHome pressableParams={pressParams.reloj} />
        <PressHome pressableParams={pressParams.bateria} />
      </View>
    </View>
  );
};
