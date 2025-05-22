import { Pressable, View } from 'react-native';
import { Container } from '@shared/ui/container';

import GreenCheck from '@assets/img/icons/green-check.svg';
import { CustomText } from '@shared/ui/custom-text';

interface ModalProps {
  close: () => void;
  onPress?: () => void;
  title: string;
  subTitle: string;
  buttonText: string;
}

export const Modal = ({
  close,
  onPress,
  title,
  subTitle,
  buttonText,
}: ModalProps) => {
  return (
    <Pressable
      onPress={close}
      className="absolute z-[999999] w-full h-full bg-black/70 items-center justify-center"
    >
      <Pressable onPress={() => {}} className="max-w-[85%]">
        <Container>
          <View className="bg-white rounded-2xl p-6 items-center">
            <View className="mb-2">
              <GreenCheck />
            </View>

            <View className="mb-2">
              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-center"
              >
                {title}
              </CustomText>

              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-center text-gray-400"
              >
                {subTitle}
              </CustomText>
            </View>

            <Pressable
              onPress={onPress}
              className="active:opacity-80 py-2 w-full items-center justify-center"
            >
              <CustomText className="text-orange-400 font-bold">
                {buttonText}
              </CustomText>
            </Pressable>
          </View>
        </Container>
      </Pressable>
    </Pressable>
  );
};
