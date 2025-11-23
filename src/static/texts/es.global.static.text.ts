import {
  HomeScreen,
  Screens,
  HorariosScreen,
  RingsScreen,
  RelojScreen,
  BateriaScreen,
} from "../global.static.interface";

// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////
// ??                                                                                ?? //
// ??   #########   #######   ########     #####    ##     ##   #######   ##         ?? //
// ??   ##         ##     ##  ##     ##   ##   ##   ###    ##  ##     ##  ##         ?? //
// ??   ##         ##         ##     ##  ##     ##  ####   ##  ##     ##  ##         ?? //
// ??   #####       #######   ########   #########  ## ##  ##  ##     ##  ##         ?? //
// ??   ##                ##  ##         ##     ##  ##  ## ##  ##     ##  ##         ?? //
// ??   ##         ##     ##  ##         ##     ##  ##   ####  ##     ##  ##         ?? //
// ??   #########   #######   ##         ##     ##  ##    ###   #######   #########  ?? //
// ??                                                                                ?? //
// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////

export const spanishStrings = (screen: Screens) => {
  switch (screen) {
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "scrHome":
      return (homeScreen: HomeScreen): string => {
        switch (homeScreen) {
          case "screenTitle":
            return "Timbre Electrónico";
          case "btnHorarios":
            return "Horarios";
          case "btnRings":
            return "Rings";
          case "btnReloj":
            return "Reloj";
          case "btnBateria":
            return "Batería";
          case "gotoHorarios":
            return "horarios";
          case "gotoRings":
            return "rings";
          case "gotoReloj":
            return "reloj";
          case "gotoBateria":
            return "bateria";
          default:
            const unreachable: never = homeScreen;
            throw new Error(
              `Texto HomeScreen español no manejado: ${unreachable}`
            );
        }
      };
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "scrHorarios":
      return (horariosScreen: HorariosScreen): string | string[] => {
        switch (horariosScreen) {
          case "navTitle":
            return "Horarios";
          case "tabRegularTitle":
            return "Regular";
          case "tabEspecialTitle":
            return "Especial";
          case "tabEventualTitle":
            return "Eventual";
          case "diasParagraph":
            return "Días de activación de horario";
          case "diasSemanaLabels":
            return ["D", "L", "M", "X", "J", "V", "S"];
          case "dialEntrada":
            return "Entrada";
          case "dialClase":
            return "Clase";
          case "dialDescanso":
            return "Descanso";
          case "dialSalida":
            return "Salida";

          default:
            const unreachable: never = horariosScreen;
            throw new Error(
              `Texto HorariosScreen español no manejado: ${unreachable}`
            );
        }
      };
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "scrRings":
      return (ringsScreen: RingsScreen): string => {
        switch (ringsScreen) {
          case "navTitle":
            return "Rings";
          default:
            const unreachable: never = ringsScreen;
            throw new Error(
              `Texto RingsScreen español no manejado: ${unreachable}`
            );
        }
      };
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "scrReloj":
      return (relojScreen: RelojScreen): string => {
        switch (relojScreen) {
          case "navTitle":
            return "Reloj";
          default:
            const unreachable: never = relojScreen;
            throw new Error(
              `Texto RelojScreen español no manejado: ${unreachable}`
            );
        }
      };
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "scrBateria":
      return (bateriaScreen: BateriaScreen): string => {
        switch (bateriaScreen) {
          case "navTitle":
            return "Batería";
          default:
            const unreachable: never = bateriaScreen;
            throw new Error(
              `Texto BateríaScreen español no manejado: ${unreachable}`
            );
        }
      };
    // ?? ////////////////////////////////////////////////////////////////////////////////
    case "global":
      return {};
    // ?? ////////////////////////////////////////////////////////////////////////////////
    default:
      const unreachable: never = screen;
      throw new Error(`Componente Screen Español no manejado: ${unreachable}`);
  }
};

// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////
// ?? ////////////////////////////////////////////////////////////////////////////////////
