import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function PrimaryButton({children, onPress, style}){
    return(
        <Pressable android_ripple={{color: "yellow"}} style={styles.buttonContainer} onPress={onPress}>
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 15,
        margin: 20,
        backgroundColor: 'skyblue',
    }
})