import { bottomSheetStyles } from '@shared/constants';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  Container,
  CustomButton,
  CustomInput,
  CustomText,
  Divide,
  SheetHeader,
} from '@shared/ui';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const ChangePasswordSheet = forwardRef<BottomSheetMethods>((_, ref) => {
  const snapPoints = useMemo(() => ['100%'], []);
  const { top } = useSafeAreaInsets();

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      topInset={top}
      enablePanDownToClose
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
    >
      <BottomSheetView>
        <SheetHeader title="Change Password" />

        <View className="py-6">
          <Container className="max-w-[85%] justify-between h-full pb-28">
            <View className="gap-7">
              <View className="gap-3">
                <CustomText as="text-caption" className="text-gray-400">
                  Password
                </CustomText>

                <CustomInput />
              </View>

              <Divide />

              <View className="gap-3">
                <CustomText as="text-caption" className="text-gray-400">
                  New Password
                </CustomText>

                <CustomInput />
              </View>

              <Divide />

              <View className="gap-3">
                <CustomText as="text-caption" className="text-gray-400">
                  Confirm Password
                </CustomText>

                <CustomInput />
              </View>
            </View>

            <CustomButton>
              <CustomText className="text-white font-dm-sans-medium">
                Change settings
              </CustomText>
            </CustomButton>
          </Container>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});
ChangePasswordSheet.displayName = 'ChangePasswordSheet';
