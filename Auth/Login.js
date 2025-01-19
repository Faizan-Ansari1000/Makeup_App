import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { loginUser } from "../config/Firebase/FirebaseFunctions";
import Toast from "react-native-toast-message";

export default function Login() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const login = async () => {
        setLoading(true);
        try {
            const res = await loginUser(model);
            console.log(res, "send");
            Toast.show({
                type: "success",
                text1: "Login",
                text2: "User is Successfully Logged In",
                position: "top",
            });
            setModel({ 'email': '', 'password': '' });
            navigation.navigate("Home");
            setModel({})
        } catch (err) {
            console.log(err, "error");
            Toast.show({
                type: "error",
                text1: "Email or password is incorrect. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#007bff" />
                </View>
            )}
            <Text style={styles.title}>Welcome Back!</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(e) => setModel({ ...model, email: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(e) => setModel({ ...model, password: e })}
            />
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    loaderContainer: {
        position: "absolute",
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    button: {
        backgroundColor: "purple",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});
