import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors, { tintColorDark} from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, SearchParamList, NotificationParamList, MessageParamList } from '../types';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';
import Profile from '../components/Profile';
import SettingsIcon from '../components/SettingsIcon';
import SearchComp from '../components/SearchComp';
import { SearchBar } from 'react-native-elements';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel:false }}>
      <BottomTab.Screen 
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color}

          
          />,
        }}
      />
      <BottomTab.Screen 
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-search" color={color} />,
        }}
      />
      <BottomTab.Screen 
        name="Notification"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications" color={color} />,
        }}
      />
      <BottomTab.Screen 
        name="Message"
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeScreenStack = createStackNavigator<HomeParamList>();

function HomeNavigator(){
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          headerTitle: () => <Ionicons name="logo-twitter" size={30} color={tintColorDark} /> , 
          headerLeft: Profile,
          headerRight: () => <Ionicons name="ios-color-wand" size={24} color={tintColorDark} style={{ paddingRight: 15}}/> , 
        }}
      />
    </HomeScreenStack.Navigator>
  )
}

const SearchScreenStack = createStackNavigator<SearchParamList>(); 

function SearchNavigator(){
  
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{ 
          headerTitle: () => <SearchComp />,
          headerLeft: Profile,
          headerRight: SettingsIcon,
        }} 
      />
    </SearchScreenStack.Navigator>
  )
}

const NotificationScreenStack = createStackNavigator<NotificationParamList>();

function NotificationNavigator(){
  return (
    <NotificationScreenStack.Navigator>
      <NotificationScreenStack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerTitle: "Notifications" }}/>
    </NotificationScreenStack.Navigator>
  )
}

const MessageScreenStack = createStackNavigator<MessageParamList>();

function MessageNavigator(){
  return (
    <MessageScreenStack.Navigator>
      <MessageScreenStack.Screen name="MessageScreen" component={MessageScreen} options={{ headerTitle: "Messages" }}/>
      <MessageScreenStack.Screen name="TabOneScreen"  component={TabOneScreen} options={{ headerTitle: 'Tab One Title' }}/>
    </MessageScreenStack.Navigator>
  )
}