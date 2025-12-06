import {
  Avatar,
  Button,
  Icon,
  ListItem,
  makeStyles,
  Tab,
  TabView,
  Text,
} from "@rneui/themed";
import { useEffect, useState } from "react";
import { Background } from "../components/Background";
import { BGDiasSemana } from "../components/BGDiasSemana";
import { Divider } from "@rneui/themed";
import { AddHorarioDial } from "../components/AddHorarioDial";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";
import { ScrollView, View } from "react-native";
import { HorarioCard } from "../components/HorarioCard";
import { TipoHorario } from "../store/dynamic.interface";
import { useDynamicStore } from "../store/dynamic.store";
import { Hora } from "../store/dyn.interface";

type DialOptions = "entrada" | "clase" | "descanso" | "salida";

//! ORGANIZAR CÓDIGO, SEPARAR EN COMPONENTES.
//! FUNCIONALIDAD A BOTONES DE AGREGAR HORAS (DATETIMEPICKER).
//! TARJETA DE HORA SWIPEABLE CON BOTÓN DE ELIMINAR. (NO FUNCIONA)
//! COMPLETAR (DEFINIR) LISTA DE BOTTOMSHEET, A LO MEJOR PONER 'GUARDAR EN TELÉFONO' (YA NO, GUARDADO AUTOMÁTICO)
//! DIVIDIR EN CARPETAS LOS ARCHIVOS RELACIONADOS A UN COMPONENTE (YA NO)**

export const Horarios = () => {
  const [index, setIndex] = useState(0);
  const [tabIconColor, setTabIconColor] = useState({
    regular: "gray",
    especial: "grey",
    eventual: "grey",
  });

  const {
    leerEventos,
    agregarEvento,
    borrarEventos,
    existeHoraEvento,
    borrarEvento,
  } = useDynamicStore();
  // const tabItemsStyle = globalStyles("TabItemHorario")()?.TabItemsStyles;
  const tabItemStyle = globalStylesComp("TabItem");
  const staticText = useStaticText()("scrHorarios");
  const dialStyles = globalStylesComp("SpeedDial");

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

  // ? Acá se inicial la adición de una nueva hora para el horario seleccionado
  const handleSpeedDialOptionSelected = (option: DialOptions) => {
    console.log("Opción de Speed Dial seleccionada (Horarios):", option);
    const horarioActivo =
      index === 0 ? "Regular" : index === 1 ? "Especial" : "Eventual";
    console.log("Horario Activo:", horarioActivo);
  };

  const handleEditHorarioCard = (tipo: TipoHorario, index: string) => {
    console.log(`eee -> Editar índice "${index}" del horario "${tipo}"`);
  };

  const handleDeleteHorarioCard = (tipo: TipoHorario, index: string) => {
    console.log(`XXX -> Borrar índice "${index}" del horario "${tipo}"`);
  };

  useEffect(() => {
    console.clear();
    console.log("Entra al useEffect >>>>>>>>>>>>>.");
    // if (index === 4) {
    //   borrarEventos("regular");
    // }
    // borrarEvento("regular", "06:18");
    // agregarEvento("eventual", { hora: "06:18", tipo: "descanso" });

    console.log("Horario regular:", leerEventos("regular"));
    console.log("Horario especial:", leerEventos("especial"));
    console.log("Horario eventual:", leerEventos("eventual"));

    // const hora: Hora = "18:16";
    // console.log(
    //   `Existe ${hora} en horario eventual? ${existeHoraEvento(
    //     "eventual",
    //     hora
    //   )}`
    // );

    // agregarEvento("eventual", { hora: "06:18", tipo: "descanso" });
  }, []);

  console.log("Horarios ---------------------------------!!!");
  // console.log(leerEventos("regular"));
  // console.log("holaaaaa", st.tabIcon, st.tabTitle, st.tabBadgeContainer);
  // TODO: Hay que modificar los TabItem. Colocarlos dentro de este componente ya que no funciona separando el componente. Se puede usar el color del texto y el ícono para mostrar si se guardó o no el horario. Aunque el ícono estaría por ver ya que es probable que se cambie por íconos con colores***
  // TODO: Poner las titleStyle dentro del archivo static.
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={tabItemStyle("indicator")}
        variant="primary"
      >
        <Tab.Item
          title={staticText("tabRegularTitle")}
          titleStyle={[
            tabItemStyle("titleText"),
            { color: tabIconColor.regular },
          ]} // color que mostrará si se ha enviado el horario
          icon={{
            name: "calendar-range-outline",
            type: "material-community",
            color: tabIconColor.regular,
          }}
        />
        <Tab.Item
          title={staticText("tabEspecialTitle")}
          titleStyle={[
            tabItemStyle("titleText"),
            { color: tabIconColor.regular },
          ]} // color que mostrará si se ha enviado el horario
          icon={{
            name: "bullseye-arrow",
            type: "material-community",
            color: tabIconColor.especial,
          }}
        />
        <Tab.Item
          title={staticText("tabEventualTitle")}
          titleStyle={[
            tabItemStyle("titleText"),
            { color: tabIconColor.regular },
          ]} // color que mostrará si se ha enviado el horario
          icon={{
            name: "exclamation-triangle",
            type: "font-awesome",
            color: tabIconColor.eventual,
          }}
        />
      </Tab>

      {/* -------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------- */}
      <TabView value={index} onChange={setIndex} animationType="spring">
        {/* //////////////////////////////////////////////////////////////////////////// ! */}
        {/* // HORARIO REGULAR  //////////////////////////////////////////////////////// ! */}
        {/* //////////////////////////////////////////////////////////////////////////// ! */}
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
        {/* //////////////////////////////////////////////////////////////////////////// * */}
        {/* // HORARIO ESPECIAL //////////////////////////////////////////////////////// * */}
        {/* //////////////////////////////////////////////////////////////////////////// * */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana horario="especial" />
            <Divider />
            <ScrollView
              style={{
                marginBottom: 50,
                width: "100%",
              }}
            >
              <HorarioCard
                index="aa"
                hora="06:15"
                tipoHorario="especial"
                tipoEvento="entrada"
                avatarFontColor={dialStyles("titleColorEntrada")}
                avatarBackgroundColor={dialStyles("fontColorEntrada")}
                onEdit={handleEditHorarioCard}
                onDelete={handleDeleteHorarioCard}
              />
            </ScrollView>
          </Background>
        </TabView.Item>
        {/*  */}
        {/* //////////////////////////////////////////////////////////////////////////// ? */}
        {/* // HORARIO EVENTUAL //////////////////////////////////////////////////////// ? */}
        {/* //////////////////////////////////////////////////////////////////////////// ? */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana horario="eventual" />
            <Divider />
          </Background>
        </TabView.Item>
      </TabView>
      {/* -------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------- */}
      <AddHorarioDial onOptionSelected={handleSpeedDialOptionSelected} />
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
