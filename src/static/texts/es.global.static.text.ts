import {
  HomeScreen,
  Screens,
  HorariosScreen,
} from "../global.static.interface";

export const spanishStrings = (screen: Screens) => {
  switch (screen) {
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
          default:
            const unreachable: never = homeScreen;
            throw new Error(
              `Texto HomeScreen español no manejado: ${unreachable}`
            );
        }
      };
    case "scrHorarios":
      return (horariosScreen: HorariosScreen): string => {
        switch (horariosScreen) {
          case "tabRegularTitle":
            return "Regular";
          case "tabEspecialTitle":
            return "Especial";
          case "tabEventualTitle":
            return "Eventual";
          default:
            const unreachable: never = horariosScreen;
            throw new Error(
              `Texto HorariosScreen español no manejado: ${unreachable}`
            );
        }
      };
  }
};
