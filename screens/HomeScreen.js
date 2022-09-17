import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentProspect, selectProspects, setCurrentProspect } from "../slices/matchSlice";
import Prospect from "../components/Prospect";

const HomeScreen = () => {
    const user = useSelector(selectCurrentProspect);
    return <Prospect user={user} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
