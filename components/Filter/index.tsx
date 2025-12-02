import { FilterStatus } from "@/app/types/FilterStatus";
import { styles } from "./styles";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { StatusIcon } from "../StatusIcon";


type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
    >
        <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
