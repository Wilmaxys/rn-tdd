import { View, StyleSheet, Image, Text } from "react-native";
import Colors from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import Notification from "../components/profil/Notification";
import { padEnd } from "core-js/core/string";

const ProfilScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/profil.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerTop}>
            <View>
              <Text style={styles.name}>John</Text>
              <Text style={styles.name}>Simon</Text>
            </View>
            <Ionicons name="settings" size={28} />
          </View>
          <View>
            <Text>Misogyne oui, mais antisémite non.</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomNotif}>
          <Notification />
          <Notification />
        </View>
        <View style={styles.bottomTabs}>
          <View style={{ ...styles.bottomTab, ...styles.bottomTabSelected }}>
            <Text
              style={{
                ...styles.bottomTabText,
                ...styles.bottomTabTextSelected,
              }}
            >
              Test
            </Text>
          </View>
          <View style={styles.bottomTab}>
            <Text style={styles.bottomTabText}>Test</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  top: {
    width: "100%",
    height: 170,
    backgroundColor: Colors.backSoft,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    position: "absolute",
    top: 20,
    left: 15,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    width: 150,
    height: 150,
    overflow: "hidden",
    marginVertical: 30,
  },
  contentContainer: {
    marginTop: 60,
    marginLeft: 190,
    right: 10,
  },
  contentContainerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
  },
  bottom: {
    marginHorizontal: 20,
  },
  bottomNotif: {
    flexDirection: "row",
    marginBottom: 10,
  },
  bottomTabs: {
    backgroundColor: Colors.backSoft,
    flexDirection: "row",
    borderRadius: 3,
  },
  bottomTab: {
    flex: 1,
    margin: 2,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
  },
  bottomTabSelected: {
    backgroundColor: "white",
  },
  bottomTabText: {
    color: Colors.backSoft,
    fontSize: 18,
  },
  bottomTabTextSelected: {
    color: Colors.font,
  },
});

export default ProfilScreen;
