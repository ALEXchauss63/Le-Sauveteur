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
  miniMap: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  miniMap_icon: {
    width: 52,
    height: 45,
    marginRight: 15,
    marginTop: 10,
  },
  menu: {
    left: 25,
    bottom: 0,
  },
});
export default homeStyle;
