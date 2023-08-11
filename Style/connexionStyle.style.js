import { StyleSheet } from "react-native";
import { primaryColor, backgroundColor, darkprimaryColor } from "./utils/color";

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
  btn: {
    marginTop: 250,
    flex: 1,
    alignItems: "center",
  },
  createBtn: {
    borderWidth: 4,
    borderColor: darkprimaryColor,
    backgroundColor: primaryColor,
    width: 318,
    height: 45,
    borderTopLeftRadius: 7.5,
    borderTopEndRadius: 22.5,
    borderBottomRightRadius: 7.5,
  },
  txt: {
    textAlign: "center",
    marginVertical: 5,
    color: "white",
  },
});
export default connexionStyle;
