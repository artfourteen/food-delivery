import { View } from 'react-native';
import { Container } from '@shared/ui/container';

import AuthImg from '@assets/img/auth/auth.svg';
import { CustomText } from '@shared/ui/custom-text';
import { useRouter } from 'expo-router';
import { CustomInput } from '@shared/ui/input/custom-input';
import { CustomButton } from '@shared/ui/custom-button';
import { PasswordInput } from '@shared/ui/input/password-input';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pt-40 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center text-black">
                Welcome Back
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                Hello, sign in to continue! Or{' '}
                <CustomText
                  onPress={() => router.push('/(auth)/register')}
                  className="text-orange-400"
                >
                  Create new account
                </CustomText>
              </CustomText>
            </View>

            <View className="gap-4">
              <View className="w-full gap-2">
                <CustomInput
                  keyboardType="email-address"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Email"
                />
                <PasswordInput
                  autoComplete="current-password"
                  placeholder="Password"
                  secureTextEntry
                />
              </View>

              <CustomButton>
                <CustomText className="text-white font-dm-sans-medium">
                  Sign in
                </CustomText>
              </CustomButton>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
