import { Container, CustomButton, CustomInput, CustomText } from '@shared/ui';
import { View } from 'react-native';

import AuthImg from '@assets/img/auth/auth.svg';

export default function RestoreScreen() {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center">
                Forgot your password?
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                We’ll send a reset link to your email
              </CustomText>
            </View>

            <View className="gap-4">
              <View className="w-full gap-2">
                <CustomInput
                  keyboardType="email-address"
                  inputMode="email"
                  placeholder="Email"
                />
              </View>

              <CustomButton>
                <CustomText className="text-white font-dm-sans-medium">
                  Send Reset Link
                </CustomText>
              </CustomButton>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
