import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { Pressable, PressableStateCallbackType } from "react-native";
import { globalStyles } from "../../styles/global.phone.styles";
import { PressableHomeParams } from "../../store/es.static.interface";

interface Props {
  pressableParams: PressableHomeParams;
}

export const PressHome = ({ pressableParams }: Props) => {
  const navigation = useNavigation();
  const btn = globalStyles().fnPressHome;
  const st = globalStyles().PressHome;

  console.log("ha");
  return (
    <Pressable
      onPress={() => navigation.navigate(pressableParams.goTo as never)}
      style={(state: PressableStateCallbackType) => btn(state)}
    >
      <Image source={pressableParams.imageAsset} style={st.image} />
      <Text h4>{pressableParams.title}</Text>
    </Pressable>
  );
};
