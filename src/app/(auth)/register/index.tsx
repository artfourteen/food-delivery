import { View } from 'react-native';
import { Container } from '@shared/ui/container';

import AuthImg from '@assets/img/auth/auth.svg';
import { CustomText } from '@shared/ui/custom-text';
import { useRouter } from 'expo-router';
import { CustomInput } from '@shared/ui/input/custom-input';
import { CustomButton } from '@shared/ui/custom-button';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pt-40 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center text-black">
                Hello! Create Account
              </CustomText>
              <CustomText as="text-body" className="text-gray-500 text-center">
                Already have an account?{' '}
                <CustomText
                  onPress={() => router.push('/(auth)/login')}
                  className="text-orange-400"
                >
                  Sign in
                </CustomText>
              </CustomText>
            </View>

            <View className="gap-4">
              <View className="w-full gap-2">
                <CustomInput
                  placeholder="Your name"
                  autoComplete="username-new"
                />
                <CustomInput
                  keyboardType="email-address"
                  inputMode="email"
                  placeholder="Email"
                />
                <CustomInput
                  autoComplete="new-password"
                  placeholder="Password"
                  secureTextEntry
                />
              </View>

              <CustomButton>
                <CustomText className="text-white font-dm-sans-medium">
                  Sign up
                </CustomText>
              </CustomButton>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
