import { StyleSheet, View } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default Control = () => {
  return (
    <View style={styles.controls}>
      <Entypo name="lock" size={26} color="gray" />
      <MaterialCommunityIcons name="fan" size={26} color="gray" />
      <FontAwesome5 name="bolt" size={26} color="gray" />
      <Ionicons name="car-sport-sharp" size={26} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
});
