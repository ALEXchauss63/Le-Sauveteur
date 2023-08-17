import { StyleSheet } from "react-native";
import { primaryColor, darkprimaryColor } from "./utils/color";

const urgencebtn = StyleSheet.create({
  btn: {
    width: "100%",
    height: 186,
    backgroundColor: primaryColor,
    borderBottomWidth: 7,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: darkprimaryColor,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
    flex: 1,
  },
  logo_img: {
    width: 17,
    height: 20,
    marginRight: 5,
  },
  logo_txt: {
    fontFamily: "Rubik",
    color: "white",
    fontSize: 10,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    flex: 4,
    justifyContent: "center",
  },
  title_img: {
    width: 31,
    height: 31,
    marginRight: 10,
  },
  title_txt: {
    fontSize: 18,
    color: "white",
  },
});

export default urgencebtn;
