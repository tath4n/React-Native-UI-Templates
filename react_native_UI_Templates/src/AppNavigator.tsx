import React from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HotelHomeScreen } from './hotel_booking';
import {
  HomeScene,
  DrawerContent,
  HelpScene,
  FeedbackScene,
  InviteFriendScene,
} from '.';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const homeScreens: React.FC = ({ navigation, style }: any) => {
//   return (
//     <View style={[{ flex: 1 }, style]}>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScene}
//           options={{
//             headerShown: false,
//             // headerTransparent: true,
//             // headerTitle: 'React-Native UI',
//             // headerTitleAlign: 'center',
//             // headerTitleStyle: { fontSize: 22, fontWeight: '700' },
//             // headerLeft: (props) => (
//             //   <Pressable
//             //     {...props}
//             //     style={{ padding: 8 }}
//             //     onPress={() => navigation.openDrawer()}
//             //     android_ripple={{ color: 'grey', radius: 20, borderless: true }}
//             //   >
//             //     <Icon name="menu" size={25} color="black" />
//             //   </Pressable>
//             // ),
//             // headerRight: () => {
//             //   return (
//             //     <Pressable
//             //       style={{ padding: 8 }}
//             //       onPress={() => {}}
//             //       android_ripple={{
//             //         color: 'grey',
//             //         radius: 20,
//             //         borderless: true,
//             //       }}
//             //     >
//             //       <Icon name="dashboard" size={25} color="black" />
//             //     </Pressable>
//             //   );
//             // },
//           }}
//         />
//         {/* <Stack.Screen
//           name="Hotel"
//           component={HotelHomeScreen}
//           options={{
//             headerTitle: 'Explore',
//             headerTitleAlign: 'center',
//             headerTitleStyle: { fontSize: 22, fontFamily: 'WorkSans-SemiBold' },
//             headerLeft: (props) => (
//               <Pressable
//                 {...props}
//                 style={{ padding: 8, marginLeft: 8 }}
//                 onPress={() => navigation.goBack()}
//                 android_ripple={{ color: 'grey', radius: 20, borderless: true }}
//               >
//                 <Icon name="arrow-back" size={25} color="black" />
//               </Pressable>
//             ),
//             headerRight: () => {
//               return (
//                 <View style={{ flexDirection: 'row' }}>
//                   <Icon
//                     style={{ paddingHorizontal: 8 }}
//                     name="favorite-border"
//                     size={25}
//                     color="black"
//                   />
//                   <Icon
//                     style={{ paddingHorizontal: 8 }}
//                     name="location-pin"
//                     size={25}
//                     color="black"
//                   />
//                 </View>
//               );
//             },
//           }}
//         /> */}
//       </Stack.Navigator>
//     </View>
//   );
// };

const DrawerNavigator: React.FC = () => {
  const window = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeBackgroundColor: '#5cbbff' }}
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerType="back"
      overlayColor="transparent"
      drawerStyle={{
        width: window.width * 0.75,
        backgroundColor: '#FFFEFEFE',
      }}
      sceneContainerStyle={styles.drawerSceneContainer}
      edgeWidth={window.width}
    >
      <Drawer.Screen name="Home" component={HomeScene} />
      <Drawer.Screen name="Help" component={HelpScene} />
      <Drawer.Screen name="Feedback" component={FeedbackScene} />
      <Drawer.Screen name="Invite Friend" component={InviteFriendScene} />
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <Stack.Navigator screenOptions={{ headerBackTitle: '', title: '' }}>
        <Stack.Screen
          name="MainDrawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        {/* <Drawer.Navigator
          drawerContentOptions={{ activeBackgroundColor: '#5cbbff' }}
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerType="back"
          overlayColor="transparent"
          drawerStyle={{
            width: window.width * 0.75,
            backgroundColor: '#FFFEFEFE',
          }}
          sceneContainerStyle={styles.drawerSceneContainer}
          edgeWidth={window.width}
        >
          <Drawer.Screen name="Home" component={homeScreens} />
          <Drawer.Screen name="Help" component={HelpScene} />
          <Drawer.Screen name="Feedback" component={FeedbackScene} />
          <Drawer.Screen name="Invite Friend" component={InviteFriendScene} />
        </Drawer.Navigator> */}
        <Stack.Screen
          name="Hotel"
          component={HotelHomeScreen}
          options={{
            headerShown: true,
            headerTitle: 'Explore',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 22, fontFamily: 'WorkSans-SemiBold' },
            headerLeft: (props) => (
              <Pressable
                {...props}
                style={{ padding: 8, marginLeft: 8 }}
                android_ripple={{ color: 'grey', radius: 20, borderless: true }}
              >
                <Icon name="arrow-back" size={25} color="black" />
              </Pressable>
            ),
            headerRight: () => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    style={{ paddingHorizontal: 8 }}
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                  <Icon
                    style={{ paddingHorizontal: 8 }}
                    name="location-pin"
                    size={25}
                    color="black"
                  />
                </View>
              );
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  drawerSceneContainer: {
    elevation: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});