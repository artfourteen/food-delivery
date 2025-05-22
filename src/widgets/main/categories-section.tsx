import { Pressable, ScrollView, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { CategoryCard } from '@entities/categories/ui';
import { categories } from '@shared/constants';
import { Dispatch, SetStateAction } from 'react';

interface CategoriesSectionProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  openSheet: () => void;
}

export const CategoriesSection = ({
  setSelectedCategory,
  openSheet,
}: CategoriesSectionProps) => {
  return (
    <Container>
      <View className="bg-white rounded-2xl">
        <View className="flex-row p-4 border-b border-gray-100">
          <CustomText as="text-caption" className="font-dm-sans-bold">
            Category
          </CustomText>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-grow p-4"
        >
          <View className="flex-row gap-5">
            {categories.map((category, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setSelectedCategory(category);
                  openSheet();
                }}
              >
                <CategoryCard key={category} category={category} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
