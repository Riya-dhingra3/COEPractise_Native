import React, { useState } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useState(new Animated.Value(-300))[0]; // Start hidden (off-screen to the left)
  const opacityAnimation = useState(new Animated.Value(0))[0]; // Start with opacity 0

  const toggleMenu = () => {
    const toValueX = menuVisible ? -300 : 0; // Slide out or in
    const toValueOpacity = menuVisible ? 0 : 1; // Fade out or in

    // Set the menu visibility
    setMenuVisible(!menuVisible);

    // Start the animation
    Animated.parallel([
      Animated.timing(menuAnimation, {
        toValue: toValueX,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: toValueOpacity,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerIcon}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity>

      {/* Slide-in Menu */}
      <Animated.View
        style={[
          styles.menu,
          { transform: [{ translateX: menuAnimation }], opacity: opacityAnimation }, // Combine translateX and opacity
        ]}
      >
        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>Menu</Text>
          {/* Close Icon */}
          <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon}>
            <Ionicons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
    position: "relative",
    zIndex: 20,
    width: "100%",
    height: "100%",
  },
  hamburgerIcon: {
    backgroundColor: "#673AB7", // Red background for the hamburger icon
    padding: 15,
    borderRadius: 5,
    position: "absolute",
    top: 20,
    right: 10, // Ensure icon is on the right
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Adjust width of the menu
    height: 300, // Cover full screen height
    backgroundColor: "white",
    borderRightWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    zIndex: 20,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeIcon: {
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default HamburgerMenu;
