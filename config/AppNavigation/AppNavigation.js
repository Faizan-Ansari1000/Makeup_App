import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from "react-native-paper"
import Toast from "react-native-toast-message"
import CategoriesScreen from "../../Screens/CategoriesScreen"
import BreakFast from "../../Screens/BreakFast"
import Lunch from "../../Screens/Lunch"
import Dinner from "../../Screens/Dinner"
import Desert from "../../Screens/Desert"
import Juice from "../../Screens/Juice"
import PostRecipe from "../../Screens/PostRecipe"
import Home from "../../Screens/Home"
import SignUp from "../../Auth/SignUp"
import Login from "../../Auth/Login"




export default function AppNavigation() {

    const Stack = createStackNavigator()

    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
                    <Stack.Screen name="BreakFast" component={BreakFast} />
                    <Stack.Screen name="Lunch" component={Lunch} />
                    <Stack.Screen name="Dinner" component={Dinner} />
                    <Stack.Screen name="Desert" component={Desert} />
                    <Stack.Screen name="Juice" component={Juice} />
                    <Stack.Screen name="PostRecipe" component={PostRecipe} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </Provider>
    )

}