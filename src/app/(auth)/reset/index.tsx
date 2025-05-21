import { View } from 'react-native';
import { Container, CustomButton, CustomText, PasswordInput } from '@shared/ui';

import AuthImg from '@assets/img/auth/auth.svg';

export default function ResetScreen() {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center">
                Reset your password
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                At least 8 characters, with uppercase and lowercase letters
              </CustomText>
            </View>

            <View className="gap-4">
              <View className="w-full gap-2">
                <PasswordInput
                  autoComplete="new-password"
                  placeholder="New password"
                  secureTextEntry
                />
                <PasswordInput
                  autoComplete="new-password"
                  placeholder="Confirm password"
                  secureTextEntry
                />
              </View>

              <CustomButton>
                <CustomText className="text-white font-dm-sans-medium">
                  Update
                </CustomText>
              </CustomButton>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
