import {
  Button,
  CheckBox,
  Icon,
  ListItem,
  makeStyles,
  useTheme,
  useThemeMode,
} from "@rneui/themed";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { Background } from "../components/Background";

export const Horarios = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { mode } = useThemeMode();

  useEffect(() => {
    console.log("En Horarios:");
    console.log(theme.mode);
    console.log(mode);
    // if (theme.mode === "dark") {
    //   setMode("dark");
    // } else {
    //   setMode("light");
    // }
  }, [mode]);

  return (
    <Background>
      <ScrollView>
        <ListItem.Swipeable
          leftContent={(reset) => (
            <Button
              title="Editar"
              onPress={() => reset()}
              icon={{ name: "edit", color: "white", type: "font-awesome" }}
              buttonStyle={{ minHeight: "100%" }}
            />
          )}
          rightContent={(reset) => (
            <Button
              title="Borrar"
              onPress={() => reset()}
              icon={{ name: "delete-outline", color: "white" }}
              buttonStyle={{
                minHeight: "100%",
                backgroundColor: theme.colors.error,
              }}
            />
          )}
          bottomDivider
        >
          <Icon name="chevron-left" />
          <CheckBox
            checked
            // disabled
            // checked={isChecked}
            // onPress={() => setIsChecked(!isChecked)}
            textStyle={{ backgroundColor: "pink" }}
          />
          <ListItem.Content>
            <ListItem.Title style={{ color: theme.colors.black }}>
              PRINCIPAL
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: theme.colors.grey3 }}>
              No guardado en dispositivo
            </ListItem.Subtitle>
          </ListItem.Content>
          <Icon name="chevron-right" />
        </ListItem.Swipeable>
      </ScrollView>
    </Background>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.success,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.primary,
  },
}));
