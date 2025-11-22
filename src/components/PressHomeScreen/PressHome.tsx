import { Pressable, PressableStateCallbackType } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";

import { globalStylesComp } from "../../styles/global.phone.styles";
import { PressableHomeParams } from "../../store/es.static.interface";

interface Props {
  pressableParams: PressableHomeParams;
}

export const PressHome = ({ pressableParams }: Props) => {
  const navigation = useNavigation();
  const style = globalStylesComp("HomeBtns");

  return (
    <Pressable
      onPress={() => navigation.navigate(pressableParams.goTo as never)}
      style={(state: PressableStateCallbackType) => style("pressable", state)}
    >
      <Image source={pressableParams.imageAsset} style={style("image")} />
      <Text h4>{pressableParams.title}</Text>
    </Pressable>
  );
};
