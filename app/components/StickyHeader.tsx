import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HamburgerMenu from "./HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";

const StickyHeaderExample = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Welcome</Text>
                </View>
                <HamburgerMenu />
            </View>
            <ScrollView style={styles.scrollView}>
                    {[...Array(30)].map((_, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.itemText}>Item {index + 1}</Text>
                        </View>
                    ))}
                </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // height:1000,
        height:"100%"
    },
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        height:"30%",
        zIndex:5,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height:'100%',
        backgroundColor: "#673AB7",
        zIndex: 10,
        flex:1,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollView: {
        height:"58%",
        zIndex:-10,
        position:"relative"

    },
    item: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        // backgroundColor: 'red',
        marginHorizontal: 20,
        zIndex:1,
    },
    itemText: {
        fontSize: 18,
        color:'black'
    },
});

export default StickyHeaderExample;
