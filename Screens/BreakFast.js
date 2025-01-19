import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function BreakFast() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Breakfast Recipes</Text>
                <Text style={styles.subtitle}>Start your day with a delicious and healthy breakfast!</Text>
            </View>

            {/* Egg Fry Section */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>How to Fry an Egg</Text>
                <Image
                    source={{ uri: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/how-to-fry-an-egg-3-1200.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    Frying an egg is simple and quick! Here’s what you need:
                </Text>
                <Text style={styles.list}>- 1 Egg</Text>
                <Text style={styles.list}>- 1-2 tsp Oil or Butter</Text>
                <Text style={styles.list}>- A pinch of Salt</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Heat a non-stick pan on medium heat and add oil or butter.
                    2. Crack the egg gently into the pan, keeping the yolk intact.
                    3. Sprinkle a pinch of salt and cook for 2-3 minutes until the whites are set but the yolk remains runny.
                    4. Serve hot and enjoy with toast or on its own!
                </Text>
            </View>

            {/* Tea Section */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>How to Make Tea</Text>
                <Image
                    source={{ uri: 'https://static.toiimg.com/photo/71112734.cms' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A perfect cup of tea can refresh your morning! Here’s what you need:
                </Text>
                <Text style={styles.list}>- 1 cup Water</Text>
                <Text style={styles.list}>- 1 tsp Tea Leaves</Text>
                <Text style={styles.list}>- 1-2 tsp Sugar (as per taste)</Text>
                <Text style={styles.list}>- 1/2 cup Milk</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Boil 1 cup of water in a saucepan.
                    2. Add 1 tsp of tea leaves and let it simmer for 1-2 minutes.
                    3. Add sugar as per your taste and stir well.
                    4. Pour in 1/2 cup of milk and bring it to a boil.
                    5. Strain the tea into a cup and serve hot!
                </Text>
            </View>

            {/* Paratha Section */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>How to Make Paratha</Text>
                <Image
                    source={{ uri: 'https://i.ytimg.com/vi/nDKNXTc6qok/maxresdefault.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A crispy and golden paratha is a staple in many breakfasts. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 1 cup Wheat Flour</Text>
                <Text style={styles.list}>- Water (as required)</Text>
                <Text style={styles.list}>- 2 tsp Oil or Ghee</Text>
                <Text style={styles.list}>- A pinch of Salt</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Mix wheat flour, salt, and water to form a soft dough. Let it rest for 15-20 minutes.
                    2. Roll a small portion of dough into a circle.
                    3. Apply oil or ghee, fold it into a triangle, and roll it again gently.
                    4. Heat a tawa (griddle) and cook the paratha on both sides until golden, applying oil or ghee as needed.
                    5. Serve hot with yogurt, pickles, or curry!
                </Text>
            </View>

            {/* Coffee Section */}
            <View style={styles.recipeContainer}>
                <Text style={styles.heading}>How to Make Coffee</Text>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG' }}
                    style={styles.image}
                />
                <Text style={styles.paragraph}>
                    A creamy and flavorful coffee is the perfect start to your day. Here’s what you need:
                </Text>
                <Text style={styles.list}>- 1 cup Milk</Text>
                <Text style={styles.list}>- 1 tsp Instant Coffee Powder</Text>
                <Text style={styles.list}>- 1-2 tsp Sugar (as per taste)</Text>
                <Text style={styles.paragraph}>
                    Steps:
                    1. Heat 1 cup of milk in a saucepan until it starts to simmer.
                    2. In a cup, mix coffee powder and sugar with a little hot milk to form a smooth paste.
                    3. Pour the remaining hot milk into the cup while stirring continuously.
                    4. Serve hot and enjoy your creamy coffee!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E7',
    },
    header: {
        backgroundColor: '#FFCC00',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6A0DAD',
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
        color: '#6A0DAD',
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
        color: '#6A0DAD',
        marginBottom: 5,
    },
});
