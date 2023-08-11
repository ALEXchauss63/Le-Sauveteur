import { StyleSheet } from "react-native";
import { primaryColor, darkprimaryColor, backgroundColor } from "./utils/color";

const inscriptionStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: backgroundColor,
  },
  content: {
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: 75,
    backgroundColor: primaryColor,
  },
  bar: {
    bottom: 0,
  },
  form: {
    justifyContent: "space-between",
    marginVertical: 10,
  },
  coBtn: {
    borderWidth: 4,
    borderColor: darkprimaryColor,
    backgroundColor: primaryColor,
    width: 318,
    height: 45,
    borderTopEndRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    borderTopLeftRadius: 22.5,
    marginVertical: 20,
  },
  txt: {
    textAlign: "center",
    marginVertical: 5,
    color: "white",
  },
});
export default inscriptionStyle;
