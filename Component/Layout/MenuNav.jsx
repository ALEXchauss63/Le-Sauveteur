import { TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import menuNavStyle from "../../Style/menuNavStyle.style";

function MenuNav({ connexion, sos, history, stylebtn, styleContainer }) {
  const nav = useNavigation();

  //bloc de fonction lié à la navigation
  function navConnexion() {
    nav.navigate("Connexion");
  }

  function navHistory() {
    nav.navigate("Profil");
  }
  return (
    <View style={[menuNavStyle.container, styleContainer]}>
      <TouchableOpacity onPress={navConnexion}>
        <Image source={connexion} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={sos} style={[menuNavStyle.sos, stylebtn]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={navHistory}>
        <Image source={history} />
      </TouchableOpacity>
    </View>
  );
}
export default MenuNav;
