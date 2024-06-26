import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert, Pressable, FlatList } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { saveTodoData } from '../data/mydata';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodoApp = () =>{
  const route = useRoute();
  const navigation = useNavigation();

  // To filter if the arrow down is shown or no
  const [keys, setkeys] = useState([]);
  const includedKeys = (key) =>{
    setkeys((prevKeys) => 
      prevKeys.includes(key)? prevKeys.filter((item) => item !== key) : [...prevKeys, key]
    )};
    
    // function to delete the todos
    const [closeItemKey, setCloseItemKey] = useState([])
    const toogleClose = (key)=>{
      setCloseItemKey((prevKeys) =>{
        if (prevKeys.includes(key)){
          return prevKeys.filter((itemkey)=> itemkey !== key)
        }else{
          return [...prevKeys, key]
        }
      })
    }

    // Function to state the todo is finished or not
    const toogleTick = (key)=>{
      setTodoList(todoList.map(todo => {
        if (todo.key === key) {
          return { ...todo, finished: !todo.finished };
        } else {
          return todo;
        }
      }));
    }

    const [todoList, setTodoList] = useState([]);

    // Todelete the todos by pressing X in task
    const removeTodo = (todoitemKey) => {
      setTodoList(todoList => {
        return todoList.filter((todo) => todo.key !== todoitemKey);
      });
    };

    useEffect(() => {getTodoData
      const getTodoData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('todoList');
          if (jsonValue !== null) {
            setTodoList(JSON.parse(jsonValue));
          }
        } catch (error) {
          console.error('Error retrieving data from AsyncStorage:', error);
        }
      };
  
      getTodoData();
    }, []);  
    
    // To get data passed as NewTodo from add todo page
    useEffect(() => {
      if (route.params?.newTodo) {
        const { newTodo } = route.params;      
        setTodoList([...todoList, newTodo]);
        console.log(todoList)
        navigation.navigate('NewTodo',{todoList,back:"Back"})
      }
    }, [route.params?.newTodo]);
    
    // Event handler for Newt todo function
    const gotonewtodo = () =>{
      navigation.navigate('NewTodo', {todoList,back:null})}
      
    useEffect(() => {
      saveTodoData(todoList);

    }, [todoList]);
    
    return (      
        <View style={styles.container}>
            <Text style = {styles.header}>My Todo List</Text>
            <View style = {styles.writingArea}>

              <FlatList
                data = {todoList}
                renderItem ={({item})=>(
                  <View style = {styles.box}>
                      <Text style = {styles.listTitle}>{item.title}</Text>                     
                      {
                        keys.includes(item.key) ?
                          <View>
                            <Text style = {styles.listDescription}>{item.description}</Text>
                            <View>
                              <Pressable
                                onPress = {()=>{toogleTick(item.key);
                                console.log(todoList)}}

                                style = {({pressed}) => (pressed ? {opacity: 0.3, width:0, height:0}:{})}
                                >

                                <Text style = {styles.listDescriptionTick}><AntDesign name={(item.finished)?"":"checksquareo"} size={24} color="green" /></Text>
                              </Pressable>
                              <Pressable
                                 onPress = {()=>{
                                  toogleClose(item.key);
                                  removeTodo(item.key)
                                }}
                                
                                style = {({pressed}) => [(pressed ? {opacity: 0.2}:{})]}
                                >
                                <Text style = {styles.listDescriptionCross}><AntDesign name={closeItemKey.includes(item.key)?"closesquare":"closesquareo" } size={24} color="red" /></Text>
                              </Pressable>
                             
                            </View>
                            
                          </View>
                        : null
                      }
                      <Pressable
                        style = {({pressed}) => [(pressed ? {opacity: 0.2}:{})]}
                        onPress={()=>{
                          includedKeys(item.key);
                        }}>
                      { 
                        <View>
                          <Text  style = {styles.arrowDown}><FontAwesome6 
                            name={keys.includes(item.key) ?"arrow-up":"arrow-down-long" } size={20} color="black" /></Text>
                        </View>                         
                      }
                      </Pressable>                      
                  </View>
                )}
              />
        </View>
        
          <Pressable
              onPress={gotonewtodo}
              style = {({pressed}) => [(pressed ? {opacity: 0.2}:{}), styles.addButton,]}>
                <MaterialIcons name='add-circle-outline' style = {{fontWeight:'bold'}} size={20} color='black'/>
                <Text style = {styles.addText}>Add New Todo</Text>
          </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeacb',
    alignItems: 'center',
  },
  header:{   
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 70,
    width: '100%',
    textAlign: 'center',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd596',    
  },

  writingArea:{
    width:385,
    maxHeight:550,
    paddingBottom: 15,
    paddingTop: 10,
    paddingRight: 7,
    paddingLeft: 7,
    marginBottom: 50,    
    backgroundColor: '#ffd596',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: 5,
    alignContent: 'center',
  },

  box:{
    width:360,
    paddingBottom: 10,
    backgroundColor:'#ffb64a',
    marginBottom: 10,
    marginLeft: 7,
    borderRadius: 10,
    alignContent:'center',
  },

  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',  
  },

  listDescription:{
    fontSize: 15,
    textAlign: 'center',
    width: '90%'
  },

  listDescriptionTick:{
    position: 'absolute',
    bottom: 20,
    left:280,
  },

  listDescriptionCross:{
    position: 'absolute',
    bottom: 20,
    left:325,
  },

  arrowDown:{
    fontSize: 10,
    textAlign: 'center'
  },

  addButton:{
    flexDirection: 'row',
    paddingTop:5,
    width: 130,
    height:30,
    backgroundColor: '#ffb64a',
    textAlign: 'center',
    justifyContent: 'center',
  },

  addText:{
    fontWeight: 'bold',
    fontSize: 15,
  }
});
