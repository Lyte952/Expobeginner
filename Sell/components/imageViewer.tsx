import { Image } from "react-native";
import { styles } from "../config/theme";

export default function ImageViewer ({ placeholderImageSource }) {
    return(
        <Image source={placeholderImageSource} style={styles.image} />
    );
};