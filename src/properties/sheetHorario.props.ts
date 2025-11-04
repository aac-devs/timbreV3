import {
  containerSheetStyle,
  titleSheetStyle,
} from "../styles/sheetHorario.style";
import { HexColor } from "../themes/navigator/nav-types";

export type HorarioSheetProps = {
  title: string;
  enabled: boolean;
  visible: boolean;
  containerStyle: {};
  titleStyle: {};
  iconName: string;
  iconType: string;
  iconColor: HexColor | string;
  onPress: (opt: string) => void;
};

export const HorarioBottomSheetList: HorarioSheetProps[] = [
  {
    title: "Guardar cambios de horario (en teléfono)",
    enabled: true,
    visible: true,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "save-outline",
    iconType: "ionicon",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Activar horario (en dispositivo)",
    enabled: true,
    visible: false,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "calendar-check-o",
    iconType: "font-awesome",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Desactivar horario (en dispositivo)",
    enabled: true,
    visible: false,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "calendar-times-o",
    iconType: "font-awesome",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Enviar horario (a dispositivo)",
    enabled: true,
    visible: false,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "send",
    iconType: "feather",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Registrar dispositivo",
    enabled: true,
    visible: false,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "app-registration",
    iconType: "material",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Eliminar registro de dispositivo",
    enabled: true,
    visible: true,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "archive-cancel-outline",
    iconType: "material-community",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Conectar dispositivo",
    enabled: true,
    visible: true,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "bluetooth-connect",
    iconType: "material-community",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Desconectar dispositivo",
    enabled: true,
    visible: false,
    containerStyle: containerSheetStyle.accion,
    titleStyle: titleSheetStyle.accion,
    iconName: "bluetooth-off",
    iconType: "material-community",
    iconColor: titleSheetStyle.accion.color,
    onPress: () => {},
  },
  {
    title: "Cancelar",
    enabled: true,
    visible: true,
    containerStyle: containerSheetStyle.cancelar,
    titleStyle: titleSheetStyle.cancelar,
    iconName: "cancel",
    iconType: "material-community",
    iconColor: titleSheetStyle.cancelar.color,
    onPress: () => {},
  },
];
