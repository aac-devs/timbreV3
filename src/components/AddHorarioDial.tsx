import { useState } from "react";

import { SpeedDial } from "@rneui/themed";

import { DialAction } from "./DialAction";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";

type DialOptions = "entrada" | "clase" | "descanso" | "salida";

interface Props {
  onOptionSelected: (option: DialOptions) => void;
}

export const AddHorarioDial = ({ onOptionSelected }: Props) => {
  const [open, setOpen] = useState(false);

  // ! Texto estático:
  const staticText = useStaticText()("scrHorarios");
  // ? Estilos:
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
        fontColor={style("fontColorEntrada")}
        titleColor={style("titleColorEntrada")}
        title={staticText("dialEntrada")}
      />
      <DialAction
        dialOpt="clase"
        onPress={handleDialOption}
        fontColor={style("fontColorClase")}
        titleColor={style("titleColorClase")}
        title={staticText("dialClase")}
      />
      <DialAction
        dialOpt="descanso"
        onPress={handleDialOption}
        fontColor={style("fontColorDescanso")}
        titleColor={style("titleColorDescanso")}
        title={staticText("dialDescanso")}
      />
      <DialAction
        dialOpt="salida"
        onPress={handleDialOption}
        fontColor={style("fontColorSalida")}
        titleColor={style("titleColorSalida")}
        title={staticText("dialSalida")}
      />
    </SpeedDial>
  );
};
