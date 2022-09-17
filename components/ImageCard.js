import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const ImageCard = ({ caption, imageSrc }) => {
    return (
        <View style={tw`bg-white border border-gray-100 rounded-lg shadow-sm z-50`}>
            {caption && (
                <View style={tw`h-1/6 px-6 py-6`}>
                    <Text style={tw`font-semibold`}>{caption}</Text>
                </View>
            )}
            <View style={caption ? tw`h-5/6 z-40` : tw`h-6/6`}>
                <Image
                    style={caption ? tw`h-full w-full rounded-b-lg` : tw`h-full w-full rounded-lg`}
                    source={{
                        uri: imageSrc,
                    }}
                />
            </View>
        </View>
    );
};

export default ImageCard;

const styles = StyleSheet.create({});
