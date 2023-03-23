import { StyleSheet } from 'react-native';
import { colors, fontSizes } from 'theme';

export const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  iconContainer: {
    bottom: 40,
    position: 'absolute',
  },
  name: {
    color: colors.text,
    fontSize: fontSizes.h6,
    fontWeight: 'bold',
  },
  phone: {
    color: colors.text,
    fontSize: fontSizes.h4,
    fontWeight: '500',
    marginVertical: 20,
  },
  spacer: {
    marginTop: 30,
  },
});
