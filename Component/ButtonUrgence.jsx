import { Image, Text, TouchableOpacity, View } from "react-native";
import urgencebtn from "../Style/urgenceBtn.style";
import WhiteLogo from "../assets/logo_white.png";
import AddIcon from "../assets/add_icon.png";

function ButtonUrgence() {
  return (
    <TouchableOpacity style={urgencebtn.btn}>
      <View style={urgencebtn.logo}>
        <Image source={WhiteLogo} style={urgencebtn.logo_img} />
        <Text style={urgencebtn.logo_txt}>Le Sauveteur</Text>
      </View>
      <View style={urgencebtn.title}>
        <Image source={AddIcon} style={urgencebtn.title_img} />
        <Text style={urgencebtn.title_txt}>CRÉER UNE URGENCE</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ButtonUrgence;
