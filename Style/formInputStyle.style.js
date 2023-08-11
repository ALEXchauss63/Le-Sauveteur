import { StyleSheet } from "react-native";
import { primaryColor, darkprimaryColor } from "./utils/color";

const inputStyle = StyleSheet.create({
  input: {
    borderWidth: 4,
    borderColor: primaryColor,
    borderRadius: 7.5,
    width: 318,
    height: 45,
    paddingLeft: 15,
    marginVertical: 5,
  },
});

export default inputStyle;
