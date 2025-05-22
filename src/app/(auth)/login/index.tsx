import { Pressable, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { useRouter } from 'expo-router';
import { LoginForm } from '@features/auth/ui';

import AuthImg from '@assets/img/auth/auth.svg';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center">
                Welcome Back
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                Hello, sign in to continue! Or{' '}
                <CustomText
                  onPress={() => router.push('/(auth)/register')}
                  className="text-orange-400 under active:opacity-80"
                >
                  Create new account
                </CustomText>
              </CustomText>
            </View>

            <View className="gap-4">
              <LoginForm />

              <Pressable
                onPress={() => router.push('/(auth)/restore')}
                className="self-center active:opacity-80"
              >
                <CustomText
                  as="text-caption"
                  className="text-orange-400 font-dm-sans-medium"
                >
                  Forgot password?
                </CustomText>
              </Pressable>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
