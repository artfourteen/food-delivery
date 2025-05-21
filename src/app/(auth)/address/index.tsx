import { Container, CustomButton, CustomText, SearchInput } from '@shared/ui';
import { View } from 'react-native';

import AddressImg from '@assets/img/auth/address.svg';

export default function AddressScreen() {
  return (
    <View className="bg-white flex-1 items-center">
      <Container>
        <View className="h-screen items-center gap-10 pt-36 relative">
          <AddressImg />

          <View className="items-center justify-center gap-2">
            <CustomText as="h3" className="text-center">
              Find Nearby Restaurants
            </CustomText>
            <CustomText className="text-gray-500 text-center">
              Enter your location or allow access to your location to find
              restaurants near you.
            </CustomText>
          </View>

          <View className="w-full gap-2">
            <CustomButton variant="secondary">
              <CustomText className="font-dm-sans-medium">
                Use current location
              </CustomText>
            </CustomButton>
            <SearchInput withIcon />
          </View>
        </View>
      </Container>
    </View>
  );
}
