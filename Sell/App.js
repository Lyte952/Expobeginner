import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './config/theme';

import Login from './pages/login';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}


