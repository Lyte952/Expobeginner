import { StyleSheet, View, Text, Pressable } from "react-native";
import { styles } from "../config/theme";


export default function Button({ label, theme }) {

    if(theme==='second'){
        return(
        <View style={styles.secondbuttonContainer}>
            <Pressable onPress={() => alert(`You pressed ${label}`)}>
                <Text style={styles.secondbuttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>  
        );
    }


    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert(`You pressed ${label}`)}>
                <Text style={styles.buttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}