import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import inscriptionStyle from "../Style/inscriptionStyle.style";
import HistoryBtn from "../assets/button_history.png";
import SosSmallbtn from "../assets/button_sos_small.png";
import ConnexionOff from "../assets/button_connexion_off.png";
import Header from "../Component/Layout/Header";
import MenuNav from "../Component/Layout/MenuNav";
import Title from "../Component/Layout/Title";
import FormInput from "../Component/FormInput";

function Inscription() {
  const nav = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={inscriptionStyle.container}>
        <Header />
        <View style={inscriptionStyle.content}>
          <Title title={"Inscription"} />
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"Nom"} />
            <FormInput placeholder={"Prénom"} />
          </View>
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"E-mail"} />
            <FormInput placeholder={"Numéri de téléphone"} />
          </View>
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"Mot de passe"} />
            <FormInput placeholder={"Prénom"} />
          </View>
          <View>
            <TouchableOpacity
              style={inscriptionStyle.coBtn}
              onPress={() => nav.navigate("Home")}
            >
              <Text style={inscriptionStyle.txt}>ENVOYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <MenuNav
        connexion={ConnexionOff}
        sos={SosSmallbtn}
        history={HistoryBtn}
        stylebtn={inscriptionStyle.bar}
      />
      <View style={inscriptionStyle.footer}></View>
    </SafeAreaProvider>
  );
}
export default Inscription;
