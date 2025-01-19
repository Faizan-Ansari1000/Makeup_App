import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { Menu, IconButton } from 'react-native-paper';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const categories = [
    { title: 'Breakfast', imageUrl: 'https://www.seriouseats.com/thmb/1cPyR2eEMu1XGJFP6PlgFcow1Gk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-scrambled-eggs-recipe-hero-01-1bb79c98c84f44d689f58d5484e23e59.jpg', navigateTo: 'BreakFast', subtitle: 'Start your day with energy!' },
    { title: 'Lunch', imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/butter-chicken-recipe.jpg', navigateTo: 'Lunch', subtitle: 'Hearty meals for the afternoon.' },
    { title: 'Dinner', imageUrl: 'https://www.foodiecrush.com/wp-content/uploads/2019/02/Salmon-Dinner-FoodieCrush.com-026-2.jpg', navigateTo: 'Dinner', subtitle: 'Relax with a delicious dinner.' },
    { title: 'Dessert', imageUrl: 'https://bakingamoment.com/wp-content/uploads/2020/01/IMG_8459-lemon-curd-recipe-square.jpg', navigateTo: 'Desert', subtitle: 'Indulge your sweet tooth!' },
    { title: 'Juices', imageUrl: 'https://bakingamoment.com/wp-content/uploads/2020/01/IMG_8459-lemon-curd-recipe-square.jpg', navigateTo: 'Juice', subtitle: 'Indulge your Juice!' },
];

export default function CategoriesScreen() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [highlightedCategory, setHighlightedCategory] = useState(null); // State for highlighted category

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    // Handle search
    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    // Handle category highlight
    const handleCategoryPress = (category) => {
        setHighlightedCategory(category.title);
        navigation.navigate(category.navigateTo);
    };

    // Filter categories based on search
    const filteredCategories = categories.filter(category =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Choose a Category</Text>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <IconButton
                            icon="dots-vertical"
                            size={24}
                            onPress={openMenu}
                        />
                    }
                >
                    <Menu.Item onPress={() => navigation.navigate('PostRecipe')} title="Your Recipe" />
                </Menu>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Display message if no categories found */}
            {searchQuery && filteredCategories.length === 0 && (
                <Text style={styles.noResultsText}>No categories found.</Text>
            )}

            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* If search query is empty, show all categories */}
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.card, highlightedCategory === category.title && styles.highlightedCard]} // Highlighting if match found
                            onPress={() => handleCategoryPress(category)}
                        >
                            <Image
                                source={{ uri: category.imageUrl }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={[styles.cardTitle, highlightedCategory === category.title && styles.highlightedText]}>
                                    {category.title}
                                </Text>
                                <Text style={styles.cardSubtitle}>{category.subtitle}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    // If search is empty, show all categories
                    categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.card, highlightedCategory === category.title && styles.highlightedCard]} // Highlighting if match found
                            onPress={() => handleCategoryPress(category)}
                        >
                            <Image
                                source={{ uri: category.imageUrl }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={[styles.cardTitle, highlightedCategory === category.title && styles.highlightedText]}>
                                    {category.title}
                                </Text>
                                <Text style={styles.cardSubtitle}>{category.subtitle}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    searchInput: {
        height: 45,
        paddingHorizontal: 15,
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#ccc',
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        marginVertical: 10,
    },
    scrollView: {
        paddingBottom: 20,
    },
    card: {
        paddingEnd: 13,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 40,
    },
    cardImage: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    cardContent: {
        flex: 1,
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6A0DAD',
        marginBottom: 5,
    },
    highlightedCard: {
        backgroundColor: '#006A6A', // Light purple background when highlighted
    },
    highlightedText: {
        color: 'white', // Highlighted text color
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'white',
    },
});
