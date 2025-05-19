import { View } from 'react-native';
import { SearchInput } from '@shared/ui/input';
import { Container } from '@shared/ui/container';
import { MapPinHouse, Settings2 } from 'lucide-react-native';
import { CustomText } from '@shared/ui/custom-text';
import { CustomButton } from '@shared/ui/custom-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export const Header = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <SafeAreaView>
      <View className="bg-white rounded-b-[30px] py-6">
        <Container>
          <View className="gap-6">
            <SearchInput
              onChangeText={(val) => setSearch(val)}
              placeholder="Search"
              defaultValue={search}
              onClear={() => setSearch('')}
            />

            <View className="flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-3">
                <MapPinHouse color="#979797" />

                <View className="gap-1.5">
                  <CustomText as="text-caption2" className="text-orange-400">
                    Delivery to
                  </CustomText>
                  <CustomText>1014 Prospect Vall</CustomText>
                </View>
              </View>

              <CustomButton variant="secondary" className="w-fit py-3">
                <Settings2 color="#979797" />
                <CustomText className="font-dm-sans-medium">Filter</CustomText>
              </CustomButton>
            </View>
          </View>
        </Container>
      </View>
    </SafeAreaView>
  );
};
