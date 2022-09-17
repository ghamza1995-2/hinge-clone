import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import tw from "twrnc";
import { useFonts } from "expo-font";

const PromptCard = ({ caption, bodyText }) => {
    const [fontsLoaded] = useFonts({
        "DM Serif Display": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            //
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`bg-white border border-gray-100 rounded-lg px-6 py-16 shadow-sm`} onLayout={onLayoutRootView}>
            <Text style={tw`font-semibold mb-4`}>{caption}</Text>
            <Text style={tw`font-bold` && { fontFamily: "DM Serif Display", fontSize: 30 }}>{bodyText}</Text>
        </View>
    );
};

export default PromptCard;

const styles = StyleSheet.create({});
