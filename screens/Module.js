import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Colors from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Card from "../components/module/Card";

const ModuleScreen = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title="Modules" />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons style={styles.inputVector} size={24} name="search" />
            <TextInput
              blurOnSubmit
              placeholder="test"
              autoCapitilize={false}
              autoCorrect={false}
              style={styles.input}
            />
          </View>
          <ScrollView style={{ flex: 1 }}>
            <Text onStartShouldSetResponder={() => true} style={styles.title}>
              Récents
            </Text>
            <View
              onStartShouldSetResponder={() => true}
              style={styles.cardContainer}
            >
              <Card />
              <Card />
              <Card />
            </View>
            <Text style={styles.title} onStartShouldSetResponder={() => true}>
              Modules
            </Text>
            <View
              onStartShouldSetResponder={() => true}
              style={styles.cardContainer}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    borderColor: Colors.backSoftGreen,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 10,
    flex: 1,
  },
  inputVector: {
    color: Colors.backSoftGreen,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.font,
    marginVertical: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ModuleScreen;
