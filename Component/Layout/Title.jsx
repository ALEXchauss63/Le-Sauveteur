import { Text } from "react-native";
import titletyle from "../../Style/titleStyle.style";

function Title({ title }) {
  const text = title.toUpperCase();
  return <Text style={titletyle.title}>{text}</Text>;
}
export default Title;
