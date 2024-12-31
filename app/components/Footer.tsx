import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSignup = () => {
        alert(`Signup email: ${email}`);
        setEmail('');
    };

    return (
        <View style={styles.footerContainer}>
            <View style={styles.legalSection}>
                <Text style={styles.legalText}>© 2024 Your Company. All rights reserved.</Text>
                <Text style={styles.legalText}>Privacy Policy | Terms of Service</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.socialSection}>
                    <Text style={styles.socialHeader}>Follow us:</Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <Ionicons name="logo-facebook" size={24} color="#3b5998" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="logo-instagram" size={24} color="#C13584" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contactSection}>
                    <Text style={styles.contactHeader}>Contact Us:</Text>
                    <Text style={styles.contactText}>Email: contact@yourcompany.com</Text>
                    <Text style={styles.contactText}>Phone: (123) 456-7890</Text>
                </View>
            </View>

            {/* <View style={styles.signupSection}>
                <Text style={styles.signupHeader}>Join our newsletter:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Button title="Sign Up" onPress={handleSignup} color="#673AB7" />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        paddingBottom: 30,
    },
    legalSection: {
        marginBottom: 20,
        alignItems: 'center',
    },
    legalText: {
        fontSize: 14,
        color: 'gray',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    socialSection: {
        alignItems: 'center',
    },
    socialHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 120,
    },
    contactSection: {
        alignItems: 'center',
    },
    contactHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contactText: {
        fontSize: 14,
        color: 'gray',
    },
    signupSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    signupHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default Footer;
