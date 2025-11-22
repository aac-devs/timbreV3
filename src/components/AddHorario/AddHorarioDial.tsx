import { useState } from "react";

import { SpeedDial, useTheme } from "@rneui/themed";

import { DialAction } from "./DialAction";
import { DialOptions } from "../../store/es.static.interface";
import { globalStylesComp } from "../../styles/global.phone.styles";

interface Props {
  onOptionSelected: (option: DialOptions) => void;
}

export const AddHorarioDial = ({ onOptionSelected }: Props) => {
  const [open, setOpen] = useState(false);

  const colors = useTheme().theme.colors;
  const style = globalStylesComp("SpeedDial");

  const handleDialOption = (option: DialOptions) => {
    setOpen(false);
    onOptionSelected(option);
  };

  return (
    <SpeedDial
      isOpen={open}
      icon={style("icon")}
      openIcon={style("openIcon")}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      overlayColor={style("overlayColor")}
      color={style("color")}
      style={style("compStyle")}
    >
      <DialAction
        dialOpt="entrada"
        onPress={handleDialOption}
        fontColor={colors.entrada}
        titleColor={colors.textEntrada}
      />
      <DialAction
        dialOpt="clase"
        onPress={handleDialOption}
        fontColor={colors.clase}
        titleColor={colors.textClase}
      />
      <DialAction
        dialOpt="descanso"
        onPress={handleDialOption}
        fontColor={colors.descanso}
        titleColor={colors.textDescanso}
      />
      <DialAction
        dialOpt="salida"
        onPress={handleDialOption}
        fontColor={colors.salida}
        titleColor={colors.textSalida}
      />
    </SpeedDial>
  );
};
