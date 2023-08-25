import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import SignIn from '../screens/Auth/SignIn';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.backgroundColor,
          tabBarIcon: ({color}: any) => {
            return <Icon name={'shirt-outline'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          title: '',
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.backgroundColor,
          tabBarIcon: ({color}: any) => {
            return <Icon name={'cart-outline'} size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={SignIn}
      />
      {/* add your another screen here using -> Stack.Screen */}
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeBase"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeBase"
          options={{headerShown: false}}
          component={MyTabs}
        />
        <Stack.Screen
          name="AuthBase"
          options={{headerShown: false}}
          component={Auth}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
