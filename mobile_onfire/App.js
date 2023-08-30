import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor='#000'
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

