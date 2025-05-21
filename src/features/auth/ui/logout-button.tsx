import { View } from 'react-native';
import { ChevronRight, LogOut } from 'lucide-react-native';
import { CustomButton, CustomText } from '@shared/ui';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('accessToken');
    router.push('/login');
  };

  return (
    <CustomButton
      variant="ghost"
      className="justify-between bg-white"
      onPress={handleLogout}
    >
      <View className="flex-row items-center gap-3 px-5 py-4">
        <LogOut size={18} color="#9ca3af" />

        <CustomText as="text-caption" className="font-dm-sans-medium">
          Logout
        </CustomText>
      </View>

      <ChevronRight color="#9ca3af" />
    </CustomButton>
  );
};
