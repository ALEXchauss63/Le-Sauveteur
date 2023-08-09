import { StyleSheet } from "react-native";
import { primaryColor } from "./utils/color";

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  img: {
    width: 32,
    height: 32,
  },
  title: {
    fontFamily: "Rubik",
    color: primaryColor,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default headerStyle;
