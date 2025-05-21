import { Pressable, PressableProps } from 'react-native';
import { cn } from '@shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface CustomButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  'flex flex-row items-center justify-center gap-2 w-full disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-orange-400 active:bg-orange-300',
        secondary: 'bg-gray-100 active:bg-gray-50',
        outline: 'bg-transparent active:opacity-70 border border-gray-200',
        ghost: 'bg-transparent active:bg-gray-100',
      },
      size: {
        default: 'py-4 px-4 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const CustomButton = ({
  children,
  className,
  variant,
  size,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Pressable>
  );
};
