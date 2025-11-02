import {
  containerSheetStyle,
  titleSheetStyle,
} from "../styles/sheetHorario.style";
import { HexColor } from "../themes/navigator/nav-types";

export type HorarioSheetProps = {
  title: string;
  containerStyle: {};
  titleStyle: {};
  iconName: string;
  iconType: string;
  iconColor: HexColor | string;
  onPress: (opt: string) => void;
};

export const HorarioBottomSheetList: HorarioSheetProps[] = [
  {
    title: "Guardar horario",
    containerStyle: containerSheetStyle.guardar,
    titleStyle: titleSheetStyle.guardar,
    iconName: "save-outline",
    iconType: "ionicon",
    iconColor: titleSheetStyle.conectar.color,
    onPress: () => {},
  },
  {
    title: "Registrar dispositivo",
    containerStyle: containerSheetStyle.registrar,
    titleStyle: titleSheetStyle.registrar,
    iconName: "app-registration",
    iconType: "material",
    iconColor: titleSheetStyle.conectar.color,
    onPress: () => {},
  },
  {
    title: "Conectar dispositivo",
    containerStyle: containerSheetStyle.conectar,
    titleStyle: titleSheetStyle.conectar,
    iconName: "bluetooth-connect",
    iconType: "material-community",
    iconColor: titleSheetStyle.conectar.color,
    onPress: () => {},
  },
  {
    title: "Cancelar",
    containerStyle: containerSheetStyle.cancelar,
    titleStyle: titleSheetStyle.cancelar,
    iconName: "cancel",
    iconType: "material-community",
    iconColor: titleSheetStyle.cancelar.color,
    onPress: () => {},
  },
];
