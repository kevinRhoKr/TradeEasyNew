import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "./src/store/AuthContextNew";
import AuthPage from "./src/pages/AuthPage";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/components/NavBar";

export default function App() {
  const [authState, setAuthState] = useState({
    token: "",
    isLoggedIn: false,
  });

  return (
    // <ImageBackground source={image} style={styles.image}>
    <AuthContext.Provider value={[authState, setAuthState]}>
        <NavigationContainer options={{ headerShown: false }}>
          <View style={styles.container}>
            {authState.isLoggedIn ? <MyTabs /> : <AuthPage></AuthPage>}
          </View>
        </NavigationContainer>
    </AuthContext.Provider>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F5E8",
    fontFamily: "AppleSDGothicNeo-SemiBold",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
