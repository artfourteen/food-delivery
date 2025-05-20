import { ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui';
import { Container } from '@shared/ui';
import { CategoryCard } from '@entities/categories/ui';
import { mockCategories } from '@shared/constants';

export const CategoriesSection = () => {
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
            {mockCategories.map((category) => (
              <CategoryCard key={category} category={category} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
