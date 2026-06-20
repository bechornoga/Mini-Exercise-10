import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/login.styles';
import AppButton from '../components/MainButton';

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Foo News</Text>
      <Text style={styles.subtitle}>Stay update to date with the latest foo</Text>
      <TextInput placeholder="Email address" style={styles.input} placeholderTextColor="#8E8E93" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="#8E8E93" />
      {/* שינוי 2: שינוי טקסט של כפתור ההתחברות מ-"Let's go!" ל-"System Login" */}
      <AppButton
        title="System Login"
        onPress={() => router.replace('/(tabs)')}
      />
    </View>
  );
}