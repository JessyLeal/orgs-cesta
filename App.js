import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta'

export default function App() {
  return (
    <SafeAreaView>
      {/* <Text>Aluura</Text> */}
      <StatusBar style="auto" />
      <Cesta></Cesta>
    </SafeAreaView>
  );
}
