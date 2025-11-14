import { DiaSemanaProps } from "./functions/diasSemana";

export enum DiaSemanaNumero {
  domingo = 0,
  lunes = 1,
  martes = 2,
  miercoles = 3,
  jueves = 4,
  viernes = 5,
  sabado = 6,
}

type TipoTimbre = "entrada" | "clase" | "descanso" | "salida";
export type TipoHorario = "regular" | "especial" | "eventual";

type Horas = `0${number}` | `1${number}` | `20` | `21` | `22` | `23`;
type Minutos =
  | `0${number}`
  | `1${number}`
  | `2${number}`
  | `3${number}`
  | `4${number}`
  | `5${number}`;

type TipoHora = `${Horas}:${Minutos}`;

type EventoTimbre = { tipo: TipoTimbre; hora: TipoHora };

type HorarioProps = {
  enviado: boolean;
  dias: number[];
  horaTimbre: EventoTimbre[];
};

type UnoADiez = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type TipoRing = { repeticiones: UnoADiez; alto: UnoADiez; bajo: 0 | UnoADiez };

interface DatosTimbre {
  horarios: {
    regular: HorarioProps;
    especial: HorarioProps;
    eventual: HorarioProps;
  };
  rings: {
    enviado: boolean;
    entrada: TipoRing;
    clase: TipoRing;
    descanso: TipoRing;
    salida: TipoRing;
  };
  reloj: {};
  bateria: {};
}

interface DeviceStatus {
  conected: boolean;
  registered: boolean;
}

// * Tipo de estado:
export interface GlobalAppState {
  globalState: {
    datos: DatosTimbre;
    device: DeviceStatus;
  };
}

// * Tipo de acciones:
interface GlobalAppActions extends GlobalAppState {
  // getGlobalState: () => GlobalAppState;
  leerDiasSemana: (horario: TipoHorario) => number[];
  actualizarDiaSemana: ({ horario, newValue }: DiaSemanaProps) => void;
}

export type GlobalAppStore = GlobalAppState & GlobalAppActions;
