import { Icon, ListItem } from "@rneui/themed";
import { HexColor } from "../themes/nav-types";

export type SheetProps = {
  title: string;
  enabled: boolean;
  onPress: () => void;
  titleStyle: {};
  containerStyle: {};
  iconName: string;
  iconType: string;
  iconColor: HexColor | string;
};

export const HorarioSheetItem = ({
  title,
  enabled,
  onPress,
  titleStyle,
  containerStyle,
  iconName,
  iconType,
  iconColor,
}: SheetProps) => {
  return (
    <ListItem key={title} containerStyle={containerStyle} onPress={onPress}>
      <Icon name={iconName} type={iconType} color={iconColor} />
      <ListItem.Content>
        <ListItem.Title style={titleStyle}>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};
