import { StyleSheet } from "react-native";
import { primaryColor, lightTxt } from "./utils/color";

const cardStyle = StyleSheet.create({
  container: {
    width: 318,
    height: 90,
    borderWidth: 5,
    borderColor: primaryColor,
    borderRadius: 7.5,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 25,
  },
  rubrique: {
    justifyContent: "flex-start",
    marginLeft: 5,
    alignSelf: "center",
  },
  rubrique2: {
    justifyContent: "flex-end",
    marginRight: 5,
    alignSelf: "center",
  },
  data: {
    color: lightTxt,
  },
  data2: {
    color: "#8D99AE",
  },
});
export default cardStyle;
