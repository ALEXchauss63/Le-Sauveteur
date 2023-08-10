import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import connexionStyle from "../Style/connexionStyle.style";
import HistoryBtn from "../assets/button_history.png";
import SosSmallbtn from "../assets/button_sos_small.png";
import ConnexionOff from "../assets/button_connexion_off.png";
import Header from "../Component/Layout/Header";
import MenuNav from "../Component/Layout/MenuNav";

function Connexion() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={connexionStyle.container}>
        <Header />
        <Text>Ceci est la page de connexion</Text>
      </SafeAreaView>
      <MenuNav
        connexion={ConnexionOff}
        sos={SosSmallbtn}
        history={HistoryBtn}
        stylebtn={connexionStyle.bar}
      />
      <View style={connexionStyle.footer}></View>
    </SafeAreaProvider>
  );
}
export default Connexion;
