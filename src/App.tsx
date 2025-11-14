import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  DarkNavigatorTheme as DNT,
  LightNavigatorTheme as LNT,
} from "./themes/navigator/theme";
import { lightTheme, darkTheme } from "./themes/elements/theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRoot } from "./navigation/NativeRoot";

export default function App() {
  const scheme = useColorScheme();
  const [tema, setTema] = useState(lightTheme);

  useEffect(() => {
    if (scheme === "dark") setTema(darkTheme);
    else setTema(lightTheme);
  }, [scheme]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider theme={tema}>
        <NavigationContainer theme={scheme === "dark" ? DNT : LNT}>
          <NativeRoot />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
    </SafeAreaProvider>
  );
}
