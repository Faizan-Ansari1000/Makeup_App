
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Image, Modal, Button } from 'react-native';

export default function Juice() {
    const juices = [
        {
            name: 'Orange Juice',
            image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-68563947,width-600,resizemode-4/68563947.jpg',
            recipe: '1. Squeeze fresh oranges.\n2. Strain the juice to remove pulp.\n3. Serve chilled with ice.',
        },
        {
            name: 'Apple Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4PFLvKUcptf-dsgJvPEVxtAhTUyUb2MNKg&s',
            recipe: '1. Chop fresh apples.\n2. Blend with water.\n3. Strain and serve chilled.',
        },
        {
            name: 'Pineapple Juice',
            image: 'https://sandhyahariharan.co.uk/wp-content/uploads/2011/05/homemade-pineapple-juice-7-of-7.jpg',
            recipe: '1. Chop fresh pineapple into small pieces.\n2. Blend the pieces with water and a pinch of sugar.\n3. Strain the juice to remove pulp.\n4. Serve chilled with ice cubes.',
        },
        {
            name: 'Mango Juice',
            image: 'https://www.alphafoodie.com/wp-content/uploads/2022/02/How-to-make-Mango-Juice-Main1.jpeg',
            recipe: '1. Peel and chop ripe mangoes.\n2. Blend with water or milk.\n3. Add sugar or honey as per taste.\n4. Serve cold and garnish with mint leaves.',
        },
        {
            name: 'Grape Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XXaGBjNIGrNlcY0NZszxY9oT0YFulTZsqw&s',
            recipe: '1. Wash fresh grapes thoroughly.\n2. Blend the grapes with a little water.\n3. Strain to remove seeds and skin.\n4. Add sugar and serve chilled.',
        },
        {
            name: 'Watermelon Juice',
            image: 'https://lilluna.com/wp-content/uploads/2012/06/watermelon-juice-resize-3.jpg',
            recipe: '1. Chop fresh watermelon and remove seeds.\n2. Blend the watermelon pieces.\n3. Add a pinch of salt and a squeeze of lemon juice.\n4. Serve immediately, chilled.',
        },
        {
            name: 'Carrot Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbrSocQlDr5EutfuEFG9nTxvc1t1XdPzREw&s',
            recipe: '1. Peel and chop fresh carrots.\n2. Blend the carrots with a little water.\n3. Strain if needed, or serve with pulp for extra nutrition.\n4. Add a splash of orange juice for enhanced flavor.',
        },
        {
            name: 'Beetroot Juice',
            image: 'https://www.alphafoodie.com/wp-content/uploads/2024/06/Beet-Juice-Recipe-Main-1.jpeg',
            recipe: '1. Peel and chop fresh beetroots.\n2. Blend with water and a small piece of ginger.\n3. Strain if needed, and serve fresh.\n4. Add a squeeze of lemon juice for extra tang.',
        },
        {
            name: 'Pomegranate Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmdhjMgtXhkAYO1pJ_aFKjHCQmFwUdVhl8A&s',
            recipe: '1. Remove the pomegranate seeds.\n2. Blend the seeds gently.\n3. Strain to remove the pulp.\n4. Serve chilled with a pinch of salt or sugar.',
        },
        {
            name: 'Lemonade',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyXWktefsc0VexxaPNzB0EdS4hCwLr1nyag&s',
            recipe: '1. Squeeze fresh lemons.\n2. Mix lemon juice with water, sugar, and a pinch of salt.\n3. Stir until sugar dissolves.\n4. Serve with ice and a slice of lemon for garnish.',
        },
        {
            name: 'Cucumber Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrzqtvU5wz9rIQwjlgvs1gJ6FkK75pvgGeA&s',
            recipe: '1. Peel and chop fresh cucumbers.\n2. Blend with water and a few mint leaves.\n3. Strain and serve chilled.\n4. Add a squeeze of lime for a refreshing flavor.',
        },
        {
            name: 'Papaya Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4gOOZUK7pmrLOG-qeEXC7Aaj6HFmAD8SmA&s',
            recipe: '1. Peel and chop ripe papaya.\n2. Blend with water and a pinch of sugar or honey.\n3. Strain if needed, and serve chilled.\n4. Garnish with a slice of lime.',
        },
        {
            name: 'Strawberry Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9rna1yGj7MajCk2m1OR9KTorz6nbJ7kdyw&s',
            recipe: '1. Wash fresh strawberries.\n2. Blend with water and a little sugar.\n3. Strain and serve chilled.\n4. Add a dollop of cream for an extra treat.',
        },
        {
            name: 'Kiwi Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8xzbI545UONbKGHoyJLG1yFcTE7ezh3KLQ&s',
            recipe: '1. Peel and chop fresh kiwis.\n2. Blend with water and a little sugar.\n3. Strain if needed and serve chilled.\n4. Garnish with a slice of kiwi.',
        },
        {
            name: 'Guava Juice',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNkJrQJ7Y0jWJAXgFeu7xgM4N8uTExiR3Rg&s',
            recipe: '1. Wash and chop ripe guavas.\n2. Blend with water and a little sugar.\n3. Strain if needed to remove seeds.\n4. Serve fresh and chilled.',
        },
    ];

    const [selectedJuice, setSelectedJuice] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openRecipe = (juice) => {
        setSelectedJuice(juice);
        setModalVisible(true);
    };

    const closeRecipe = () => {
        setSelectedJuice(null);
        setModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Refreshing Juices</Text>
            <View style={{ marginBottom: 30 }}>
                {juices.map((x, i) => (
                    <TouchableOpacity key={i} style={styles.card} onPress={() => openRecipe(x)}>
                        <Image source={{ uri: x.image }} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{x.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal for showing recipes */}
            {selectedJuice && (
                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{selectedJuice.name}</Text>
                            <Image source={{ uri: selectedJuice.image }} style={styles.modalImage} />
                            <Text style={styles.modalRecipe}>{selectedJuice.recipe}</Text>
                            <Button title="Close" onPress={closeRecipe} color="#388E3C" />
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBF5',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#388E3C',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 15,
        margin: 10,
    },
    cardContent: {
        flex: 1,
        padding: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#388E3C',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#388E3C',
        marginBottom: 10,
    },
    modalImage: {
        width: '80%',
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
    },
    modalRecipe: {
        marginStart: 30,
        fontSize: 16,
        color: '#555',
        textAlign: 'start',
        marginBottom: 20,
    },
});

