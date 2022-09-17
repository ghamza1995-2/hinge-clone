import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import tw from "twrnc";

import HomeScreen from "./screens/HomeScreen";
import MatchesScreen from "./screens/MatchesScreen";
import { Icon } from "@rneui/base";

import { store } from "./store/store";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                switch (route.name) {
                                    case "Home":
                                        iconName = "home";
                                        break;
                                    case "Matches":
                                        iconName = "message-square";
                                        break;
                                    default:
                                        iconName = "book-open";
                                        break;
                                }
                                return <Icon name={iconName} size={size} color={color} type="feather" />;
                            },
                            tabBarActiveTintColor: "white",
                            tabBarInactiveTintColor: "gray",
                            tabBarShowLabel: false,
                            tabBarStyle: {
                                backgroundColor: "#000",
                            },
                        })}
                        style={tw`bg-black`}
                    >
                        <Tab.Screen
                            options={{
                                headerShown: false,
                            }}
                            name="Home"
                            component={HomeScreen}
                        />
                        <Tab.Screen
                            options={{
                                headerShown: false,
                            }}
                            name="Matches"
                            component={MatchesScreen}
                        />
                    </Tab.Navigator>
                </SafeAreaProvider>
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({});
