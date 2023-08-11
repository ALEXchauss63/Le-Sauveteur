import { TextInput } from "react-native";
import inputStyle from "../Style/formInputStyle.style";

function FormInput({ placeholder, findData }) {
  return (
    <TextInput
      style={inputStyle.input}
      placeholder={placeholder}
      onSubmitEditing={findData}
    />
  );
}
export default FormInput;
