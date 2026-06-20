import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/tabs._layout.styles';

export default function TabsLayout() {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.headerContainer} edges={['top']}>
        <View style={styles.headerContent}>
          {/* שינוי 1: שינוי כותרת האפליקציה בטאבים מ-"Foo News" ל-"Noga News" */}
          <Text style={styles.logoText}>Noga News</Text>
        </View>
      </SafeAreaView>
      
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{
          tabBarLabel: 'News feed',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/favicon.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }} />
        <Tabs.Screen name="create" options={{
          tabBarLabel: 'Create article',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/favicon.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }} />
        <Tabs.Screen
          name="article/[id]"
          options={{ href: null }}
        />
      </Tabs>
    </View>
  );
}