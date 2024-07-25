import { View, Text } from "react-native";
import { styles } from "../config/theme";
import ImageViewer from "../components/imageViewer";
import Button from "../components/Button";
import InputText from "../components/inputText";

const placeholderImage = require('../assets/cart.png');

export default function Login(){
    return(
      <View style={styles.container}>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ ...styles.text, marginBottom: 15 }}>Login</Text>
            <Text style={ styles.subtext }>Log in with your credentials</Text>
        </View>
        <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={placeholderImage} />
        </View>
        <View style={{ marginBottom: 30 }}>
            <View style={ styles.inputContainer }>
                <InputText label="Enter username or email" />
            </View>
            <View style={ styles.inputContainer }>
                <InputText label="Enter password" />
            </View>
        </View>
        <View style={styles.footerContainer}>
            <Button theme="main" label="Log in" />
            <View style={{ marginBottom: 50, marginTop: 20 }}>
                <Button theme="second" label="Don't have an account yet, Sign up" />
            </View>
        </View>
      </View>
    );
}