import {StyleSheet} from 'react-native';

import {colors} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  name: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.black,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  clearIcon: {
    bottom: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberInput: {
    width: '79%',
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '500',
    color: colors.black,
  },
  dialer: {
    width: '100%',
    height: '50%',
    borderRadius: 5,
    padding: 10,
  },
});
