import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import climate from "../assets/images/climate.png";
import { useRouter } from "expo-router";
import { useState } from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const ClimateScreen = () => {
  const router = useRouter();

  const [temp, setTemp] = useState(50);
  const [power, setPower] = useState(true);
  const [vent, setVent] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        style={styles.climateImage}
        source={climate}
        resizeMode="contain"
      />

      <Pressable style={styles.goBack} onPress={() => router.back()}>
        <FontAwesome5 name="angle-left" size={24} color="#eee" />
      </Pressable>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: 500,
          color: "gray",
        }}
      >
        Interior 74℉ - Exterior 66℉
      </Text>
      <View style={styles.footer}>
        {/*  Left Climate Control */}
        <Pressable
          onPress={() => setPower(!power)}
          style={{ alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="power"
            size={26}
            color={power ? "#eee" : "gray"}
          />
          <Text style={styles.climateSwitch}>{power ? "On" : "Off"}</Text>
        </Pressable>

        {/* Middle Climate Control */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => setTemp((curr) => curr - 1)}>
            <FontAwesome5 name="angle-left" size={24} color="gray" />
          </Pressable>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 45,
              color: "#eee",
              fontWeight: "300",
            }}
          >
            {temp}°
          </Text>
          <Pressable onPress={() => setTemp((curr) => curr + 1)}>
            <FontAwesome5 name="angle-right" size={24} color="gray" />
          </Pressable>
        </View>

        {/* Right Climate Control */}
        <Pressable
          onPress={() => setVent(!vent)}
          style={{ alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="car-door"
            size={26}
            color={vent ? "#eee" : "gray"}
          />
          <Text style={styles.climateSwitch}>{vent ? "Open" : "Lock"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  climateImage: {
    width: "100%",
    height: "100%",
    marginTop: -150,
  },
  climateSwitch: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#eee",
  },
  footer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  goBack: {
    padding: 10,
    backgroundColor: "#2f3030",
    width: 50,
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    top: 50,
    left: 25,
  },
});

export default ClimateScreen;
