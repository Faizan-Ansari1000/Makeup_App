import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Lunch() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Lunch Recipes</Text>
                <Text style={styles.subtitle}>Enjoy a hearty and flavorful lunch with these amazing recipes!</Text>
            </View>

            {/* Tikka Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Chicken Tikka</Text>
                <Image
                    source={{ uri: 'https://static.wixstatic.com/media/4bbc23_9c5b7baaebad446799a4a3951d23e4aa~mv2.jpg/v1/fill/w_980,h_979,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4bbc23_9c5b7baaebad446799a4a3951d23e4aa~mv2.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    Spicy and juicy chicken tikka is a treat for your taste buds. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 500g Chicken (boneless, cubes)</Text>
                <Text style={styles.list}>- 2 tbsp Yogurt</Text>
                <Text style={styles.list}>- 1 tbsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- 1 tsp Red Chili Powder</Text>
                <Text style={styles.list}>- 1 tsp Garam Masala</Text>
                <Text style={styles.list}>- Salt (to taste)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Marinate chicken with all ingredients and let it rest for 2 hours.
                    2. Grill or bake the chicken until cooked and slightly charred.
                    3. Serve hot with naan or rice!
                </Text>
            </View>

            {/* Qorma Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Chicken Qorma</Text>
                <Image
                    source={{ uri: 'https://masalasecret.com/wp-content/uploads/2024/01/IMG_1322-1-750x500.jpeg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A rich and aromatic curry perfect for lunch. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 500g Chicken</Text>
                <Text style={styles.list}>- 2 Onions (sliced)</Text>
                <Text style={styles.list}>- 1/2 cup Yogurt</Text>
                <Text style={styles.list}>- 1 tbsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- 1 tsp Garam Masala</Text>
                <Text style={styles.list}>- 1/2 tsp Turmeric Powder</Text>
                <Text style={styles.list}>- Salt (to taste)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Fry onions until golden and blend into a paste.
                    2. Cook chicken with ginger-garlic paste, spices, and yogurt.
                    3. Add onion paste and simmer until the chicken is tender.
                    4. Serve with rice or roti!
                </Text>
            </View>

            {/* Biryani Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Chicken Biryani</Text>
                <Image
                    source={{ uri: 'https://feastwithsafiya.com/wp-content/uploads/2021/09/easy-chicken-biryani.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A flavorful rice dish loved by everyone. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 500g Chicken</Text>
                <Text style={styles.list}>- 2 cups Basmati Rice</Text>
                <Text style={styles.list}>- 1/2 cup Yogurt</Text>
                <Text style={styles.list}>- 2 Onions (sliced)</Text>
                <Text style={styles.list}>- 2 Tomatoes (chopped)</Text>
                <Text style={styles.list}>- 1 tsp Red Chili Powder</Text>
                <Text style={styles.list}>- Whole Spices (Bay Leaf, Cloves, Cinnamon)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Marinate chicken with yogurt and spices for 1 hour.
                    2. Fry onions until golden and add chicken and tomatoes. Cook until chicken is tender.
                    3. Layer cooked rice and chicken mixture.
                    4. Cover and steam for 10 minutes. Serve hot!
                </Text>
            </View>

            {/* Pulao Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Chicken Pulao</Text>
                <Image
                    source={{ uri: 'https://img-global.cpcdn.com/recipes/1c2669ef464afef6/1200x630cq70/photo.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A mild and aromatic rice dish perfect for any day. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 500g Chicken</Text>
                <Text style={styles.list}>- 2 cups Basmati Rice</Text>
                <Text style={styles.list}>- 1 Onion (sliced)</Text>
                <Text style={styles.list}>- 1 tsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- Whole Spices (Bay Leaf, Cinnamon, Cloves)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Fry onions and spices until fragrant.
                    2. Add chicken and cook with ginger-garlic paste.
                    3. Add water, let it boil, and add rice.
                    4. Cook until rice is tender and serve with raita!
                </Text>
            </View>

            {/* Chicken Karahi Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Chicken Karahi</Text>
                <Image
                    source={{ uri: 'https://www.thenomadiccook.com/wp-content/uploads/2021/11/Chicken-Karahi_1.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A spicy and tangy chicken dish made in a wok. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 500g Chicken</Text>
                <Text style={styles.list}>- 3 Tomatoes (chopped)</Text>
                <Text style={styles.list}>- 1 Onion (chopped)</Text>
                <Text style={styles.list}>- 1 tbsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- 1 tsp Red Chili Powder</Text>
                <Text style={styles.list}>- Fresh Coriander (for garnish)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Heat oil and fry ginger-garlic paste.
                    2. Add chicken and cook until slightly golden.
                    3. Add tomatoes and cook until tender.
                    4. Add spices, mix well, and garnish with coriander. Serve hot!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#FFA500',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4B0082',
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
        textAlign: 'center',
    },
    recipeContainer: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        lineHeight: 22,
    },
    list: {
        fontSize: 16,
        color: '#4B0082',
        marginBottom: 5,
    },
});
