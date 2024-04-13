import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTodoData = async (todoList) => {
      try {
        const jsonValue = JSON.stringify(todoList);
        await AsyncStorage.setItem('todoList', jsonValue);
        
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };


  
