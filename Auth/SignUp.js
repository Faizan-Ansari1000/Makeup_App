import React, { useState } from 'react';
import { Image, TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import app from "../config/Firebase/FirebaseConfig";
import { getDatabase, push, ref, set } from "firebase/database";
import Toast from "react-native-toast-message";
import { signUpUser } from "../config/Firebase/FirebaseFunctions";
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const db = getDatabase(app);
    const [model, setModel] = useState({});
    const [loader, setLoader] = useState(false);
    const navigation = useNavigation()

    const signup = async (e) => {
        e.preventDefault();
        if (!model.name || !model.email || !model.password) {
            return Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Validation error',
                text2: 'Both email and password are required!'
            });
        }

        setLoader(true);

        try {
            const reference = push(ref(db, 'users', model.id));
            await set(reference, model);
            await signUpUser(model);
            Toast.show({
                type: 'success',
                text1: 'SignUp',
                text2: 'Congrats, User is created'
            });
            navigation.navigate('Home')
            setModel({})
        } catch (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Something went wrong, please try again'
            });

        } finally {
            setLoader(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: 'https://i.sstatic.net/h6viz.gif' }} style={styles.logo} />
        </View>
        <Text style={styles.title1}>Developed by Faizan Ansari</Text>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
            placeholder="User name"
            placeholderTextColor="#888"
            style={styles.input}
            onChangeText={(e) => setModel({ ...model, name: e })}
        />
        <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}
            onChangeText={(e) => setModel({ ...model, email: e })}
        />
        <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
            onChangeText={(e) => setModel({ ...model, password: e })}
        />
        <TouchableOpacity style={styles.signupButton} onPress={signup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>
                Already have an account? <Text style={styles.loginLink}>Log In</Text>
            </Text>
        </TouchableOpacity>
        {loader && (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#6A0DAD" />
                <Text style={styles.loaderText}>Signing up...</Text>
            </View>
        )}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        justifyContent: 'flex-start',  // This keeps the form at the top
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginBottom: 20,  // Reduced the bottom margin to move form up
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    title1: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    signupButton: {
        width: '100%',
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signupButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    loaderText: {
        fontSize: 16,
        color: '#888',
        marginLeft: 10,
    },

    loginText: {
        marginTop: 15,
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    loginLink: {
        color: '#6A0DAD',
        fontWeight: 'bold',
    }
});