import {
  BateriaScreen,
  HomeScreen,
  HorariosScreen,
  RelojScreen,
  RingsScreen,
  Screens,
} from "../global.static.interface";

// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////
// !!                                                                                !! //
// !!          ####  ##     ##   #######   ##         #########   #######            !! //
// !!           ##   ###    ##  ##     ##  ##         ##         ##     ##           !! //
// !!           ##   ####   ##  ##         ##         ##         ##                  !! //
// !!           ##   ## ##  ##  ##   ####  ##         #####       #######            !! //
// !!           ##   ##  ## ##  ##     ##  ##         ##                ##           !! //
// !!           ##   ##   ####  ##     ##  ##         ##         ##     ##           !! //
// !!          ####  ##    ###   #######   #########  #########   #######            !! //
// !!                                                                                !! //
// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////

export const englishStrings = (screen: Screens) => {
  switch (screen) {
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "scrHome":
      return (homeScreen: HomeScreen): string => {
        switch (homeScreen) {
          case "screenTitle":
            return "Electronic School Bell";
          case "btnHorarios":
            return "Schedules";
          case "btnRings":
            return "Rings";
          case "btnReloj":
            return "Clock";
          case "btnBateria":
            return "Battery";
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
              `Texto HomeScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "scrHorarios":
      return (horariosScreen: HorariosScreen): string | string[] => {
        switch (horariosScreen) {
          case "navTitle":
            return "Schedules";
          case "tabRegularTitle":
            return "Regular";
          case "tabEspecialTitle":
            return "Special";
          case "tabEventualTitle":
            return "Temporary";
          case "diasParagraph":
            return "Schedule activation days";
          case "diasSemanaLabels":
            return ["S", "M", "T", "W", "T", "F", "S"];
          case "dialEntrada":
            return "Arrival";
          case "dialClase":
            return "Class";
          case "dialDescanso":
            return "Recess";
          case "dialSalida":
            return "Dismisal";

          default:
            const unreachable: never = horariosScreen;
            throw new Error(
              `Texto HorariosScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "scrRings":
      return (ringsScreen: RingsScreen): string => {
        switch (ringsScreen) {
          case "navTitle":
            return "Rings";
          default:
            const unreachable: never = ringsScreen;
            throw new Error(
              `Texto RingsScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "scrReloj":
      return (relojScreen: RelojScreen): string => {
        switch (relojScreen) {
          case "navTitle":
            return "Clock";
          default:
            const unreachable: never = relojScreen;
            throw new Error(
              `Texto RelojScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "scrBateria":
      return (bateriaScreen: BateriaScreen): string => {
        switch (bateriaScreen) {
          case "navTitle":
            return "Battery";
          default:
            const unreachable: never = bateriaScreen;
            throw new Error(
              `Texto BateríaScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    // !! ////////////////////////////////////////////////////////////////////////////////
    case "global":
      return {};
    // !! ////////////////////////////////////////////////////////////////////////////////
    default:
      const unreachable: never = screen;
      throw new Error(`Componente Screen Inglés no manejado: ${unreachable}`);
  }
};

// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////
// !! ////////////////////////////////////////////////////////////////////////////////////
