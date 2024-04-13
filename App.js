import { TodoApp } from './src/screens/TodoApp';
import { NewTodo } from './src/screens/NewTodo';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { todoList } from './src/screens/NewTodo';
// import{setTodoList} from './src/screens/NewTodo'

const Stack = createStackNavigator()
export default function App() {
 

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'TodoApp' 
            component={TodoApp} 
            options= {{headerShown: false,}}/>
        <Stack.Screen name = 'NewTodo' component={NewTodo} options= {{headerShown: false,}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )}