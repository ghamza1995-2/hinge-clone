import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import tw from "twrnc";
import { clearMatches, selectMatches } from "../slices/matchSlice";
import { Avatar, Icon } from "@rneui/base";

const MatchesScreen = () => {
    const matches = useSelector(selectMatches);
    const dispatch = useDispatch();

    const HeaderComponent = (
        <View style={tw`py-10 flex flex-row justify-between items-center`}>
            <Text style={tw`font-semibold text-3xl`}>Matches</Text>
            <TouchableOpacity
                onPress={() => {
                    dispatch(clearMatches());
                }}
                style={tw`flex flex-row px-4 py-2 items-center bg-indigo-500 rounded-full`}
            >
                <Icon size={16} name="x" color="white" type="feather" />
                <Text style={tw`text-white font-bold ml-2 text-xs`}>Clear matches</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={tw`bg-white h-full`} edges={["top", "left", "right"]}>
            <View style={tw`px-4`}>
                <FlatList
                    ListHeaderComponent={HeaderComponent}
                    showsVerticalScrollIndicator={false}
                    data={matches}
                    keyExtractor={(item) => item.user.name}
                    renderItem={({ item }) => {
                        return (
                            <View style={tw`py-2 border-b border-gray-200 flex flex-row items-center`}>
                                <Avatar size={70} rounded source={{ uri: item.user.cards[0].image }} />
                                <View style={tw`ml-4`}>
                                    <Text style={tw`text-lg font-medium`}>{item.user.name}</Text>
                                    <Text style={tw`text-gray-400 text-sm`}>{item.messages[0]?.text}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;

const styles = StyleSheet.create({});
