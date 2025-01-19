import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Desert() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Dessert Recipes</Text>
                <Text style={styles.subtitle}>Indulge in these delightful desserts to satisfy your sweet tooth!</Text>
            </View>

            {/* Dessert Recipes */}
            {desserts.map((dessert, index) => (
                <View key={index} style={styles.recipeContainer}>
                    <Text style={styles.heading}>{dessert.name}</Text>
                    <Image source={{ uri: dessert.image }} style={styles.image} />
                    <Text style={styles.paragraph}>{dessert.description}</Text>
                    <Text style={styles.subheading}>Ingredients:</Text>
                    {dessert.ingredients.map((ingredient, i) => (
                        <Text key={i} style={styles.list}>- {ingredient}</Text>
                    ))}
                    <Text style={styles.subheading}>Steps:</Text>
                    <Text style={styles.paragraph}>{dessert.steps}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const desserts = [
    {
        name: "Chocolate Cake",
        image: "https://i.ytimg.com/vi/dsJtgmAhFF4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOHdjQu2TS7FszC-HXItN3UvFFDg",
        description: "A moist and rich chocolate cake that melts in your mouth.",
        ingredients: ["1 cup Flour", "1/2 cup Cocoa Powder", "1 cup Sugar", "2 Eggs", "1/2 cup Milk", "1/2 cup Butter"],
        steps: "Mix dry ingredients. Add eggs, milk, and melted butter. Bake at 180°C for 30 minutes. Cool and serve."
    },
    {
        name: "Cheesecake",
        image: "https://www.allrecipes.com/thmb/jBAjBzZCHM8ISEy4ZZvg3zTWYz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276069homemade-cheesecakeKim4x3-eb1f8032a2e54eff99bc1ad0f9d3a8d4.jpg",
        description: "A creamy and smooth cheesecake topped with fresh berries.",
        ingredients: ["200g Cream Cheese", "1 cup Sugar", "2 Eggs", "1 cup Crushed Biscuits", "1/4 cup Butter"],
        steps: "Prepare a biscuit crust. Blend cream cheese, sugar, and eggs. Pour over crust. Bake at 160°C for 40 minutes. Chill before serving."
    },
    {
        name: "Gulab Jamun",
        image: "https://i.ytimg.com/vi/cqM7MQ7r7Kg/maxresdefault.jpg",
        description: "Soft and sweet dumplings soaked in sugar syrup.",
        ingredients: ["1 cup Milk Powder", "2 tbsp Flour", "2 tbsp Butter", "1/2 tsp Baking Powder", "1 cup Sugar", "1 cup Water"],
        steps: "Make dough with milk powder, flour, and butter. Shape into balls and fry. Soak in sugar syrup for 30 minutes. Serve warm."
    },
    {
        name: "Tiramisu",
        image: "https://i.shgcdn.com/269063bf-d72d-41dd-b848-9b30657696e6/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        description: "A classic Italian dessert layered with coffee-soaked ladyfingers and creamy mascarpone.",
        ingredients: ["1 cup Mascarpone", "2 tbsp Coffee", "1/2 cup Sugar", "12 Ladyfingers", "1 cup Whipped Cream"],
        steps: "Dip ladyfingers in coffee. Layer with mascarpone and whipped cream. Chill for 3 hours and dust with cocoa powder before serving."
    },
    {
        name: "Fruit Salad",
        image: "https://www.thespruceeats.com/thmb/RWlJDC93TPg8Q3AMG31O31ZN6h0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-fruit-salad-3056969-hero-01-46ec46a61afa49bc80b432c055388648.jpg",
        description: "A refreshing mix of fresh seasonal fruits.",
        ingredients: ["1 cup Watermelon", "1 cup Mango", "1/2 cup Grapes", "1/2 cup Strawberries", "1 tbsp Honey"],
        steps: "Chop all fruits into bite-sized pieces. Drizzle with honey and mix well. Chill before serving."
    },
    {
        name: "Brownies",
        image: "https://www.allrecipes.com/thmb/Bf_v7CGEIk1T0KOYsBeGdcs56Lo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-9599-Quick-Easy-Brownies-ddmfs-4x3-697df57aa40a45f8a7bdb3a089eee2e5.jpg",
        description: "Fudgy and chewy brownies that are chocolatey and satisfying.",
        ingredients: ["1/2 cup Cocoa Powder", "1 cup Sugar", "2 Eggs", "1/2 cup Butter", "1/2 cup Flour"],
        steps: "Mix cocoa powder, sugar, and butter. Add eggs and flour. Bake at 175°C for 20 minutes. Cool and cut into squares."
    },
    {
        name: "Ice Cream Sundae",
        image: "https://www.wikihow.com/images/thumb/7/70/Make-an-Ice-Cream-Sundae-Step-10-Version-2.jpg/aid591007-v4-1200px-Make-an-Ice-Cream-Sundae-Step-10-Version-2.jpg",
        description: "A delightful sundae topped with chocolate syrup and sprinkles.",
        ingredients: ["2 scoops Vanilla Ice Cream", "1 tbsp Chocolate Syrup", "1 tbsp Sprinkles"],
        steps: "Scoop ice cream into a bowl. Drizzle chocolate syrup and top with sprinkles. Serve immediately."
    },
    {
        name: "Custard Trifle",
        image: "https://i.ytimg.com/vi/k_cU7X64wHQ/maxresdefault.jpg",
        description: "Layers of sponge cake, custard, and fruits.",
        ingredients: ["1 Sponge Cake", "1 cup Custard", "1/2 cup Fruits", "1/4 cup Jelly"],
        steps: "Layer sponge cake, custard, and fruits. Top with jelly and chill before serving."
    },
    {
        name: "Baklava",
        image: "https://miro.medium.com/v2/resize:fit:2000/1*N_YxiybILYIpX9QVblrXtA.jpeg",
        description: "A Middle Eastern dessert made with flaky pastry and nuts.",
        ingredients: ["1 pack Phyllo Pastry", "1 cup Mixed Nuts", "1 cup Sugar Syrup", "1/4 cup Butter"],
        steps: "Layer pastry sheets with nuts and butter. Bake at 180°C for 20 minutes. Drizzle with sugar syrup."
    },
    {
        name: "Mango Mousse",
        image: "https://carveyourcraving.com/wp-content/uploads/2019/05/best-eggless-mango-mousse_-500x375.jpg",
        description: "A light and creamy mousse with the flavor of ripe mangoes.",
        ingredients: ["1 cup Mango Puree", "1/2 cup Whipped Cream", "2 tbsp Sugar", "1/2 tsp Gelatin"],
        steps: "Dissolve gelatin in water. Mix with mango puree and sugar. Fold in whipped cream. Chill for 2 hours."
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5EE',
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
        color: '#FF4500',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        lineHeight: 22,
    },
    list: {
        fontSize: 16,
        color: '#FF4500',
        marginBottom: 5,
    },
});
