import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    color: '#000',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearIcon: {
    bottom: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberInput: {
    width: '79%',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    // backgroundColor: '#ccc',
  },
  dialer: {
    width: '100%',
    height: '50%',
    // backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    // margin: 10,
  },
  clearButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 20,
  },
});
