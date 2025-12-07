import { useEffect, useState } from "react";

import { ScrollView } from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Divider, Tab, TabView } from "@rneui/themed";

import { Background } from "../components/Background";
import { BGDiasSemana } from "../components/BGDiasSemana";
import { AddHorarioDial } from "../components/AddHorarioDial";
import { globalStylesComp, SpeedDialComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";
import { HorarioCard } from "../components/HorarioCard";
import { useDynamicStore } from "../store/dynamic.store";
import {
  IntEvent,
  TypeHour,
  TypeRingType,
  TypeSchedule,
} from "../store/interfaces/event.interface";

//! ORGANIZAR CÓDIGO, SEPARAR EN COMPONENTES.
//! FUNCIONALIDAD A BOTONES DE AGREGAR HORAS (DATETIMEPICKER).
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
    eventAddAction,
    eventEraseAction,
    eventEraseAllAction,
    eventExistsHourAction,
    eventReadAllAction,
  } = useDynamicStore();

  const tabItemStyle = globalStylesComp("TabItem");
  const staticText = useStaticText()("scrHorarios");
  const dialStyles = globalStylesComp("SpeedDial");

  // Estado para la hora con tipo Date (solo usamos la parte de la hora)
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());

  // Guarda los valores para el evento a enviar:
  const [selectedEvent, setSelectedEvent] = useState<IntEvent>({
    hour: "00:00",
    ringType: "entrada",
    scheduleType: "regular",
  });

  // Habilita, dentro del useEffect, el envío del evento ajustado:
  const [enableToSend, setEnableToSend] = useState(false);

  // Estado para mostrar/ocultar el time picker
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  // Función cuando se cambia la hora
  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowTimePicker(false);
    if (selectedDate) {
      setSelectedEvent({
        ...selectedEvent,
        hour: formatTime(selectedDate) as TypeHour,
      });
      setSelectedTime(selectedDate);
      setEnableToSend(true);
    }
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
  const handleSpeedDialOptionSelected = (ringType: TypeRingType) => {
    const scheduleType: TypeSchedule =
      index === 0 ? "regular" : index === 1 ? "special" : "temporary";
    setSelectedEvent({ ...selectedEvent, ringType, scheduleType });
    setShowTimePicker(true);
  };

  const handleDeleteHorarioCard = (event: IntEvent) => {
    eventEraseAction(event);
  };

  useEffect(() => {
    console.clear();
    console.log("Entra al useEffect >>>>>>>>>>>>>.");

    // eventEraseAllAction();

    // const eventos = eventReadAllAction();
    // console.log(eventos);

    if (enableToSend) {
      eventAddAction(selectedEvent);
      setEnableToSend(false);
    }

    // eventAddAction({
    //   hour: "08:05",
    //   ringType: "clase",
    //   scheduleType: "especial",
    // });

    // eventEraseAction({
    //   hour: "08:05",
    //   ringType: "clase",
    //   scheduleType: "especial",
    // });
  }, [selectedEvent]);

  console.log("aacx");

  const eventList = eventReadAllAction().map((ev) => {
    const { hour, ringType, scheduleType } = ev;

    const ring = `${ringType[0].toUpperCase()}${ringType.slice(1)}`;
    const titleColor = `titleColor${ring}` as SpeedDialComp;
    const fontColor = `fontColor${ring}` as SpeedDialComp;

    return {
      scheduleType,
      comp: (
        <HorarioCard
          index={hour}
          hour={hour}
          scheduleType={scheduleType}
          eventType={ringType}
          avatarFontColor={dialStyles(titleColor) as string}
          avatarBackgroundColor={dialStyles(fontColor) as string}
          onDelete={() => handleDeleteHorarioCard(ev)}
        />
      ),
    };
  });

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
            <BGDiasSemana scheduleType="regular" />
            <Divider />
            <ScrollView
              style={{
                marginBottom: 40,
                width: "100%",
              }}
            >
              {eventList &&
                eventList.map((ev) => {
                  if (ev.scheduleType === "regular") return ev.comp;
                })}
            </ScrollView>
          </Background>
        </TabView.Item>
        {/* //////////////////////////////////////////////////////////////////////////// * */}
        {/* // HORARIO ESPECIAL //////////////////////////////////////////////////////// * */}
        {/* //////////////////////////////////////////////////////////////////////////// * */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana scheduleType="special" />
            <Divider />
            <ScrollView
              style={{
                marginBottom: 40,
                width: "100%",
              }}
            >
              {eventList &&
                eventList.map((ev) => {
                  if (ev.scheduleType === "special") return ev.comp;
                })}
            </ScrollView>
          </Background>
        </TabView.Item>
        {/*  */}
        {/* //////////////////////////////////////////////////////////////////////////// ? */}
        {/* // HORARIO EVENTUAL //////////////////////////////////////////////////////// ? */}
        {/* //////////////////////////////////////////////////////////////////////////// ? */}
        <TabView.Item style={{ width: "100%" }}>
          <Background>
            <BGDiasSemana scheduleType="temporary" />
            <Divider />
            <ScrollView
              style={{
                marginBottom: 40,
                width: "100%",
              }}
            >
              {eventList &&
                eventList.map((ev) => {
                  if (ev.scheduleType === "temporary") return ev.comp;
                })}
            </ScrollView>
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
