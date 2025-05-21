import { View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { useRouter } from 'expo-router';

import AuthImg from '@assets/img/auth/auth.svg';
import { RegisterForm } from '@features/auth/ui';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center">
                Hello! Create Account
              </CustomText>
              <CustomText as="text-body" className="text-gray-500 text-center">
                Already have an account?{' '}
                <CustomText
                  onPress={() => router.push('/(auth)/login')}
                  className="text-orange-400 active:opacity-80"
                >
                  Sign in
                </CustomText>
              </CustomText>
            </View>

            <RegisterForm />
          </View>
        </View>
      </Container>
    </View>
  );
}
