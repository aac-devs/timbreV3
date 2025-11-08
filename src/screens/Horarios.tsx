import {
  Badge,
  Button,
  CheckBox,
  Icon,
  ListItem,
  makeStyles,
  Tab,
  TabView,
  Text,
  useTheme,
} from "@rneui/themed";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Background } from "../components/Background";
import { BGDiasSemana } from "../components/BGDiasSemana/BGDiasSemana";
import { Divider } from "@rneui/themed";
import { AddHorarioDial } from "../components/AddHorarioDial";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { fontWeights } from "../themes/fonts/fonts";
import { useNavigation } from "@react-navigation/native";
import { useDynamicData } from "../store/dynamic.state";
import { DiasSemana, TipoHorario } from "../store/dynamic.interface";

//! ORGANIZAR CÓDIGO, SEPARAR EN COMPONENTES.
//! BADGES EN TABS DE HORARIOS.
//! FUNCIONALIDAD A BOTONES DE AGREGAR HORAS (DATETIMEPICKER).
//! TARJETA DE HORA SWIPEABLE CON BOTÓN DE ELIMINAR.
//! COMPLETAR (DEFINIR) LISTA DE BOTTOMSHEET, A LO MEJOR PONER 'GUARDAR EN TELÉFONO'
//! DIVIDIR EN CARPETAS LOS ARCHIVOS RELACIONADOS A UN COMPONENTE**

export const Horarios = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const { leerDiasSemana, state } = useDynamicData();

  useEffect(() => {
    const dias: DiasSemana = leerDiasSemana("regular");
    console.log({ dias });
  }, []);

  // Estado para la hora con tipo Date (solo usamos la parte de la hora)
  const [selectedTime, setSelectedTime] = useState<Date>(
    new Date(1598051730000)
  );

  // Estado para mostrar/ocultar el time picker
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const styles = useStyles();

  // Función cuando se cambia la hora
  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // Cerramos el picker siempre
    setShowTimePicker(false);

    // Si hay una fecha/hora seleccionada, actualizamos el estado
    if (selectedDate) {
      setSelectedTime(selectedDate);
    }
  };

  // Función para mostrar el selector de hora
  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  // Función para formatear la hora como string
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("es-Ar", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const handleDiasSemana = (
    horario: TipoHorario,
    dia: string,
    newState: boolean
  ) => {
    console.log({ horario, dia, newState });
  };

  console.log("hola");
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        // style={{ backgroundColor: "pink" }}
        indicatorStyle={{
          backgroundColor: theme.colors.secondary,
          // backgroundColor: "cyan",
          height: 4,
        }}
        variant="primary"
      >
        <Tab.Item
          // titleStyle={{ fontSize: 12, color: theme.colors.grey2 }}
          icon={{
            name: "calendar-range-outline",
            type: "material-community",
            color: theme.colors.grey2,
          }}
        >
          <Badge
            status="success"
            containerStyle={{ position: "absolute", top: 10, left: 70 }}
          />
          <Text
            style={{
              fontSize: 12,
              color: theme.colors.grey2,
              fontWeight: fontWeights.heavy,
            }}
          >
            Regular
          </Text>
        </Tab.Item>
        <Tab.Item
          // title="Académico"
          // titleStyle={{ fontSize: 12, color: theme.colors.grey2 }}
          // style={{ backgroundColor: "yellow" }}
          icon={{
            name: "bullseye-arrow",
            type: "material-community",
            color: theme.colors.grey2,
          }}
        >
          <Badge
            status="success"
            containerStyle={{ position: "absolute", top: 10, left: 70 }}
          />
          <Text
            style={{
              fontSize: 12,
              color: theme.colors.grey2,
              fontWeight: fontWeights.heavy,
            }}
          >
            Auxiliar
          </Text>
        </Tab.Item>
        <Tab.Item
          // title="Eventual"
          // titleStyle={{ fontSize: 12, color: theme.colors.grey2 }}
          icon={{
            name: "exclamation-triangle",
            type: "font-awesome",
            color: theme.colors.grey2,
          }}
        >
          <Badge
            status="success"
            containerStyle={{ position: "absolute", top: 10, left: 70 }}
          />
          <Text
            style={{
              fontSize: 12,
              color: theme.colors.grey2,
              fontWeight: fontWeights.heavy,
            }}
          >
            Eventual
          </Text>
        </Tab.Item>
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            {/* <CheckBox
              checked
              checkedColor={theme.colors.secondary}
              title="Horario activo"
              containerStyle={{ backgroundColor: "transparent" }}
            /> */}
            <BGDiasSemana
              horario="regular"
              state={state.datos.horarios.regular.dias}
              onChange={handleDiasSemana}
            />
            <Divider />
            <Button onPress={showTimepicker} title="Seleccionar Hora" />

            <Text style={styles.selectedTime}>
              Hora seleccionada: {formatTime(selectedTime)}
            </Text>
          </Background>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <CheckBox
              checked={false}
              checkedColor={theme.colors.secondary}
              title="Horario no activo"
              containerStyle={{ backgroundColor: "transparent" }}
            />
            {/* <BGDiasSemana /> */}
            <Divider />
          </Background>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <CheckBox
              checked={false}
              checkedColor={theme.colors.secondary}
              title="Horario no activo"
              containerStyle={{ backgroundColor: "transparent" }}
            />
            {/* <BGDiasSemana /> */}
            <Divider />
          </Background>
        </TabView.Item>
      </TabView>
      <AddHorarioDial />
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={selectedTime}
          mode="time"
          is24Hour={true}
          onChange={onTimeChange}
          display="spinner" // Puedes cambiar a "default" o "clock"
        />
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.success,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.primary,
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  selectedTime: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
}));
