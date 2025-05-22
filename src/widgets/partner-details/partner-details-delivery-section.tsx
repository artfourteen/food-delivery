import { Pressable, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { ScrollView } from 'react-native-gesture-handler';
import { mockCombosBurger, mockCombosChicken } from '@shared/constants';
import { ItemCard, ItemComboCard } from '@entities/items/ui';
import { cn } from '@shared/lib/utils';
import { useItemsByPartnerQuery } from '@shared/hooks/query';
import { Dispatch, SetStateAction } from 'react';

interface PartnerDetailsDeliveryProps {
  handleOpen: () => void;
  partnerId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

export const PartnerDetailsDeliverySection = ({
  handleOpen,
  partnerId,
  setSelectedId,
}: PartnerDetailsDeliveryProps) => {
  const { data: items, isPending } = useItemsByPartnerQuery(partnerId);

  return (
    <View className="my-8">
      <View className="pb-5 border-b border-gray-100">
        <Container className="max-w-[85%]">
          <CustomText className="text-lg font-dm-sans-bold mb-4">
            Popular Items
          </CustomText>

          <ScrollView
            horizontal
            contentContainerClassName="flex-grow"
            showsHorizontalScrollIndicator={false}
          >
            {isPending ? (
              <CustomText className="py-9 text-center text-gray-400">
                Loading...
              </CustomText>
            ) : !items || !items.length ? (
              <CustomText className="py-9 text-center text-gray-400">
                Items not found
              </CustomText>
            ) : (
              <View className="flex-row items-center gap-2">
                {items.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() => {
                      handleOpen();
                      setSelectedId(item.id);
                    }}
                    className="active:opacity-80"
                  >
                    <ItemCard {...item} />
                  </Pressable>
                ))}
              </View>
            )}
          </ScrollView>
        </Container>
      </View>

      <View>
        <View className="border-t border-gray-100 py-5">
          <Container className="max-w-[85%]">
            <View className="gap-5">
              <CustomText className="text-lg font-dm-sans-bold">
                Hot Burger Combo
              </CustomText>

              <View>
                {mockCombosBurger.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={handleOpen}
                    className="active:opacity-80"
                  >
                    <ItemComboCard
                      {...item}
                      className={cn('py-5', {
                        'border-b border-gray-100':
                          mockCombosBurger.length - 1 !== index,
                        'pt-5 pb-0': mockCombosBurger.length - 1 === index,
                        'pt-0 pb-5': index === 0,
                      })}
                    />
                  </Pressable>
                ))}
              </View>
            </View>
          </Container>
        </View>

        <View className="border-t border-gray-100 py-5">
          <Container className="max-w-[85%]">
            <View className="gap-5">
              <CustomText className="text-lg font-dm-sans-bold">
                Fried Chicken
              </CustomText>

              <View>
                {mockCombosChicken.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={handleOpen}
                    className="active:opacity-80"
                  >
                    <ItemComboCard
                      {...item}
                      className={cn('py-5', {
                        'border-b border-gray-100':
                          mockCombosChicken.length - 1 !== index,
                        'pt-5 pb-0': mockCombosChicken.length - 1 === index,
                        'pt-0 pb-5': index === 0,
                      })}
                    />
                  </Pressable>
                ))}
              </View>
            </View>
          </Container>
        </View>
      </View>
    </View>
  );
};
