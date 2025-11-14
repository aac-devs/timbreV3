import {
  Button,
  makeStyles,
  Tab,
  TabView,
  Text,
  useTheme,
} from "@rneui/themed";
import { useState } from "react";
import { Background } from "../components/Background";
import { BGDiasSemana } from "../components/BGDiasSemana/BGDiasSemana";
import { Divider } from "@rneui/themed";
import { AddHorarioDial } from "../components/AddHorario/AddHorarioDial";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useStaticData } from "../store/static.data";
import { globalStyles } from "../styles/global.phone.styles";

//! ORGANIZAR CÓDIGO, SEPARAR EN COMPONENTES.
//! BADGES EN TABS DE HORARIOS. (YA NO)
//! FUNCIONALIDAD A BOTONES DE AGREGAR HORAS (DATETIMEPICKER).
//! TARJETA DE HORA SWIPEABLE CON BOTÓN DE ELIMINAR.
//! COMPLETAR (DEFINIR) LISTA DE BOTTOMSHEET, A LO MEJOR PONER 'GUARDAR EN TELÉFONO' (YA NO, GUARDADO AUTOMÁTICO)
//! DIVIDIR EN CARPETAS LOS ARCHIVOS RELACIONADOS A UN COMPONENTE**

export const Horarios = () => {
  const [index, setIndex] = useState(0);
  const tabItemsStyle = globalStyles("TabItemHorario")()?.TabItemsStyles;

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

  const language = useStaticData("spanish");
  const regularIconProps = language("regular").tabItemIconProps;
  const especialIconProps = language("especial").tabItemIconProps;
  const eventualIconProps = language("eventual").tabItemIconProps;

  // console.log("holaaaaa", st.tabIcon, st.tabTitle, st.tabBadgeContainer);
  // TODO: Hay que modificar los TabItem. Colocarlos dentro de este componente ya que no funciona separando el componente. Se puede usar el color del texto y el ícono para mostrar si se guardó o no el horario. Aunque el ícono estaría por ver ya que es probable que se cambie por íconos con colores***
  // TODO: Poner las titleStyle dentro del archivo static.
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={tabItemsStyle?.indicator}
        variant="primary"
      >
        <Tab.Item
          title={regularIconProps.title}
          titleStyle={[tabItemsStyle?.title, { color: "red" }]} // color que mostrará si se ha enviado el horario
          icon={{ ...regularIconProps.iconProps, color: "red" }}
        />
        <Tab.Item
          title={especialIconProps.title}
          titleStyle={tabItemsStyle?.title}
          icon={especialIconProps.iconProps}
        />
        <Tab.Item
          title={eventualIconProps.title}
          titleStyle={tabItemsStyle?.title}
          icon={eventualIconProps.iconProps}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {/*  */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana horario="regular" />
            <Divider />
            <Button onPress={showTimepicker} title="Seleccionar Hora" />
            <Text style={styles.selectedTime}>
              Hora seleccionada: {formatTime(selectedTime)}
            </Text>
          </Background>
        </TabView.Item>
        {/*  */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana horario="especial" />
            <Divider />
          </Background>
        </TabView.Item>
        {/*  */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana horario="eventual" />
            <Divider />
          </Background>
        </TabView.Item>
      </TabView>
      {/* --------------------- */}
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
