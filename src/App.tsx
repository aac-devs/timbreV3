import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, useColorScheme } from "react-native";
import { Root } from "./navigation/Root";
import { ThemeProvider } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  DarkNavigatorTheme,
  LightNavigatorTheme,
} from "./themes/navigator/theme";
import { lightTheme, darkTheme } from "./themes/elements/theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const scheme = useColorScheme();
  const [tema, setTema] = useState(lightTheme);

  useEffect(() => {
    if (scheme === "dark") setTema(darkTheme);
    else setTema(lightTheme);
  }, [scheme]);

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <ThemeProvider theme={tema}>
      <NavigationContainer
        theme={scheme === "dark" ? DarkNavigatorTheme : LightNavigatorTheme}
      >
        <Root />
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      </NavigationContainer>
    </ThemeProvider>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
