// todoStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTodoData = async (todoList) => {
      try {
        const jsonValue = JSON.stringify(todoList);
        await AsyncStorage.setItem('todoList', jsonValue);
        
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };
export const getTodoData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todoList');
      if (jsonValue !== null) {
        // If todoList exists in AsyncStorage, set it to state
        return jsonValue !== null ? JSON.parse(jsonValue) : [];
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };
  
export const retrieveTodoList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todoList');
    console.log(jsonValue)
    ;
  } catch (error) {
    console.error('Error retrieving data from AsyncStorage:', error);
    return [];
  }
};