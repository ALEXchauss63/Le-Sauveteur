import { StyleSheet } from "react-native";
import { backgroundColor } from "../Style/utils/color";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  txt: {
    zIndex: 1,
  },
  menu: {
    left: 25,
    bottom: 0,
  },
});
export default homeStyle;
