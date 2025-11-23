import {
  ImageSourcePropType,
  Pressable,
  PressableStateCallbackType,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";

import { globalStylesComp } from "../../styles/global.phone.styles";

interface Props {
  title: string;
  navTo: string;
  iconUrl: ImageSourcePropType;
}

export const PressHome = ({ title, navTo, iconUrl }: Props) => {
  const navigation = useNavigation();
  const style = globalStylesComp("HomeBtns");

  console.log("press home");
  return (
    <Pressable
      onPress={() => navigation.navigate(navTo as never)}
      style={(state: PressableStateCallbackType) => style("pressable", state)}
    >
      <Image source={iconUrl} style={style("image")} />
      <Text h4>{title}</Text>
    </Pressable>
  );
};
