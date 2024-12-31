import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure to install this package

const EnhancedDropdownMenu = () => {
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [menuAnimation] = useState(new Animated.Value(0));

    const toggleSubmenu = () => {
        setSubmenuVisible(!submenuVisible);
        Animated.timing(menuAnimation, {
            toValue: submenuVisible ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleSubmenu} style={styles.menuItem}>
                <Text style={styles.menuText}>Main Item</Text>
                <Ionicons name={submenuVisible ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
            </TouchableOpacity>
            {submenuVisible && (
                <Animated.View style={[styles.submenu, { height: menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 120] }), overflow: 'hidden' }]}>
                    <TouchableOpacity style={styles.submenuItem}>
                        <Ionicons name="person" size={20} color="#841584" />
                        <Text style={styles.submenuText}>Sub Item 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submenuItem}>
                        <Ionicons name="settings" size={20} color="#841584" />
                        <Text style={styles.submenuText}>Sub Item 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submenuItem}>
                        <Ionicons name="log-out" size={20} color="#841584" />
                        <Text style={styles.submenuText}>Sub Item 3</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#841584',
        borderRadius: 8,
    },
    menuText: {
        color: 'white',
        fontSize: 18,
    },
    submenu: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
    },
    submenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    submenuText: {
        fontSize: 16,
        marginLeft: 10,
    },
});

export default EnhancedDropdownMenu;