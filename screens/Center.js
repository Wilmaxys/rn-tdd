import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Colors from "../constants/color";
import Notification from "../components/center/Notification";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

const CenterScreen = (props) => {
  return (
    <ImageBackground
      source={require("../assets/frame.png")}
      imageStyle={{
        resizeMode: "repeat",
        overflow: "visible",
        backfaceVisibility: "visible",
        flex: 1,
        opacity: 0.3,
      }}
      style={styles.container}
    >
      <Header title="Activités" />
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.title}>Today</Text>
        <Notification />
        <Notification brown={true} />
        <Text style={styles.title}>Yesterday</Text>
        <Notification />
        <Notification brown={true} />
        <Notification />
        <Text style={styles.title}>11 May 2021</Text>
        <Notification />
        <Notification brown={true} />
        <Notification brown={true} />
      </ScrollView>
      <LinearGradient
        colors={["transparent", Colors.backSoft]}
        start={[0.5, 0.15]}
        end={[0.5, 0.4]}
        style={styles.footer}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  screen: {
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: Colors.font,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 150,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.backSoft,
  },
});

export default CenterScreen;
