export interface BGDiasSemanaProps {
  title: string;
  onChange: (day: string, newState: boolean) => void;
  daysState: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
  daysLabels: string[];
}
