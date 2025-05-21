import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = Constants.expoConfig?.extra?.API_URL;

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const authGet = async <T>(url: string) => {
  const token = await AsyncStorage.getItem('accessToken');

  if (!token) throw new Error('Missing auth token');

  return api.get<T>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;
