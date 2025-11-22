import {
  HomeScreen,
  HorariosScreen,
  Screens,
} from "../global.static.interface";

export const englishStrings = (screen: Screens) => {
  switch (screen) {
    case "scrHome":
      return (homeScreen: HomeScreen): string => {
        switch (homeScreen) {
          case "screenTitle":
            return "Electronic";
          case "btnHorarios":
            return "Schedules";
          case "btnRings":
            return "Rings";
          case "btnReloj":
            return "Watch";
          case "btnBateria":
            return "Battery";
          default:
            const unreachable: never = homeScreen;
            throw new Error(
              `Texto HomeScreen inglés no manejado: ${unreachable}`
            );
        }
      };
    case "scrHorarios":
      return (horariosScreen: HorariosScreen): string => {
        switch (horariosScreen) {
          case "tabRegularTitle":
            return "Regular";
          case "tabEspecialTitle":
            return "Special";
          case "tabEventualTitle":
            return "Eventual";
          default:
            const unreachable: never = horariosScreen;
            throw new Error(
              `Texto HorariosScreen inglés no manejado: ${unreachable}`
            );
        }
      };
  }
};
