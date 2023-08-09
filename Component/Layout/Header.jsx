import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import backBtn from "../../assets/back.png";
import LogoRed from "../../assets/logo_red.png";
import headerStyle from "../../Style/headerStyle.style";

function Header() {
  const nav = useNavigation();
  return (
    <View style={headerStyle.container}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Image source={backBtn} style={headerStyle.img} />
      </TouchableOpacity>

      <View style={headerStyle.logo}>
        <Image source={LogoRed} style={headerStyle.img} />
        <Text style={headerStyle.title}>Le sauveteur</Text>
      </View>
    </View>
  );
}
export default Header;
