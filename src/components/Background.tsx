import React from "react";

import LinearGradient from "react-native-linear-gradient";

import { globalStylesComp } from "../styles/global.phone.styles";

interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
  // ? Estilos:
  const style = globalStylesComp("Fondo");

  return (
    <LinearGradient
      colors={style("colors")}
      style={style("compStyle")}
      start={style("start")}
      end={style("end")}
    >
      {children}
    </LinearGradient>
  );
};
