import { ScrollView, View } from 'react-native';
import { Container, CustomText, ScreenHeader } from '@shared/ui';
import {
  ProfileGeneralSection,
  ProfileMoreSection,
  ProfileNotificationSection,
} from '@widgets/profile';
import {
  ChangeAccountInfoSheet,
  ChangePasswordSheet,
  PaymentMethodsSheet,
} from '@features/user/ui';
import { useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { LogoutButton } from '@features/auth/ui';
import { useUser } from '@shared/hooks';

export default function ProfileScreen() {
  const { username } = useUser();

  const changeAccountSheetRef = useRef<BottomSheetMethods>(null);
  const changePasswordSheetRef = useRef<BottomSheetMethods>(null);
  const paymentMethodsSheetRef = useRef<BottomSheetMethods>(null);

  const handleChangeAccountInfoSheetOpen = () =>
    changeAccountSheetRef.current?.expand();

  const handleChangePasswordSheetOpen = () =>
    changePasswordSheetRef.current?.expand();

  const handlePaymentMethodsSheetOpen = () =>
    paymentMethodsSheetRef.current?.expand();

  return (
    <>
      <View>
        <ScreenHeader title="Profile" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center justify-center bg-white py-6 gap-3">
            <View className="w-24 h-24 rounded-full bg-orange-50 capitalize items-center justify-center border border-gray-200">
              <CustomText as="h1">{username && username[0]}</CustomText>
            </View>

            <CustomText
              as="text-subhead"
              className="text-center font-dm-sans-medium"
            >
              {username}
            </CustomText>
          </View>

          <Container>
            <View className="gap-4 mt-10 mb-32">
              <ProfileGeneralSection
                openAccountInfoSheet={handleChangeAccountInfoSheetOpen}
                openChangePasswordSheet={handleChangePasswordSheetOpen}
                openPaymentMethodsSheet={handlePaymentMethodsSheetOpen}
              />

              <ProfileNotificationSection />

              <ProfileMoreSection />

              <LogoutButton />
            </View>
          </Container>
        </ScrollView>
      </View>

      <ChangeAccountInfoSheet ref={changeAccountSheetRef} />
      <ChangePasswordSheet ref={changePasswordSheetRef} />
      <PaymentMethodsSheet ref={paymentMethodsSheetRef} />
    </>
  );
}
