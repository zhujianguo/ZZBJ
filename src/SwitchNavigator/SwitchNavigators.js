import { StackNavigator, SwitchNavigator } from 'react-navigation';
import AuthLoading from './AuthLoadingScreen';
import GuidePage from '../component/GuidePageComponent';
import QinShang from '../component/QinShangComponent';
import ZhuZi from '../component/ZhuZiComponent';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

 const AppStack = StackNavigator({ Home: {screen:GuidePage}, Other:{screen: QinShang} });
 const AuthStack = StackNavigator({ ZhuZi: {screen:ZhuZi }});

export default SwitchNavigators(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    
  }
);