import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export async function handleError(error: unknown): Promise<string> {
  if (error instanceof AxiosError) {
    console.error('[Axios error]', error.response?.data || error.message);

    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    if (
      error.response?.data?.statusCode === 401 ||
      error.response?.status === 401
    ) {
      await AsyncStorage.removeItem('accessToken');
    }

    return error.message;
  }

  if (error instanceof Error) {
    console.error('[Generic error]', error.message);
    return error.message;
  }

  console.error('[Unknown error]', error);
  return String(error);
}
