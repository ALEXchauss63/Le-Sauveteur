import { TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import menuNavStyle from "../../Style/menuNavStyle.style";
import BtnConnextion from "../../assets/button_connexion.png";
import SoSBtn from "../../assets/button_sos.png";
import HistoryBtn from "../../assets/button_history.png";

function MenuNav() {
  const nav = useNavigation();

  //bloc de fonction lié à la navigation
  function navConnexion() {
    nav.navigate("Connexion");
  }

  function navHistory() {
    nav.navigate("Profil");
  }
  return (
    <View style={menuNavStyle.container}>
      <TouchableOpacity onPress={navConnexion}>
        <Image source={BtnConnextion} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={SoSBtn} style={menuNavStyle.sos} />
      </TouchableOpacity>

      <TouchableOpacity onPress={navHistory}>
        <Image source={HistoryBtn} />
      </TouchableOpacity>
    </View>
  );
}
export default MenuNav;
