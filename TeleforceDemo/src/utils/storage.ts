import EncryptedStorage from 'react-native-encrypted-storage';

export const setItem = async (key: string, value: any) => {
  if (!key || !value) return;
  try {
    const setValue = await EncryptedStorage.setItem(key, JSON.stringify(value));
    return setValue;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (key: string) => {
  if (!key) return;
  try {
    const getValue = await EncryptedStorage.getItem(key);
    if (getValue !== undefined) {
      return JSON.parse(getValue as string);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = async (key: string) => {
  if (!key) return;
  try {
    const removeValue = await EncryptedStorage.removeItem(key);
    return removeValue;
  } catch (error) {
    console.log(error);
  }
};

// update the value of the key
export const updateItem = async (key: string, value: any) => {
  if (!key || !value) return;
  try {
    const getValue = await getItem(key);
    const updatedValue = {...getValue, ...value};
    const setValue = await setItem(key, updatedValue);
    return setValue;
  } catch (error) {
    console.log(error);
  }
};
