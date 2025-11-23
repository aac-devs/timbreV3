import { Text, TextStyle } from "react-native";

import { SpeedDial } from "@rneui/themed";

import { DialOptions } from "../../store/es.static.interface";
import { globalStylesComp } from "../../styles/global.phone.styles";

interface Props {
  title: string;
  fontColor: string;
  titleColor: string;
  dialOpt: DialOptions;
  onPress: (option: DialOptions) => void;
}

export const DialAction = (props: Props) => {
  const style: TextStyle = {
    ...globalStylesComp("DialAct")(),
    color: props.titleColor,
  };

  return (
    <SpeedDial.Action
      title={props.title}
      onPress={() => props.onPress(props.dialOpt)}
      color={props.fontColor}
    >
      <Text style={style}>{props.title[0]}</Text>
    </SpeedDial.Action>
  );
};
