import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Favorites from './screens/Favorites';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';

import colors from './utils/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
  <Ionicons name={icon} size={26} style={{ color: 'green' }} />
);

const ContactsScreens = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Contacts',
  },
);

const FavoritesScreens = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Favorites',
  },
);

const UserScreens = createStackNavigator(
  {
    User: {
      screen: User,
    },
    Options:{
      screen: Options,
    },
  },
  {
    initialRouteName: 'User',
    mode: 'modal',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Contacts: {
      screen: ContactsScreens,
    },
    Favorites: {
      screen: FavoritesScreens,
    },
    User: {
      screen: UserScreens,
    },
  },
  {
    initialRouteName: 'Contacts',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Contacts') {
          iconName = `md-list`;
        } else if (routeName === 'Favorites') {
          iconName = `md-star`;
        } else if (routeName === 'User') {
          iconName = 'md-person';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight,
      },
      showLabel: true,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null,
    },
  },
);

export default TabNavigator
