import { Divider, SpeedDial, Text, useTheme } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import { fontWeights } from "../themes/fonts/fonts";

export const AddHorarioDial = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  console.log("hola aacx");
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
      <SpeedDial.Action
        title="Entrada"
        onPress={() => console.log("Add Something")}
        color={theme.colors.entrada}
      >
        <Text
          style={{
            color: theme.colors.textEntrada,
            fontSize: 18,
            fontWeight: fontWeights.heavy,
          }}
        >
          E
        </Text>
      </SpeedDial.Action>
      <SpeedDial.Action
        title="Clase"
        onPress={() => console.log("Delete Something")}
        color={theme.colors.clase}
      >
        <Text
          style={{
            color: theme.colors.textClase,
            fontSize: 18,
            fontWeight: fontWeights.heavy,
          }}
        >
          C
        </Text>
      </SpeedDial.Action>
      <SpeedDial.Action
        title="Descanso"
        onPress={() => console.log("Add Something")}
        color={theme.colors.descanso}
      >
        <Text
          style={{
            color: theme.colors.textDescanso,
            fontSize: 18,
            fontWeight: fontWeights.heavy,
          }}
        >
          D
        </Text>
      </SpeedDial.Action>
      <SpeedDial.Action
        title="Salida"
        onPress={() => console.log("Add Something")}
        color={theme.colors.salida}
      >
        <Text
          style={{
            color: theme.colors.textSalida,
            fontSize: 18,
            fontWeight: fontWeights.heavy,
          }}
        >
          S
        </Text>
      </SpeedDial.Action>
    </SpeedDial>
  );
};
