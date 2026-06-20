import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import AppButton from '../../components/MainButton';
import { styles } from '../../styles/create.styles';

export default function Create() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.input} />
      <TextInput placeholder="Content" style={[styles.input, { height: 100 }]} multiline />
      <AppButton
        title="Create"
        onPress={() => router.replace('/')}
      />
    </View>
  );
}