import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import { useSelector, useDispatch } from "react-redux";

import { selectProspects, setCurrentProspect } from "../slices/matchSlice";
import { useEffect } from "react";

const Prospect = ({ user }) => {
    const listRef = useRef(null);
    const users = useSelector(selectProspects);
    const dispatch = useDispatch();

    useEffect(() => {
        listRef.current.scrollToOffset({ offset: 0, animated: false });
    }, [user]);

    const HomeHeaderComponent = (
        <>
            <View style={tw`px-2`}>
                <View style={tw`mt-4 flex flex-row justify-end`}>
                    <TouchableOpacity style={tw`mr-6`}>
                        <Icon name="corner-down-left" color="black" type="feather" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="sliders" color="black" type="feather" />
                    </TouchableOpacity>
                </View>

                <View style={tw`py-6 flex flex-row justify-between items-center`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`font-semibold text-3xl mr-2`}>{user.name}</Text>
                        {user.activeNow && (
                            <View style={tw`flex flex-row items-center`}>
                                <Icon name="circle" size={10} style={tw`mr-1`} type="feather" color="green" />
                                <Text style={tw`text-xs text-green-500`}>Active now</Text>
                            </View>
                        )}
                        {user.justJoined && (
                            <View style={tw`px-2 pt-1 h-6 mt-2 bg-indigo-500 rounded-full`}>
                                <Text style={tw`text-xs text-white font-semibold`}>Just Joined</Text>
                            </View>
                        )}
                    </View>

                    <TouchableOpacity>
                        <Icon name="more-horizontal" color="black" type="feather" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );

    const HomeFooterComponent = (
        <View style={tw`mb-28`}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    listRef.current.scrollToOffset({ offset: 0, animated: true });
                }}
                style={tw`p-4 bg-white w-full rounded-xl`}
            >
                <Text style={tw`mx-auto text-xs font-bold`}>Back to Top</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={tw`bg-gray-100 h-full`} edges={["top", "left", "right"]}>
            <View style={tw`px-4`}>
                <FlatList
                    ref={listRef}
                    ListHeaderComponent={HomeHeaderComponent}
                    ListFooterComponent={HomeFooterComponent}
                    showsVerticalScrollIndicator={false}
                    data={user.cards}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                {item.stats ? (
                                    <StatsCard key={item.id} stats={item.stats} />
                                ) : (
                                    <Card
                                        key={item.id}
                                        caption={item.caption}
                                        imageSrc={item.image}
                                        bodyText={item.bodyText}
                                    />
                                )}
                            </>
                        );
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        const nextIndex = users.indexOf(user) + 1;
                        if (nextIndex > users.length - 1) {
                            dispatch(setCurrentProspect(users[0]));
                        } else {
                            dispatch(setCurrentProspect(users[nextIndex]));
                        }
                    }}
                    style={tw`shadow-xl p-4 bg-white rounded-full absolute left-4 bottom-4 z-50`}
                >
                    <Icon size={30} name="x" type="feather" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Prospect;

const styles = StyleSheet.create({});
