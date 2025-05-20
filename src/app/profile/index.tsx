import { ScrollView, View } from 'react-native';
import { Container, CustomButton, CustomText, ScreenHeader } from '@shared/ui';
import { ChevronRight, LogOut } from 'lucide-react-native';
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

export default function ProfileScreen() {
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
            <View className="w-24 h-24 rounded-full bg-orange-50" />

            <CustomText
              as="text-subhead"
              className="text-center font-dm-sans-medium"
            >
              Philippe Troussier
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

              <CustomButton
                variant="ghost"
                className="justify-between bg-white"
              >
                <View className="flex-row items-center gap-3 px-5 py-4">
                  <LogOut size={18} color="#9ca3af" />

                  <CustomText as="text-caption" className="font-dm-sans-medium">
                    Logout
                  </CustomText>
                </View>

                <ChevronRight color="#9ca3af" />
              </CustomButton>
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
