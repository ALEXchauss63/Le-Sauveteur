import { View, Text, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import profilStyle from "../Style/profilStyle.style";
import HistoryBtnOff from "../assets/button_history_off.png";
import SosSmallbtn from "../assets/button_sos_small.png";
import ConnexionBtn from "../assets/button_connexion.png";
import Header from "../Component/Layout/Header";
import Title from "../Component/Layout/Title";
import MenuNav from "../Component/Layout/MenuNav";
import UrgenceCard from "../Component/UrgenceCard";

function Profil() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={profilStyle.container}>
        <Header />
        <ScrollView style={profilStyle.content}>
          <Title title={"Historique"} />
          <Text style={profilStyle.txt}>Vous avez déclaré n urgence(s) : </Text>
          <UrgenceCard />
        </ScrollView>
      </SafeAreaView>
      <MenuNav
        connexion={ConnexionBtn}
        sos={SosSmallbtn}
        history={HistoryBtnOff}
        stylebtn={profilStyle.bar}
      />
      <View style={profilStyle.footer}></View>
    </SafeAreaProvider>
  );
}
export default Profil;
