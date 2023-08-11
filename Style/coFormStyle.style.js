import { StyleSheet } from "react-native";
import { primaryColor, darkprimaryColor } from "./utils/color";

const coFormStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  form: {
    justifyContent: "space-between",
    flex: 1,
  },
  input: {
    borderWidth: 4,
    borderColor: primaryColor,
    borderRadius: 7.5,
    width: 318,
    height: 45,
    paddingLeft: 15,
    marginVertical: 15,
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

export default coFormStyle;
