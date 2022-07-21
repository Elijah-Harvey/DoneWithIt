// import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import jwtDecode from "jwt-decode";
// import AppLoading from "expo-app-loading";
// import AppNavigator from "./app/navigation/AppNavigator";
// import AuthContext from "./app/auth/context";
// import AuthNavigator from "./app/navigation/AuthNavigator";
// import OfflineNotice from "./app/components/OfflineNotice";
// import authStorage from "./app/auth/storage";
// import navigationTheme from "./app/navigation/navigationTheme";
// import { navigationRef } from './app/navigation/rootNavigation';

// export default function App() {
//   const [user, setUser] = useState();

//   const [isReady, setIsReady] = useState(false);

//   const restoreToken = async () => {
//     const token = await authStorage.getToken();
//     if (!token) return;
//     setUser(jwtDecode(token));
//   };

//   const restoreUser = async () => {
//     const user = await authStorage.getUser();
//     if (user) setUser(user);
//   };

//   if (!isReady)
//     return (
//       <AppLoading
//         onFinish={() => setIsReady(true)}
//         startAsync={restoreUser}
//         onError={console.log("error")}
//       />
//     );

   
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <OfflineNotice />
//       <NavigationContainer ref={navigationRef} theme={navigationTheme}>
//         {user ? <AppNavigator /> : <AuthNavigator />}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }

import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTextInput from "./app/components/TextInput";

function App(props) {
return (
<View style={styles.container}>
  <AppTextInput />
</View>
);
}

const styles = StyleSheet.create({
container: {
  backgroundColor: "#000",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
}
})

export default App;