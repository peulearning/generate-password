import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';

import { IonIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


export function Routes(){

 return(
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{tabBarShowLabel: false, headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if(focused){
            return <IonIcons size={size} color={color} name="home" />
          }
          return <IonIcons size={size} color={color} name="home-outline" />
        }
      }} />

      <Tab.Screen name="passwords" component={Passwords} options={{ tabBarShowLabel: false, headerShown: false,
      tabBarIcon: ({focused, size, color}) => {
          if(focused){
            return <IonIcons size={size} color={color} name="lock-closed" />
          }
          return <IonIcons size={size} color={color} name="lock-closed-outline" />
        }}} />
    </Tab.Navigator>


 )
}
