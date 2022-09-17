import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const StatsCard = ({ stats }) => {
    return (
        <View style={tw`bg-white border border-gray-100 rounded-lg shadow-sm p-2 mb-6`}>
            <ScrollView
                horizontal={true}
                style={tw`flex border-b border-gray-100 flex-row px-2 py-2`}
                showsHorizontalScrollIndicator={false}
            >
                <View style={tw`flex flex-row items-center border-r border-gray-100  py-2 pr-4`}>
                    <Icon size={20} name="calendar" type="feather" />
                    <Text style={tw`ml-4`}>{stats.age}</Text>
                </View>
                <View style={tw`flex flex-row items-center border-r border-gray-100  py-2 px-4`}>
                    <Icon size={20} name="user" type="feather" />
                    <Text style={tw`ml-4`}>{stats.gender}</Text>
                </View>
                <View style={tw`flex flex-row items-center border-r border-gray-100  py-2 px-4`}>
                    <Icon style={{ transform: [{ rotateZ: "90deg" }] }} size={20} name="straighten" type="material" />
                    <Text style={tw`ml-2`}>{stats.height}</Text>
                </View>
                <View style={tw`flex flex-row items-center border-r border-gray-100  py-2 px-4`}>
                    <Icon size={20} name="map-pin" type="feather" />
                    <Text style={tw`ml-4`}>{stats.location}</Text>
                </View>
            </ScrollView>

            <View style={tw`flex border-b border-gray-100 flex-row px-2 py-4`}>
                <Icon size={20} name="briefcase" type="feather" />
                <Text style={tw`ml-4`}>{stats.job}</Text>
            </View>

            <View style={tw`flex flex-row px-2 py-4`}>
                <Icon size={20} name="home" type="feather" />
                <Text style={tw`ml-4`}>{stats.hometown}</Text>
            </View>
        </View>
    );
};

export default StatsCard;

const styles = StyleSheet.create({});
