import { View } from "react-native";

import { Avatar, Button, ListItem, Text } from "@rneui/themed";

import { globalStylesComp } from "../styles/global.phone.styles";
import { TipoHorario } from "../store/dynamic.interface";

type DialOptions = "entrada" | "clase" | "descanso" | "salida";

interface Props {
  index: string;
  hora: string;
  tipoHorario: TipoHorario;
  tipoEvento: DialOptions;
  avatarFontColor: string;
  avatarBackgroundColor: string;
  onDelete: (tipo: TipoHorario, index: string) => void;
  onEdit: (tipo: TipoHorario, index: string) => void;
}

export const HorarioCard = (props: Props) => {
  const styles = globalStylesComp("HorarioCard");
  const avatarBgColor = { backgroundColor: props.avatarBackgroundColor };
  const avatarFontColor = { color: props.avatarFontColor };

  return (
    <ListItem
      key={props.index}
      bottomDivider
      containerStyle={styles("listItemCont")}
    >
      <Avatar
        rounded
        size={styles("avatarSize")}
        title={props.tipoEvento[0].toUpperCase()}
        titleStyle={[styles("avatarTitle"), avatarFontColor]}
        containerStyle={[styles("avatarContStyle"), avatarBgColor]}
      />
      <ListItem.Content style={styles("liContent")}>
        <Text style={styles("text")}>{props.hora}</Text>
        <View style={styles("buttonsCont")}>
          <Button
            icon={styles("btnEditIcon")}
            buttonStyle={styles("btnStyle")}
            containerStyle={styles("btnContStyle")}
            onPress={() => props.onEdit(props.tipoHorario, props.index)}
          />
          <Button
            icon={styles("btnDeleteIcon")}
            iconContainerStyle={styles("btnIconContStyle")}
            buttonStyle={styles("btnStyle")}
            containerStyle={styles("btnContStyle")}
            onPress={() => props.onDelete(props.tipoHorario, props.index)}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};
