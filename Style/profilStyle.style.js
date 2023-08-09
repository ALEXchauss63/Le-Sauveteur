import { StyleSheet } from "react-native";
import { backgroundColor, primaryColor } from "../Style/utils/color";

const profilStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: backgroundColor,
  },
  content: {
    flex: 3,
    marginHorizontal: 15,
  },
  txt: {
    color: primaryColor,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    height: 75,
    backgroundColor: primaryColor,
  },
});

export default profilStyle;
