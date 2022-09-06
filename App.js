import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';
import {MainProvider} from './contexts/MainContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainProvider>
    <Navigator></Navigator>
      </MainProvider>
    </SafeAreaProvider>
  );
};

export default App;
