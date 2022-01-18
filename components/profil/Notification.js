import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/color";

const Notification = (props) => {
  return (
    <View style={styles.cardNotif}>
      <View style={styles.cardNotifTop}>
        <View style={styles.cardNotifTopVector}>
          <Ionicons name="boat" color="white" size={24} />
        </View>
        <View style={styles.cardNotifTopText}>
          <Text>Task2</Text>
          <Text>Completed</Text>
        </View>
      </View>
      <Text style={styles.cardNotifBottomText}>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardNotif: {
    backgroundColor: Colors.backSoft,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  cardNotifTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardNotifTopVector: {
    backgroundColor: Colors.backSoft,
    borderRadius: 2,
    padding: 5,
  },
  cardNotifTopText: {
    fontSize: 16,
    marginLeft: 10,
  },
  cardNotifBottomText: {
    paddingVertical: 5,
    fontSize: 34,
    color: Colors.font,
    marginLeft: 5,
  },
});

export default Notification;
