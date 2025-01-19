import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Dinner() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Dinner Recipes</Text>
                <Text style={styles.subtitle}>End your day with these flavorful and satisfying dinner dishes!</Text>
            </View>

            {/* Nihari Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Beef Nihari</Text>
                <Image
                    source={{ uri: 'https://untoldrecipesbynosheen.com/wp-content/uploads/2020/09/Nihari-new-hero-500x500.jpeg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A rich and spicy slow-cooked beef stew. Perfect with naan or paratha.
                </Text>
                <Text style={styles.list}>- 1 kg Beef (with bones)</Text>
                <Text style={styles.list}>- 2 tbsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- 1/2 cup Oil</Text>
                <Text style={styles.list}>- 1 tbsp Nihari Masala</Text>
                <Text style={styles.list}>- 1/4 cup Flour (for thickening)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Fry ginger-garlic paste in oil and add beef.
                    2. Add Nihari masala and cook for 2-3 minutes.
                    3. Add water and simmer for 3-4 hours.
                    4. Mix flour in water, add to the stew, and cook until thickened. Serve hot!
                </Text>
            </View>

            {/* Mutton Karahi Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Mutton Karahi</Text>
                <Image
                    source={{ uri: 'https://i.ytimg.com/vi/BXkhg1HzJaI/maxresdefault.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A classic, aromatic dish full of rich flavors. A perfect dinner choice.
                </Text>
                <Text style={styles.list}>- 1 kg Mutton</Text>
                <Text style={styles.list}>- 3 Tomatoes (chopped)</Text>
                <Text style={styles.list}>- 1 Onion (chopped)</Text>
                <Text style={styles.list}>- 1 tbsp Ginger-Garlic Paste</Text>
                <Text style={styles.list}>- 1 tsp Red Chili Powder</Text>
                <Text style={styles.list}>- Fresh Coriander (for garnish)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Heat oil and fry ginger-garlic paste.
                    2. Add mutton and cook until slightly browned.
                    3. Add tomatoes, spices, and cook until tender. Garnish with coriander and serve hot!
                </Text>
            </View>

            {/* Palak Paneer Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Palak Paneer</Text>
                <Image
                    source={{ uri: 'https://www.babsprojects.com/wp-content/uploads/2022/01/spinach-cheese-720x405.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A vegetarian favorite made with spinach and soft paneer cubes.
                </Text>
                <Text style={styles.list}>- 500g Spinach (blanched and blended)</Text>
                <Text style={styles.list}>- 200g Paneer (cubed)</Text>
                <Text style={styles.list}>- 1 Onion (chopped)</Text>
                <Text style={styles.list}>- 2 Tomatoes (chopped)</Text>
                <Text style={styles.list}>- 1 tsp Garam Masala</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Fry onions and tomatoes until soft.
                    2. Add spinach puree and spices, and simmer for 5 minutes.
                    3. Add paneer cubes, cook for 2-3 minutes, and serve hot with roti or naan.
                </Text>
            </View>

            {/* Fried Fish Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Crispy Fried Fish</Text>
                <Image
                    source={{ uri: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Fish-Fillet-1.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    Crispy, flavorful fish perfect for a light dinner.
                </Text>
                <Text style={styles.list}>- 500g Fish Fillets</Text>
                <Text style={styles.list}>- 1 tbsp Lemon Juice</Text>
                <Text style={styles.list}>- 1 tsp Red Chili Powder</Text>
                <Text style={styles.list}>- 1/2 cup Gram Flour</Text>
                <Text style={styles.list}>- Salt (to taste)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Marinate fish with lemon juice, salt, and chili powder.
                    2. Coat with gram flour and shallow fry until golden and crispy. Serve with tartar sauce or chutney!
                </Text>
            </View>

            {/* Vegetable Pulao Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Vegetable Pulao</Text>
                <Image
                    source={{ uri: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/veg-pulao-recipe.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A nutritious and easy-to-make rice dish loaded with vegetables.
                </Text>
                <Text style={styles.list}>- 2 cups Basmati Rice</Text>
                <Text style={styles.list}>- 1 cup Mixed Vegetables (peas, carrots, beans)</Text>
                <Text style={styles.list}>- 1 Onion (sliced)</Text>
                <Text style={styles.list}>- 1 tsp Garam Masala</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Fry onions and whole spices in oil.
                    2. Add vegetables, garam masala, and rice.
                    3. Cook with water until rice is fluffy and vegetables are tender. Serve hot with raita!
                </Text>
            </View>

            {/* Grilled Chicken Recipe */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>Grilled Chicken</Text>
                <Image
                    source={{ uri: 'https://static01.nyt.com/images/2020/09/06/dining/15JPGRILL1/15JPGRILL1-master768-v2.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    Tender, juicy grilled chicken seasoned to perfection.
                </Text>
                <Text style={styles.list}>- 500g Chicken Breasts</Text>
                <Text style={styles.list}>- 2 tbsp Olive Oil</Text>
                <Text style={styles.list}>- 1 tsp Garlic Powder</Text>
                <Text style={styles.list}>- 1 tsp Paprika</Text>
                <Text style={styles.list}>- Salt and Pepper (to taste)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Marinate chicken with olive oil, garlic powder, paprika, salt, and pepper.
                    2. Grill on medium heat for 6-8 minutes per side until fully cooked. Serve with salad or roasted veggies!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF',
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
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
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
        color: '#4682B4',
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
        color: '#4682B4',
        marginBottom: 5,
    },
});
