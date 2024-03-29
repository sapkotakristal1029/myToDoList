import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert,Pressable } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export const TodoApp = () =>{
    const navigation = useNavigation();

    const gotonewtodo = () =>{
        navigation.navigate('NewTodo')}

    return (
        <View style={styles.container}>
            <Text style = {styles.header}>My Todo List</Text>

            <View style = {styles.writingArea}>
                <View style = {styles.box}>
                    <Text style = {styles.listTitle}>Task 1</Text>
                    <Text style = {styles.listDescription}>Description about it what to do and other thing</Text>
                </View>

                <View style = {styles.box}>
                    <Text style = {styles.listTitle}>Task 2</Text>
                    <Text style = {styles.listDescription}>Description about it what to do and other thing</Text>
                </View>

                <View style = {styles.box}>
                    <Text style = {styles.listTitle}>Task 3</Text>
                    <Text style = {styles.listDescription}>I need to do this First</Text>
                </View>
            
        </View>
        
          <Pressable
              onPress={gotonewtodo}
              style = {styles.addButton}>
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
    paddingBottom: 15,
    paddingTop: 10,
    paddingRight: 7,
    paddingLeft: 7,
    marginBottom: 50,
    // height: 500,
    backgroundColor: '#ffd596',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box:{
  
    width:120,
    backgroundColor:'#ffb64a',
    
  },
  listTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  listDescription:{
    fontSize: 12,
    textAlign: 'center',
  },
  addButton:{
    flexDirection: 'row',
    paddingTop:5,
    width: 130,
    height:25,
    backgroundColor: '#ffb64a',
    textAlign: 'center',
    justifyContent: 'center',
  },
  addText:{
    fontWeight: 'bold',
    fontSize: 15,
  }

});
