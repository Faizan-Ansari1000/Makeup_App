import { useState } from "react";
import {  ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function PostRecipe() {
    const [model, setModel] = useState({});
    const [postData, setPostData] = useState([]);

    const save = () => {
        console.log(model);
        setPostData([...postData, model]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Post Your Recipe</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Dish Name"
                    onChangeText={(e) => setModel({ ...model, dish: e })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quantity"
                    keyboardType="numeric"
                    onChangeText={(e) => setModel({ ...model, quantity: e })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredients"
                    onChangeText={(e) => setModel({ ...model, ingred: e })}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={save}>
                <Text style={styles.buttonText}>Save Recipe</Text>
            </TouchableOpacity>

            <ScrollView>
                <View style={styles.recipeList}>
                    {postData.map((x, i) => (
                        <View key={i} style={styles.recipeCard}>
                            <Text style={styles.recipeTitle}>{x.dish}</Text>
                            <Text style={styles.recipeDetails}>{x.quantity}</Text>
                            <Text style={styles.recipeDetails}>{x.ingred}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#6A0DAD',
    },
    formContainer: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#6A0DAD',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    recipeList: {
        marginTop: 20,
    },
    recipeCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    recipeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    recipeDetails: {
        fontSize: 14,
        color: '#666',
    },
});
