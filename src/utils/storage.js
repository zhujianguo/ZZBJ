import { AsyncStorage } from 'react-native';

async function getItem(key) {
  try {
    const str = await AsyncStorage.getItem(key);

    // str为null或空字符串
    if (!str) return str;

    try {
      return JSON.parse(str);
    } catch (e) {
      return str;
    }
  } catch (e) {
      
    console.log('AsyncStorage.getItem error', e);
  }
}

async function setItem(key, value) {
  // 兼容value为string等情况
  let strValue;
  if (!value) {
    strValue = '';
  } else {
    strValue = typeof value === 'string' ? value : JSON.stringify(value);
  }

  try {
    await AsyncStorage.setItem(key, strValue);
  } catch (e) {
    console.log('AsyncStorage.setItem error', e);
  }
}

async function mergeItem(key, mergeValue) {
  // 兼容mergeValue为string等情况
  let strValue;
  if (!mergeValue) {
    strValue = '';
  } else {
    strValue = typeof value === 'string' ? mergeValue : JSON.stringify(mergeValue);
  }

  try {
    await AsyncStorage.mergeItem(key, strValue);
  } catch (e) {
    console.log('AsyncStorage.mergeItem error', e);
  }
}

async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('AsyncStorage.removeItem error', e);
  }
}

export default {
  getItem,
  setItem,
  mergeItem,
  removeItem
};