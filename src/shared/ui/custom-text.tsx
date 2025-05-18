import { Text, TextProps } from 'react-native';
import { cn } from '@shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface CustomTextProps
  extends TextProps,
    VariantProps<typeof textVariants> {}

const textVariants = cva('font-dm-sans', {
  variants: {
    as: {
      h1: 'text-[2.125rem] leading-10',
      h2: 'text-[1.75rem] leading-9',
      h3: 'text-2xl',
      headline: 'text-3xl',
      'text-body': 'text-sm',
      'text-subhead': 'text-xl',
      'text-caption': 'text-base',
      'text-caption2': 'text-xs',
    },
  },
  defaultVariants: {
    as: 'text-body',
  },
});

export const CustomText = ({
  as = 'text-body',
  children,
  className,
  ...props
}: CustomTextProps) => {
  return (
    <Text className={cn(textVariants({ as, className }))} {...props}>
      {children}
    </Text>
  );
};
