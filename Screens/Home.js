import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={{ uri: 'https://img.freepik.com/premium-photo/aroma-herb-spice_773918-264.jpg?semt=ais_hybrid' }} // آپ یہاں اپنی مرضی کا بیک گراؤنڈ امیج رکھ سکتے ہیں
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')} style={styles.button}>
                    <Text style={styles.text}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // اگر بیک گراؤنڈ امیج کا ریزولوشن بہتر ہو تو اس کا اثر زیادہ اچھا ہو گا
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#6A0DAD', // Purple background for the button
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5, // For Android shadow effect
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
