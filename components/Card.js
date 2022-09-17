import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ImageCard from "./ImageCard";
import PromptCard from "./PromptCard";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { addMatch, selectCurrentProspect, selectProspects, setCurrentProspect } from "../slices/matchSlice";

const Card = ({ id, caption, imageSrc, bodyText }) => {
    const dispatch = useDispatch();
    const users = useSelector(selectProspects);
    const currentUser = useSelector(selectCurrentProspect);

    return (
        <View style={tw`mb-6` && { minHeight: 200, maxHeight: 400, marginBottom: 20 }}>
            {imageSrc ? (
                <ImageCard caption={caption} imageSrc={imageSrc} />
            ) : (
                <PromptCard caption={caption} bodyText={bodyText} />
            )}

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    dispatch(addMatch({ user: currentUser, messages: [{ text: "Hi there" }] }));

                    const nextIndex = users.indexOf(currentUser) + 1;
                    if (nextIndex > users.length - 1) {
                        dispatch(setCurrentProspect(users[0]));
                    } else {
                        dispatch(setCurrentProspect(users[nextIndex]));
                    }
                }}
                style={tw`shadow-lg p-3 bg-white rounded-full absolute right-3 bottom-3 z-50`}
            >
                <Icon name="heart" color="#E2B1B1" type="feather" />
            </TouchableOpacity>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({});
