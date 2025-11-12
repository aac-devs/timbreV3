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
import { AddHorarioDial } from "../components/AddHorarioDial";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useStaticData } from "../store/static.data";

//! ORGANIZAR CÓDIGO, SEPARAR EN COMPONENTES.
//! BADGES EN TABS DE HORARIOS. (YA NO)
//! FUNCIONALIDAD A BOTONES DE AGREGAR HORAS (DATETIMEPICKER).
//! TARJETA DE HORA SWIPEABLE CON BOTÓN DE ELIMINAR.
//! COMPLETAR (DEFINIR) LISTA DE BOTTOMSHEET, A LO MEJOR PONER 'GUARDAR EN TELÉFONO' (YA NO, GUARDADO AUTOMÁTICO)
//! DIVIDIR EN CARPETAS LOS ARCHIVOS RELACIONADOS A UN COMPONENTE**

export const Horarios = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);

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

  const regularIconProps = useStaticData({
    lang: "spanish",
    horario: "regular",
  }).tabItemIconProps;
  const especialIconProps = useStaticData({
    lang: "spanish",
    horario: "especial",
  }).tabItemIconProps;
  const eventualIconProps = useStaticData({
    lang: "spanish",
    horario: "eventual",
  }).tabItemIconProps;

  // console.log("holaaaaa", st.tabIcon, st.tabTitle, st.tabBadgeContainer);
  // ! REVISAR QUE NO FUNCIONA EL CLICK (TOUCH) EN LOS TabIcons
  // TODO: Hay que modificar los TabItem. Colocarlos dentro de este componente ya que no funciona separando el componente. Se puede usar el color del texto y el ícono para mostrar si se guardó o no el horario. Aunque el ícono estaría por ver ya que es probable que se cambie por íconos con colores***
  // TODO: Poner las titleStyle dentro del archivo static.
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
          title={regularIconProps.title}
          titleStyle={{ fontSize: 12, color: "red" }}
          // style={{ backgroundColor: "pink", height: "100%", width: "100%" }}
          icon={regularIconProps.iconProps}
        />
        <Tab.Item
          title={especialIconProps.title}
          titleStyle={{ fontSize: 12 }}
          icon={especialIconProps.iconProps}
        />
        <Tab.Item
          title={eventualIconProps.title}
          titleStyle={{ fontSize: 12 }}
          icon={eventualIconProps.iconProps}
        />

        {/* <TabItemHorario horario="regular" enviado={true} />
        <TabItemHorario horario="especial" enviado={false} />
        <TabItemHorario horario="eventual" enviado={true} /> */}
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
