import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import connexionStyle from "../Style/connexionStyle.style";
import HistoryBtn from "../assets/button_history.png";
import SosSmallbtn from "../assets/button_sos_small.png";
import ConnexionOff from "../assets/button_connexion_off.png";
import Header from "../Component/Layout/Header";
import MenuNav from "../Component/Layout/MenuNav";
import Title from "../Component/Layout/Title";
import ConnexionForm from "../Component/Form/connexionForm";

function Connexion() {
  const nav = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={connexionStyle.container}>
        <Header />
        <Title title={"Connexion"} />
        <ConnexionForm />
        <View style={connexionStyle.btn}>
          <TouchableOpacity
            style={connexionStyle.createBtn}
            onPress={() => nav.navigate("Inscription")}
          >
            <Text style={connexionStyle.txt}>CRÉER UN COMPTE</Text>
          </TouchableOpacity>
        </View>
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
