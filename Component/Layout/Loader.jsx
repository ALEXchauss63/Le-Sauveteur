import loaderStyle from "../../Style/loaderStyle.style";
import { View, ActivityIndicator } from "react-native";

function Loader() {
  return (
    <View style={loaderStyle.container}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
}
export default Loader;
