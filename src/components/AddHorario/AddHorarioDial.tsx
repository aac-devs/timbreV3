import { Divider, SpeedDial, Text, useTheme } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import { fontWeights } from "../../themes/fonts/fonts";
import { DialAction } from "./DialAction";
import { DialOptions } from "../../store/es.static.interface";

export const AddHorarioDial = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  console.log("hola aacxxx");

  const handleDialOption = (option: DialOptions) => {
    console.log("Opción dial:", option);
  };

  return (
    <SpeedDial
      isOpen={open}
      icon={{ name: "edit", color: theme.colors.white }}
      openIcon={{ name: "close", color: theme.colors.white }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      overlayColor="rgba(0,0,0,0.5)"
      color={theme.colors.secondary}
      style={{ bottom: "8%" }}
    >
      <DialAction dialOpt="entrada" onPress={handleDialOption} />
      <DialAction dialOpt="clase" onPress={handleDialOption} />
      <DialAction dialOpt="descanso" onPress={handleDialOption} />
      <DialAction dialOpt="salida" onPress={handleDialOption} />
    </SpeedDial>
  );
};
