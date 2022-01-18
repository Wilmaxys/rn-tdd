import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/color";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <View style={styles.headerVectorContainer}>
          <Ionicons
            style={styles.headerVectorIcon}
            name="menu"
            color={Colors.font}
            size={30}
          />
          <Ionicons
            style={styles.headerVectorIcon}
            name="apps"
            color={Colors.font}
            size={22}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    width: "100%",
    height: 80,
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // elevation: 5,
    justifyContent: "flex-end",
  },
  headerContent: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.font,
    fontWeight: "700",
  },
  headerVectorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerVectorIcon: {
    marginLeft: 5,
  },
});

export default Header;
