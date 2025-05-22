import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

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

export const isOpenNow = (openFrom: string, openTo: string): boolean => {
  const now = new Date();

  const timeToMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = timeToMinutes(openFrom);
  const closeMinutes = timeToMinutes(openTo);

  if (openMinutes < closeMinutes) {
    return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
  } else {
    return nowMinutes >= openMinutes || nowMinutes < closeMinutes;
  }
};

export const dateToString = (date: string): string => {
  return dayjs(date).format('D MMMM YYYY, HH:mm');
};
