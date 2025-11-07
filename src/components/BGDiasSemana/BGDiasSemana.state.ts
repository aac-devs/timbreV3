import { BGDiasSemanaProps } from "./BGDiasSemana.props";

export const diasSemanaInitialState: BGDiasSemanaProps = {
  title: "Días de activación del horario",
  onChange: (day: string, newState: boolean) => {},
  daysLabels: ["D", "L", "M", "X", "J", "V", "S"],
  daysState: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  },
};
