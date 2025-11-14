import { SpeedDial } from "@rneui/themed";
import { Text, View } from "react-native";
import { DialOptions } from "../../store/es.static.interface";
import { useStaticData } from "../../store/static.data";
import { globalStyles } from "../../styles/global.phone.styles";

interface Props {
  dialOpt: DialOptions;
  onPress: (option: DialOptions) => void;
}

export const DialAction = ({ dialOpt, onPress }: Props) => {
  const dialTitle = useStaticData("spanish")(undefined, dialOpt).dialOption;
  const st = globalStyles("DialHorario")(dialOpt)?.DialActionStyles;

  return (
    <SpeedDial.Action
      title={dialTitle}
      onPress={() => onPress(dialOpt)}
      color={st?.dialColor}
    >
      <Text style={st?.title}>{dialTitle[0]}</Text>
    </SpeedDial.Action>
  );
};
