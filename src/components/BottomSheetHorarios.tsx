import { BottomSheet } from "@rneui/themed";

import {
  HorarioBottomSheetList,
  HorarioSheetProps,
} from "../properties/sheetHorario.props";
import { HorarioSheetItem } from "./HorarioSheetItem";

interface Props {
  isVisible: boolean;
  onOptionSelected: (opt: string) => void;
}

const list: HorarioSheetProps[] = HorarioBottomSheetList;

export const BottomSheetHorarios = ({ isVisible, onOptionSelected }: Props) => {
  return (
    <BottomSheet isVisible={isVisible} modalProps={{}}>
      {list &&
        list.map((item: HorarioSheetProps) => {
          return (
            <HorarioSheetItem
              key={item.title}
              containerStyle={item.containerStyle}
              title={item.title}
              titleStyle={item.titleStyle}
              iconName={item.iconName}
              iconType={item.iconType}
              iconColor={item.iconColor}
              onPress={() => onOptionSelected(item.title)}
            />
          );
        })}
    </BottomSheet>
  );
};
