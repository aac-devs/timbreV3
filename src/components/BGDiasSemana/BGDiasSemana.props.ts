import { DiasSemana, TipoHorario } from "../../store/dynamic.interface";

export interface BGDiasSemanaProps {
  // title: string;
  state: DiasSemana;
  horario: TipoHorario;
  onChange: (horario: TipoHorario, dia: string, newState: boolean) => void;
  // daysState: DiasSemana;
  // daysLabels: string[];
}
