import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/private/home';
import SettingScreen from '../screens/private/settings';
import CustomDrawer from '../ui/molecules/customDrawer';
import BottomTabNavigator from './bottom-tab';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Feed" component={BottomTabNavigator} />
      <Drawer.Screen name="Feeds" component={HomeScreen} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
