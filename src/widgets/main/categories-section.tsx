import { Pressable, ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Container } from '@shared/ui/container';
import { CategoryCard } from '@entities/categories/ui/category-card';

const mockCategories = [
  'Sandwich',
  'Pizza',
  'Burgers',
  'Sushi',
  'Pasta',
  'Salads',
  'Fried Chicken',
  'Tacos',
  'BBQ',
  'Seafood',
  'Desserts',
  'Ice Cream',
  'Vegan',
  'Breakfast',
  'Chinese',
  'Indian',
  'Thai',
  'Korean',
  'Middle Eastern',
  'Drinks',
  'Soups',
  'Steak',
  'Rice Bowls',
  'Noodles',
  'Fast Food',
  'Healthy',
];

export const CategoriesSection = () => {
  return (
    <Container>
      <View className="bg-white rounded-2xl">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
          <CustomText as="text-caption" className="font-dm-sans-bold">
            Category
          </CustomText>
          <Pressable>
            <CustomText as="text-caption2" className="font-dm-sans-medium">
              See all
            </CustomText>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-grow p-4"
        >
          <View className="flex-row gap-5">
            {mockCategories.map((category) => (
              <CategoryCard key={category} category={category} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
