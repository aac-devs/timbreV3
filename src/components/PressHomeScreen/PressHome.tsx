import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { Pressable, PressableStateCallbackType } from "react-native";
import {
  fnPressHomeStyles,
  globalStyles,
} from "../../styles/global.phone.styles";
import { PressableHomeParams } from "../../store/es.static.interface";

interface Props {
  pressableParams: PressableHomeParams;
}

export const PressHome = ({ pressableParams }: Props) => {
  const navigation = useNavigation();
  // const btn = globalStyles().fnPressHomeStyles;
  const st = globalStyles("PressHome")()?.PressHomeStyles;

  console.log("ha");
  return (
    <Pressable
      onPress={() => navigation.navigate(pressableParams.goTo as never)}
      style={(state: PressableStateCallbackType) => fnPressHomeStyles(state)}
    >
      <Image source={pressableParams.imageAsset} style={st?.image} />
      <Text h4>{pressableParams.title}</Text>
    </Pressable>
  );
};
