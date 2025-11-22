import { Text, TextStyle } from "react-native";

import { SpeedDial } from "@rneui/themed";

import { DialOptions } from "../../store/es.static.interface";
import { useStaticData } from "../../store/static.data";
import { globalStylesComp } from "../../styles/global.phone.styles";

interface DialActionProps {
  dialOpt: DialOptions;
  onPress: (option: DialOptions) => void;
  fontColor: string;
  titleColor: string;
}

export const DialAction = (props: DialActionProps) => {
  const dialTitle = useStaticData("spanish")(
    undefined,
    props.dialOpt
  ).dialOption;

  const style: TextStyle = {
    ...globalStylesComp("DialAct")(),
    color: props.titleColor,
  };

  return (
    <SpeedDial.Action
      title={dialTitle}
      onPress={() => props.onPress(props.dialOpt)}
      color={props.fontColor}
    >
      <Text style={style}>{dialTitle[0]}</Text>
    </SpeedDial.Action>
  );
};
