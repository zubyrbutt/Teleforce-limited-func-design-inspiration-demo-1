import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  clearIcon: {
    alignItems: 'center',
    borderRadius: 20,
    bottom: 5,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    bottom: 0,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  dialer: {
    borderRadius: 5,
    height: '50%',
    padding: 10,
    width: '100%',
  },
  name: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '500',
  },
  phoneInputContainer: {
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  phoneNumberInput: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10,
    paddingVertical: 10,
    width: '79%',
  },
  transparent: { backgroundColor: 'transparent', height: 40, width: 40 },
});
