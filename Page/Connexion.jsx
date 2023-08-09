import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../Component/Layout/Header";

function Connexion() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <Text>Ceci est la page de connexion</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Connexion;
