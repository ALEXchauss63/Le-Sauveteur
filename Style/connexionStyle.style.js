import { StyleSheet } from "react-native";
import { primaryColor, backgroundColor } from "./utils/color";

const connexionStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: backgroundColor,
  },
  footer: {
    width: "100%",
    height: 75,
    backgroundColor: primaryColor,
  },
  bar: {
    bottom: 0,
  },
});
export default connexionStyle;
