import { View } from "react-native";
import StickyHeaderExample from "./components/StickyHeader";
import AccessibleDropdownMenu from "./components/Dropdown";
import EnhancedDropdownMenu from "./components/EnhancedDropdown";

export default function App(){
    return(
        <View className="flex-1">
            <StickyHeaderExample />
            {/* <AccessibleDropdownMenu /> */}
            {/* <EnhancedDropdownMenu /> */}
        </View>
    )
}