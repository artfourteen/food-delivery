import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { CustomButton } from '@shared/ui/custom-button';
import { Container } from '@shared/ui/container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../widgets/header';

export default function MainScreen() {
  const router = useRouter();

  const handleClear = async () => {
    await AsyncStorage.removeItem('hasSeenOnboarding');
    router.push('/onboarding');
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header />

      <Container>
        <View className="items-center justify-center gap-3">
          <Text>React Native Init</Text>
          <CustomButton onPress={() => router.push('/onboarding')}>
            <Text className="text-white">Onboarding</Text>
          </CustomButton>
          <CustomButton onPress={() => router.push('/(auth)/login')}>
            <Text className="text-white">Login</Text>
          </CustomButton>
          <CustomButton onPress={() => router.push('/(auth)/register')}>
            <Text className="text-white">Register</Text>
          </CustomButton>
          <CustomButton onPress={() => router.push('/(auth)/address')}>
            <Text className="text-white">Address</Text>
          </CustomButton>
          <CustomButton variant="secondary" onPress={handleClear}>
            <Text>Clear storage</Text>
          </CustomButton>
        </View>
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}
