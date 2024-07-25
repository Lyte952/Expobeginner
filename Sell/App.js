import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './config/theme';

import SignUp from './pages/signup';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SignUp />
      <StatusBar style="auto" />
    </View>
  );
}


