import { ToastConfig, BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      text1Style={{
        fontFamily: 'DMSans_600SemiBold',
      }}
      text2Style={{
        fontFamily: 'DMSans_600SemiBold',
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontFamily: 'DMSans_600SemiBold',
      }}
      text2Style={{
        fontFamily: 'DMSans_600SemiBold',
      }}
    />
  ),
};
