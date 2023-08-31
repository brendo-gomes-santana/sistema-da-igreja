import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

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

