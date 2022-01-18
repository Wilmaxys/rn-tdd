import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import CenterScreen from "./screens/Center";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProfilScreen from "./screens/Profil";
import ModuleScreen from "./screens/Module";
import Colors from "./constants/color";

const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      {/* <CenterScreen /> */}
      {/* {content} */}
      {/* <GameOverScreen
        userNumber={0}
        roundsNumber={0}
        onRestart={ConfigureNewGameHandler}
      /> */}
      <NavigationContainer
        theme={{
          colors: {
            background: "transparent",
          },
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.backGrey,
            headerShown: false,
            tabBarStyle: {
              elevation: 0,
              borderColor: "transparent",
              shadowColor: "transparent",
              backgroundColor: Colors.backPrimary,
              borderRadius: 6,
              marginHorizontal: 20,
              marginVertical: 10,
            },
          }}
        >
          <Tab.Screen
            name="Centre"
            component={CenterScreen}
            options={{
              tabBarLabel: "Centre",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="apps" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Module"
            component={ModuleScreen}
            options={{
              tabBarLabel: "Module",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="browsers" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profil"
            component={ProfilScreen}
            options={{
              tabBarLabel: "Profil",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="body-sharp" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backSoft,
  },
});
