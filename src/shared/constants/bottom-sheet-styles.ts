import { StyleSheet } from 'react-native';

export const bottomSheetStyles = StyleSheet.create({
  base: {
    overflow: 'hidden',
    borderRadius: 30,
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
  },
  handle: {
    paddingVertical: 16,
  },
  handleIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#e5e7eb',
  },
});
