import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { forwardRef, useMemo } from 'react';
import {
  Container,
  CustomButton,
  CustomInput,
  CustomText,
  Divide,
  SheetHeader,
} from '@shared/ui';
import { bottomSheetStyles } from '@shared/constants';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useUser } from '@shared/hooks';

export const ChangeAccountInfoSheet = forwardRef<BottomSheetMethods>(
  (_, ref) => {
    const { username, email } = useUser();
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
          <SheetHeader title="Account information" />

          <View className="py-6">
            <Container className="max-w-[85%] justify-between h-full pb-28">
              <View className="gap-7">
                <View className="gap-3">
                  <CustomText as="text-caption" className="text-gray-400">
                    Full Name
                  </CustomText>

                  <CustomInput value={username} />
                </View>

                <Divide />

                <View className="gap-3">
                  <CustomText as="text-caption" className="text-gray-400">
                    Email Address
                  </CustomText>

                  <CustomInput value={email} />
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
  },
);
ChangeAccountInfoSheet.displayName = 'ChangeAccountInfoSheet';
